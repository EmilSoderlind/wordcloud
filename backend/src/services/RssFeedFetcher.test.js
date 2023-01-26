const { _parseRssItemsToWords, _getWordOccurrences } = require('./RssFeedFetcher')

const ITEM_TITLE_1 = 'EMIL vinner mElodifEstivAlen'
const ITEM_CONTENT_1 =
  "Efter en riktig nagelbitare så vinner stjärnskottet Emil MelodifestivaleN med låten 'Om jag vore ett dragspel!'"

// TODO: I'm sure we could implement a more covering test suit here! ;)

describe('RSS feed fetcher should parse a RSS-feed properly', () => {
  test('Empty list of RSS items returns empty word occurence', async () => {
    const wordList = _parseRssItemsToWords([], [])
    expect(wordList).toEqual([])
  })

  test('All non stop-words in RSS item list with 1 item gets returned without stop-words', async () => {
    const items = [
      {
        title: ITEM_TITLE_1,
        content: ITEM_CONTENT_1,
      },
    ]
    const wordList = _parseRssItemsToWords(items, [])
    expect(wordList).toEqual([
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
    ])
  })

  test('All non stop-words in RSS item list with 4 item gets returned without stop-words', async () => {
    const items = [
      {
        title: ITEM_TITLE_1,
        content: ITEM_CONTENT_1,
      },
      {
        title: ITEM_TITLE_1,
        content: ITEM_CONTENT_1,
      },
      {
        title: ITEM_TITLE_1,
        content: ITEM_CONTENT_1,
      },
      {
        title: ITEM_TITLE_1,
        content: ITEM_CONTENT_1,
      },
    ]
    const wordList = _parseRssItemsToWords(items, [])
    expect(wordList).toEqual([
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
    ])
  })

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

    const wordOccurrenceList = _getWordOccurrences(wordList)
    console.log('🚀 ~ test ~ wordOccurrenceList', wordOccurrenceList)

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
