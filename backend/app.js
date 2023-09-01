const express = require('express')
const morgan = require('morgan')
const dbConnection = require('./db')
const todos = require('./routes/todo')

const app = express()

app.use(express.json())
app.use(morgan('dev'))
app.use('/todos', todos)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

dbConnection()

app.listen(3000, () => {
  console.log('App listening on port 3000!')
})
