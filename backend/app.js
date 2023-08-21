const express = require('express')
const morgan = require('morgan')
const dbConnection = require('./db')

const app = express()

app.use(express.json())
app.use(morgan('dev'))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

dbConnection()

app.listen(3000, () => {
  console.log('App listening on port 3000!')
})
