const words = [
  'enervate',
  'clangor',
  'irresolute',
  'conjectural',
  'skullduggery',
  'recrudescent',
  'modish',
  'enthrall',
  'mettlesome',
  'exorcise',
  'officious',
  'extemporize',
  'indecorous',
  'occlude',
  'stem from',
];

async function checkWord(word, locale) {
  const url = `https://api.dictionaryapi.dev/api/v2/entries/${locale}/${encodeURIComponent(word)}`;
  try {
    const res = await fetch(url);
    const text = await res.text();
    let json;
    try {
      json = JSON.parse(text);
    } catch (err) {
      json = text;
    }
    console.log('WORD', word, 'LOCALE', locale, 'STATUS', res.status);
    console.log(JSON.stringify(json, null, 2));
  } catch (err) {
    console.log('WORD', word, 'LOCALE', locale, 'ERROR', err.message);
  }
}

(async () => {
  for (const word of words) {
    await checkWord(word, 'en');
    await checkWord(word, 'en_GB');
    console.log('---');
  }
})();
