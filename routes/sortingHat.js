const express = require('express')
const router = express.Router()

const sortingHat = require('../services/sortingHat.service')

router.get('/', sortingHat.sortingHat)

module.exports = router