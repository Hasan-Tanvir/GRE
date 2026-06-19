const fs = require('fs');
const path = require('path');
const vm = require('vm');

const vocabPath = path.join(__dirname, 'vocab.js');
const outputPath = path.join(__dirname, 'vocab.js');

const raw = fs.readFileSync(vocabPath, 'utf8');
const match = raw.match(/const\s+VOCAB_DATA\s*=\s*(\[[\s\S]*\]);?/m);
if (!match) {
  throw new Error('Could not locate VOCAB_DATA array in vocab.js');
}

const sandbox = { module: {}, exports: {}, require, console, fetch };
const dataCode = `const VOCAB_DATA = ${match[1]}; VOCAB_DATA;`;
const vocabData = vm.runInNewContext(dataCode, sandbox);

if (!Array.isArray(vocabData)) {
  throw new Error('Parsed VOCAB_DATA is not an array');
}

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function fetchPhonetic(word) {
  const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${encodeURIComponent(word)}`;
  try {
    const res = await fetch(url);
    if (!res.ok) return null;
    const data = await res.json();
    if (!Array.isArray(data) || data.length === 0) return null;
    const entry = data[0];
    if (entry.phonetic) return entry.phonetic;
    if (Array.isArray(entry.phonetics)) {
      const phoneticItem = entry.phonetics.find((item) => item.text && item.text.trim());
      if (phoneticItem) return phoneticItem.text.trim();
    }
    return null;
  } catch (err) {
    return null;
  }
}

(async () => {
  console.log(`Loaded ${vocabData.length} words from vocab.js`);
  const results = [];
  for (let i = 0; i < vocabData.length; i += 1) {
    const entry = vocabData[i];
    if (!entry.word) {
      results.push({ word: null, success: false, reason: 'Missing entry.word' });
      continue;
    }
    if (entry.phonetic) {
      results.push({ word: entry.word, success: true, phonetic: entry.phonetic, source: 'existing' });
      continue;
    }
    const phonetic = await fetchPhonetic(entry.word);
    if (phonetic) {
      entry.phonetic = phonetic;
      results.push({ word: entry.word, success: true, phonetic, source: 'api' });
    } else {
      results.push({ word: entry.word, success: false, reason: 'API missing' });
    }
    if ((i + 1) % 10 === 0) {
      console.log(`Processed ${i + 1}/${vocabData.length}`);
    }
    await delay(150);
  }

  const missing = results.filter((r) => !r.success);
  console.log(`Completed. Phonetics missing for ${missing.length} words.`);
  const output = `const VOCAB_DATA = ${JSON.stringify(vocabData, null, 4)};\n`;
  fs.writeFileSync(outputPath, output, 'utf8');
  const example = results.filter((r) => r.success && r.source === 'api').slice(0, 10);
  console.log('Sample updated entries:', example);
})();
