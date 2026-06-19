const fs = require('fs');
const path = require('path');
const pronouncing = require('cmu-pronouncing-dictionary').dictionary;

const arpabetToIpaMap = {
  AA: 'ɑ',
  AE: 'æ',
  AH: 'ə',
  AO: 'ɔ',
  AW: 'aʊ',
  AY: 'aɪ',
  B: 'b',
  CH: 'tʃ',
  D: 'd',
  DH: 'ð',
  EH: 'ɛ',
  ER: 'ɝ',
  EY: 'eɪ',
  F: 'f',
  G: 'ɡ',
  HH: 'h',
  IH: 'ɪ',
  IY: 'i',
  JH: 'dʒ',
  K: 'k',
  L: 'l',
  M: 'm',
  N: 'n',
  NG: 'ŋ',
  OW: 'oʊ',
  OY: 'ɔɪ',
  P: 'p',
  R: 'ɹ',
  S: 's',
  SH: 'ʃ',
  T: 't',
  TH: 'θ',
  UH: 'ʊ',
  UW: 'u',
  V: 'v',
  W: 'w',
  Y: 'j',
  Z: 'z',
  ZH: 'ʒ',
  AX: 'ə',
  AXR: 'ər',
  IX: 'ɪ',
  EL: 'əl',
  EM: 'əm',
  EN: 'ən',
  NX: 'n',
};

function convertArpabetToIpa(arpabet) {
  if (!arpabet || typeof arpabet !== 'string') return null;
  const tokens = arpabet.trim().split(/\s+/);
  let ipa = '';

  for (const token of tokens) {
    const stressMatch = token.match(/(\d)$/);
    const phoneme = token.replace(/\d$/, '');
    const ipaSymbol = arpabetToIpaMap[phoneme] || phoneme.toLowerCase();

    if (stressMatch) {
      const stress = stressMatch[1];
      if (stress === '1') {
        ipa += 'ˈ' + ipaSymbol;
        continue;
      }
      if (stress === '2') {
        ipa += 'ˌ' + ipaSymbol;
        continue;
      }
    }

    ipa += ipaSymbol;
  }

  return ipa ? `/${ipa}/` : null;
}

const vocabPath = path.join(__dirname, 'vocab.js');
const raw = fs.readFileSync(vocabPath, 'utf8');
const match = raw.match(/const\s+VOCAB_DATA\s*=\s*(\[[\s\S]*\]);?/m);
if (!match) throw new Error('Could not parse vocab.js');
const vocabData = JSON.parse(match[1]);

let updated = 0;
let notFound = 0;

for (const entry of vocabData) {
  if (entry.phonetic) continue;
  if (!entry.word) continue;

  const wordKey = entry.word.toLowerCase();
  const pronunciations = pronouncing[wordKey];
  if (!pronunciations) {
    notFound += 1;
    continue;
  }

  const arpabet = Array.isArray(pronunciations) ? pronunciations[0] : pronunciations;
  const ipa = convertArpabetToIpa(arpabet);
  if (ipa) {
    entry.phonetic = ipa;
    updated += 1;
  } else {
    notFound += 1;
  }
}

const output = `const VOCAB_DATA = ${JSON.stringify(vocabData, null, 4)};\n`;
fs.writeFileSync(vocabPath, output, 'utf8');
console.log(`Updated ${updated} words with local IPA, ${notFound} still missing.`);
