import React from 'react'
import { useForm } from 'react-hook-form'
import Input from '../../../components/Input'
import { isNotUrl } from '../../../utils/helpers'
import { ButtonSection } from './ButtonSection'

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
    <div style={{ padding: '8px' }}>
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
