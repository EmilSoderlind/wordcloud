const { parseRssItemsToWordListWithDuplicates } = require('./rssItemParser')

const ITEM_TITLE_1 = 'EMIL vinner mElodifEstivAlen'
const ITEM_CONTENT_1 =
  "Efter en riktig nagelbitare så vinner stjärnskottet Emil MelodifestivaleN med låten 'Om jag vore ett dragspel!'"

// TODO: I'm sure we could implement a more covering test suit here! With more thought through names..  ;)

describe('Parse a RSS-feed properly', () => {
  test('Empty list of RSS items returns empty word occurence', async () => {
    const wordList = parseRssItemsToWordListWithDuplicates([], [])
    expect(wordList).toEqual([])
  })

  test('All non stop-words in RSS item list with 1 item gets returned without stop-words', async () => {
    const items = [
      {
        title: ITEM_TITLE_1,
        content: ITEM_CONTENT_1,
      },
    ]
    const wordList = parseRssItemsToWordListWithDuplicates(items, [])
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
    const wordList = parseRssItemsToWordListWithDuplicates(items, [])
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
})
