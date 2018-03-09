const express = require('express')
const controller = require('./controllers/courses.js')
const bodyParser = require('body-parser')


const router = express.Router()
router.use(bodyParser.json())
router.get('/',controller.courses.get)



module.exports = router