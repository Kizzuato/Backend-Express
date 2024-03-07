const express = require('express')
const notificationRoute = express()
const notificationControl = require('./notificationController')

notificationRoute.get('/notification/:userId', notificationControl.get)

module.exports =notificationRoute