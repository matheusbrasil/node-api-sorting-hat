const express = require('express')

const app = express()
const sortingHat = require('./routes/sortingHat')

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use('/sortingHat', sortingHat)

module.exports = app