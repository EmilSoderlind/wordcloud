const { STOP_WORDS } = require('../configs/stopWords')
const { fetchRssFeed } = require('./feedParser')

const WORD_COUNT = 100

const _nonStopWord = (stopWords) => (word) => !stopWords.includes(word)

// Takes wordList ['WORD_1', 'WORD_2', .. ] returns wordOccurrences [{ value: 'WORD_1', count: 14 }, .. ]
const _getWordOccurrences = (wordList) =>
  wordList.reduce((accumulatedWordOccurrences, currentWord) => {
    const currentWordCount = accumulatedWordOccurrences.find(
      (wordOccurrence) => currentWord === wordOccurrence.value
    )?.count

    return [
      ...accumulatedWordOccurrences.filter(
        ({ value }) => value !== currentWord
      ),
      {
        value: currentWord,
        count: currentWordCount ? currentWordCount + 1 : 1
      }
    ]
  }, [])

const _filterTopWords = (wordOccurrences, wordCount = WORD_COUNT) =>
  wordOccurrences.sort((a, b) => b.count - a.count).splice(0, wordCount)

const _parseRssItemsToWords = (items, stopWords) =>
  items
    .map((item) => {
      const titleWords = item.title.split(' ')
      const contentWords = item.content.split(' ')

      const words = [...titleWords, ...contentWords]

      return words
        .map((word) =>
          word
            .replace(/[^A-Öa-ö0-9]/g, '') // words with numbers, ", : etc
            .toLowerCase()
        )
        .filter(_nonStopWord(stopWords))
        .filter(Boolean)
    })
    .flat()

/**
 * Takes RSS-feed URL (and optional config), returns sorted list of word occurrences
 * Example: [{ value: 'WORD_1', count: 14 }, { value: 'WORD_2', count: 9 }.. ]
 * @param {{feedUrl: String, config: Object}} Obj
 * @param {String} Obj.feedUrl RSS-feed URL
 * @param {Object} Obj.config  Optional configuration of RSS parsing
 * @async
 * @returns Sorted list of word occurrences
 */
const getWordOccurrencesFromRss = async ({
  feedUrl,
  config = { wordCount: WORD_COUNT, stopWords: STOP_WORDS }
}) => {
  console.info(`Requesting word counts for ${feedUrl} RSS feed`)

  if (!feedUrl) throw Error('Missing RSS feed URL')

  // TODO: Add more config functionality. word-count? choose stop-words?
  const { stopWords, wordCount } = config

  const { items } = await fetchRssFeed(feedUrl)

  const wordList = _parseRssItemsToWords(items, stopWords)

  const wordOccurrences = _getWordOccurrences(wordList)

  return _filterTopWords(wordOccurrences, wordCount)
}

module.exports = {
  getWordOccurrencesFromRss,
  _parseRssItemsToWords, // Export for testing purposes
  _getWordOccurrences // Export for testing purposes
}
