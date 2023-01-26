import { useState } from 'react'
import { getWordOccurrences } from '../../../api'

// TODO: Build a more clever caching solution, perhaps also backend
const _simpleCache = {}

export const useWordOccurencesInRss = () => {
  const [wordOccurences, setWordOccurences] = useState()

  const fetchWordOccurrences = async ({ feedUrl }) => {
    if (!_simpleCache[feedUrl]) {
      const result = await getWordOccurrences({ feedUrl })
      _simpleCache[feedUrl] = result
    }

    setWordOccurences(_simpleCache[feedUrl])
  }

  const clearWordOccurences = () => setWordOccurences()

  return {
    wordOccurences,
    clearWordOccurences,
    fetchWordOccurrences
  }
}
