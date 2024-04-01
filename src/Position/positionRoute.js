const express = require('express')
const positionRoute = express()
const positionControl = require('./positionController')

positionRoute.get('/', positionControl.getAll)
positionRoute.get('/get-by-id/:id', positionControl.getById)
positionRoute.post('/create', positionControl.createNew)
positionRoute.delete('/delete/:id', positionControl.deleteData)

module.exports = positionRoute