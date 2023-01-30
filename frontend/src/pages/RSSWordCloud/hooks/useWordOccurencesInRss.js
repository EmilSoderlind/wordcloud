import { useState } from 'react'
import { getWordOccurrences } from '../../../api'

// TODO: Build a more clever caching solution, perhaps also backend
const _simpleCache = {}

const _missingInCache = (feedUrl) => !_simpleCache[feedUrl]

export const useWordOccurencesInRss = () => {
  const [wordOccurences, setWordOccurences] = useState()

  const fetchWordOccurrences = async ({ feedUrl }) => {
    if (_missingInCache(feedUrl)) {
      const result = await getWordOccurrences({ feedUrl })
      _simpleCache[feedUrl] = result
    }

    setWordOccurences(_simpleCache[feedUrl])
  }

  const clearWordOccurences = () => setWordOccurences()

  return {
    wordOccurences,
    clearWordOccurences,
    fetchWordOccurrences,
  }
}
