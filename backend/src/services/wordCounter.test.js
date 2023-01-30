const { countWordOccurrencesInList } = require('./wordCounter')

// TODO: I'm sure we could implement a more covering test suit here! With more thought through names..  ;)

describe('Count words in wordlist properly', () => {
  test('All words get counted in word-list', async () => {
    const wordList = [
      'emil',
      'vinner',
      'melodifestivalen',
      'efter',
      'en',
      'riktig',
      'nagelbitare',
      'så',
      'vinner',
      'stjärnskottet',
      'emil',
      'melodifestivalen',
      'med',
      'låten',
      'om',
      'jag',
      'vore',
      'ett',
      'dragspel',
      'emil',
      'emil',
    ]

    const wordOccurrenceList = countWordOccurrencesInList(wordList)

    expect(wordOccurrenceList).toEqual([
      { value: 'efter', count: 1 },
      { value: 'en', count: 1 },
      { value: 'riktig', count: 1 },
      { value: 'nagelbitare', count: 1 },
      { value: 'så', count: 1 },
      { value: 'vinner', count: 2 },
      { value: 'stjärnskottet', count: 1 },
      { value: 'melodifestivalen', count: 2 },
      { value: 'med', count: 1 },
      { value: 'låten', count: 1 },
      { value: 'om', count: 1 },
      { value: 'jag', count: 1 },
      { value: 'vore', count: 1 },
      { value: 'ett', count: 1 },
      { value: 'dragspel', count: 1 },
      { value: 'emil', count: 4 },
    ])
  })
})
