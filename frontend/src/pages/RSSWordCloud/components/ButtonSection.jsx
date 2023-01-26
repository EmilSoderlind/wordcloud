import { Button } from '../../../components/Button'

const buttonWrapperStyle = {
  display: 'flex',
  justifyContent: 'space-around',
  marginTop: '8px'
}

export const ButtonSection = ({
  setValue,
  wordOccurences,
  clearWordOccurences
}) => {
  return (
    <div style={buttonWrapperStyle}>
      <Button
        type={'button'}
        onClick={() => {
          clearWordOccurences()
          setValue('feedUrl', '')
        }}
        label={'Clear'}
        disabled={!wordOccurences}
      />
      <Button type={'submit'} label={'Submit'} />
    </div>
  )
}
