const express = require('express')
require('express-async-errors')
const app = express()
const cors = require('cors')
const housesRouter = require('./controllers/houses')
const middleware = require('./utils/middleware')

app.use(cors())
app.use(express.json())
app.use(middleware.requestLogger)

app.use('/houses', housesRouter)

app.use(middleware.unknownEndpoint)

module.exports = app