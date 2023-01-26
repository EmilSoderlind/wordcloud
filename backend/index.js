const express = require('express')
const app = express()
const port = 3001
const cors = require('cors')
const wordOccurrencesRouter = require('./src/routes')

app.use(cors())
app.use(express.json())

app.use('/wordOccurrences', wordOccurrencesRouter)

app.listen(port, () => {
  console.log(`Listening on port ${port} 🚀`)
})
