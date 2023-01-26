import axios from 'axios'
import { API_TOKEN } from './auth'

const BASEURL = 'http://localhost:3001'
const headers = { authorization: API_TOKEN }

const paths = {
  wordOccurrences: '/wordOccurrences',
}

export const getWordOccurrences = async ({ feedUrl, config }) => {
  try {
    const { data } = await axios.post(
      BASEURL + paths.wordOccurrences,
      { feedUrl, config },
      { headers }
    )
    return data
  } catch (error) {
    console.error(error)
    throw error
  }
}
