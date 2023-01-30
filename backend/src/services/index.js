const { STOP_WORDS } = require('../configs/stopWords')
const { fetchRssFeed } = require('./rssFetcher')
const { parseRssItemsToWordListWithDuplicates } = require('./rssItemParser')
const { countWordOccurrencesInList } = require('./wordCounter')

const WORD_COUNT = 100

const _filterTopWords = (wordOccurrences, wordCount = WORD_COUNT) =>
  wordOccurrences.sort((a, b) => b.count - a.count).splice(0, wordCount)

/**
 * Takes RSS-feed URL (and optional config), returns list of word occurrences
 * Example: [{ value: 'WORD_1', count: 14 }, { value: 'WORD_2', count: 9 }.. ]
 * @param {{feedUrl: String, config: Object}} Obj
 * @param {String} Obj.feedUrl RSS-feed URL
 * @param {Object} Obj.config  Optional configuration of RSS parsing
 * @async
 * @returns list of word occurrences
 */
const getWordOccurrencesFromRss = async ({
  feedUrl,
  config = { wordCount: WORD_COUNT, stopWords: STOP_WORDS },
}) => {
  console.info(`Requesting word counts for ${feedUrl} RSS feed`)

  if (!feedUrl) throw Error('Missing RSS feed URL')

  // TODO: Add more config functionality. word-count? choose stop-words?
  const { stopWords, wordCount } = config

  const { items } = await fetchRssFeed(feedUrl)

  const wordList = parseRssItemsToWordListWithDuplicates(items, stopWords)

  const wordOccurrences = countWordOccurrencesInList(wordList)

  return _filterTopWords(wordOccurrences, wordCount)
}

module.exports = {
  getWordOccurrencesFromRss,
}
