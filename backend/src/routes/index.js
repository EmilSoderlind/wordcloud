const express = require('express')
const router = express.Router()
const { wordOccurrencesFromRss } = require('../controllers/wordOccurrences')

router.post('/', wordOccurrencesFromRss)

module.exports = router
