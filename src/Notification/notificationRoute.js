const express = require('express')
const notificationRoute = express()
const notificationControl = require('./notificationController')
const { auth } = require('../middleware/auth.middleware')

notificationRoute.use(auth)
notificationRoute.get('/', notificationControl.get)
notificationRoute.post('/read', notificationControl.postReadMessage)
notificationRoute.post('/create', notificationControl.postCreate)

module.exports = notificationRoute