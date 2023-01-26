import React from 'react'
import { Footer } from './components/Footer'
import { FormSection } from './components/FormSection'
import { Header } from './components/Header'
import { WordCloudSection } from './components/WordCloudSection'
import { useWordOccurencesInRss } from './hooks/useWordOccurencesInRss'

const containerStyle = { overflow: 'hidden' }

export const RSSWordCloud = () => {
  const { wordOccurences, clearWordOccurences, fetchWordOccurrences } = useWordOccurencesInRss()

  return (
    <div style={containerStyle}>
      <Header />
      <WordCloudSection wordOccurences={wordOccurences} />
      <FormSection
        fetchWordOccurrences={fetchWordOccurrences}
        clearWordOccurences={clearWordOccurences}
        wordOccurences={wordOccurences}
      />
      <Footer />
    </div>
  )
}
