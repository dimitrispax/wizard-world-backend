const express = require('express')
require('express-async-errors')
const app = express()
const cors = require('cors')
const housesRouter = require('./controllers/houses')
const middleware = require('./utils/middleware')

app.use(cors())
app.use(express.json())
app.use(middleware.requestLogger)

app.get('/', (request, response) => {
  response.send('<h2>Navigate to /houses route to open the gate to Wizard World data.</h2>')
})


app.use('/houses', housesRouter)

app.use(middleware.unknownEndpoint)

module.exports = app