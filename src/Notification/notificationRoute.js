const express = require('express')
const notificationRoute = express()
const notificationControl = require('./notificationController')

notificationRoute.get('/:userId', notificationControl.get)
notificationRoute.post('/read/:userId', notificationControl.postReadMessage)
notificationRoute.post('/create', notificationControl.postCreate)

module.exports = notificationRoute