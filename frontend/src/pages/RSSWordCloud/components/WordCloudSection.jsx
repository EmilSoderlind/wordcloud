import React from 'react'
import { TagCloud } from 'react-tagcloud'

const wrapperStyle = {
  height: '45vh',
  overflow: 'overlay',
  margin: '8px',
  backgroundColor: '#ffffff',
  boxShadow: '0 1px 2px 0 rgb(0 0 0 / 15%)',
  borderTopStyle: 'solid',
  borderColor: '#e02e3d',
}

const colorOptions = {
  luminosity: 'dark',
}

export const WordCloudSection = ({ wordOccurences }) => {
  return (
    <div style={wrapperStyle}>
      {wordOccurences ? (
        <TagCloud minSize={15} maxSize={80} tags={wordOccurences} colorOptions={colorOptions} />
      ) : (
        <img src='/loading.png' alt='Loading indicator' style={{ width: '100%' }} />
      )}
    </div>
  )
}
