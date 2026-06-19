const fs = require('fs');
const path = require('path');
const vocabPath = path.join(__dirname, 'vocab.js');
const raw = fs.readFileSync(vocabPath, 'utf8');
const match = raw.match(/const\s+VOCAB_DATA\s*=\s*(\[[\s\S]*\]);?/m);
if (!match) throw new Error('Could not parse vocab.js');
const data = JSON.parse(match[1]);
const mapping = {
  enervate: '/ˈɛn.ər.veɪt/',
  clangor: '/ˈklæŋ.ɡər/',
  irresolute: '/ɪˈɹɛzəluːt/',
  conjectural: '/kənˈdʒɛktʃərəl/',
  skullduggery: '/skʌlˈdʌɡəri/',
  recrudescent: '/ˌriːkɹəˈdɛsənt/',
  modish: '/ˈmoʊ.dɪʃ/',
  enthrall: '/ɪnˈθɹɔːl/',
  mettlesome: '/ˈmɛtəl.səm/',
  exorcise: '/ˈɛk.sɔːɹ.saɪz/',
  officious: '/əˈfɪʃəs/',
  extemporize: '/ɪkˈstɛmpəˌraɪz/',
  indecorous: '/ɪnˈdɛkərəs/',
  occlude: '/əˈkluːd/',
  'stem from': '/ˈstɛm frəm/',
};

let changed = 0;
for (const entry of data) {
  if (!entry.word) continue;
  const word = String(entry.word);
  if (mapping[word] && !entry.phonetic) {
    entry.phonetic = mapping[word];
    changed += 1;
  }
}

const output = `const VOCAB_DATA = ${JSON.stringify(data, null, 4)};\n`;
fs.writeFileSync(vocabPath, output, 'utf8');
console.log(`Patched ${changed} entries`);
