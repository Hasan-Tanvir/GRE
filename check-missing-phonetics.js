const fs = require('fs');
const raw = fs.readFileSync('vocab.js', 'utf8');
const m = raw.match(/const VOCAB_DATA = ([\s\S]*);/m);
if (!m) throw new Error('Failed to parse vocab.js');
const data = JSON.parse(m[1]);
const missing = data.filter((entry) => !entry.phonetic).slice(0, 20).map((e) => e.word);
console.log('Checking', missing.length, 'missing sample words');

async function check(word) {
  try {
    const res = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${encodeURIComponent(word)}`);
    if (!res.ok) {
      console.log(word, 'STATUS', res.status);
      return;
    }
    const json = await res.json();
    const entry = Array.isArray(json) ? json[0] : json;
    const phon = entry && entry.phonetic;
    const phonetics = entry && entry.phonetics && Array.isArray(entry.phonetics)
      ? entry.phonetics.filter((p) => p && p.text).map((p) => p.text)
      : undefined;
    console.log(word, 'status', res.status, 'phonetic=', phon, 'phonetics=', phonetics);
  } catch (err) {
    console.log(word, 'ERROR', err.message);
  }
}

(async () => {
  for (const word of missing) {
    await check(word);
  }
})();
