const parseRssItemsToWordListWithDuplicates = (items, stopWords) =>
  items.map(_getWordListFromRssItem(stopWords)).flat()

const _getWordListFromRssItem = (stopWords) => (item) => {
  const titleWords = item.title.split(' ')
  const contentWords = item.content.split(' ')

  const words = [...titleWords, ...contentWords]

  return _removeNonEligableCharsAndStopWords({ words, stopWords })
}

const _removeNonEligableCharsAndStopWords = ({ words, stopWords }) => {
  return words
    .map(
      (word) => word.toLowerCase().replace(/[^a-ö0-9]/g, '') // Remove words with numbers, ", : etc
    )
    .filter(_nonStopWord(stopWords))
    .filter(Boolean)
}

const _nonStopWord = (stopWords) => (word) => !stopWords.includes(word)

module.exports = {
  parseRssItemsToWordListWithDuplicates,
}
