const countWordOccurrencesInList = (wordList) =>
  wordList.reduce((accumulatedWordOccurrences, currentWord) => {
    // If we have already counted 'currentWord', we'll find it in the list
    const currentWordCount = accumulatedWordOccurrences.find(
      (wordOccurrence) => currentWord === wordOccurrence.value
    )?.count

    const newWordOccurrence = {
      value: currentWord,
      count: currentWordCount ? currentWordCount + 1 : 1,
    }

    const allWordOccurrencesWithoutCurrentWord = accumulatedWordOccurrences.filter(
      ({ value }) => value !== currentWord // Remove previous count of 'currentWord'
    )

    return [...allWordOccurrencesWithoutCurrentWord, newWordOccurrence]
  }, [])

module.exports = {
  countWordOccurrencesInList,
}
