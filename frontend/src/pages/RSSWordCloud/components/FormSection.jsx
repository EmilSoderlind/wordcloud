import React from 'react'
import { useForm } from 'react-hook-form'
import Input from '../../../components/Input'
import { isNotUrl } from '../../../utils/helpers'
import { ButtonSection } from './ButtonSection'

const containerStyle = {
  backgroundColor: '#ffffff',
  padding: '8px',
  margin: '8px',
  boxShadow: '0 1px 2px 0 rgb(0 0 0 / 15%)',
  borderTopStyle: 'solid',
  borderColor: '#e02e3d',
}

// TODO: Get copy from i18n or similar for multi-language support

export const FormSection = ({ wordOccurences, clearWordOccurences, fetchWordOccurrences }) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
    setError,
    setValue,
  } = useForm()

  const submit = async ({ feedUrl }) => {
    try {
      await fetchWordOccurrences({ feedUrl })
    } catch (error) {
      setError('feedUrl', { message: 'Could not fetch RSS feed 😢' })
    }
  }

  return (
    <div style={containerStyle}>
      <form onSubmit={handleSubmit(submit)}>
        <Input
          label={'RSS-feed link'}
          errors={errors}
          {...register('feedUrl', {
            required: 'Enter RSS-feed link',
            validate: (url) => (isNotUrl(url) ? 'Invalid link format' : undefined),
          })}
        />
        <ButtonSection
          setValue={setValue}
          wordOccurences={wordOccurences}
          clearWordOccurences={clearWordOccurences}
        />
      </form>
    </div>
  )
}
