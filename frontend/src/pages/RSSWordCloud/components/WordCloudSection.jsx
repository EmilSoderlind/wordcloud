import React from 'react'
import { TagCloud } from 'react-tagcloud'

const wrapperStyle = {
  height: '45vh',
  overflow: 'overlay',
  borderColor: 'black',
  borderStyle: 'solid',
  borderWidth: '1px',
  margin: '8px',
  borderRadius: '8px',
  backgroundColor: 'lightgrey'
}

const colorOptions = {
  luminosity: 'dark',
  hue: 'blue'
}

export const WordCloudSection = ({ wordOccurences }) => {
  return (
    <div style={wrapperStyle}>
      {wordOccurences ? (
        <TagCloud
          minSize={15}
          maxSize={80}
          tags={wordOccurences}
          colorOptions={colorOptions}
        />
      ) : (
        <img
          src='/loading.png'
          alt='Loading indicator'
          style={{ width: '100%' }}
        />
      )}
    </div>
  )
}
