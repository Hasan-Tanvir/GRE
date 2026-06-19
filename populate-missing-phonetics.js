const fs = require('fs');
const path = require('path');

const vocabPath = path.join(__dirname, 'vocab.js');
const raw = fs.readFileSync(vocabPath, 'utf8');
const match = raw.match(/const\s+VOCAB_DATA\s*=\s*(\[[\s\S]*\]);?/m);
if (!match) {
  throw new Error('Could not locate VOCAB_DATA array in vocab.js');
}

const vocabData = JSON.parse(match[1]);
const missingEntries = vocabData.filter((entry) => !entry.phonetic);
console.log(`Found ${missingEntries.length} missing phonetic entries.`);

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function fetchPhonetic(word, locale = 'en') {
  const url = `https://api.dictionaryapi.dev/api/v2/entries/${locale}/${encodeURIComponent(word)}`;
  try {
    const res = await fetch(url);
    if (!res.ok) return null;
    const data = await res.json();
    if (!Array.isArray(data) || data.length === 0) return null;
    const entry = data[0];
    if (entry.phonetic) return entry.phonetic;
    if (Array.isArray(entry.phonetics)) {
      const phoneticItem = entry.phonetics.find((item) => item && item.text && item.text.trim());
      if (phoneticItem) return phoneticItem.text.trim();
    }
    return null;
  } catch (err) {
    return null;
  }
}

(async () => {
  let updated = 0;
  for (let i = 0; i < vocabData.length; i += 1) {
    const entry = vocabData[i];
    if (entry.phonetic) continue;
    const word = entry.word;
    if (!word) continue;

    let phonetic = await fetchPhonetic(word, 'en');
    if (!phonetic) {
      phonetic = await fetchPhonetic(word, 'en_GB');
    }
    if (phonetic) {
      entry.phonetic = phonetic;
      updated += 1;
      console.log(`Updated ${word}: ${phonetic}`);
    } else {
      console.log(`Missing phonetic for ${word}`);
    }

    if ((i + 1) % 10 === 0) {
      await delay(150);
    }
  }

  const output = `const VOCAB_DATA = ${JSON.stringify(vocabData, null, 4)};\n`;
  fs.writeFileSync(vocabPath, output, 'utf8');
  console.log(`Completed phonetic update. Updated ${updated} entries.`);
})();
