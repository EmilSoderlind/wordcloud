const { API_TOKEN } = require('../configs/auth')
const { getWordOccurrencesFromRss } = require('../services')

const wordOccurrencesFromRss = async (req, res, next) => {
  const authToken = req.headers.authorization

  try {
    if (authToken !== API_TOKEN) throw Error('Invalid authorization')
    res.json(await getWordOccurrencesFromRss(req.body))
  } catch (err) {
    console.error(`Error`, err.message)
    next(err)
  }
}

module.exports = {
  wordOccurrencesFromRss,
}
