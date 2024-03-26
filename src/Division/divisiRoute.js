const express = require('express')
const divisiRoute = express()
const divisiControl = require('./divisiController')

divisiRoute.get('/', divisiControl.getAll)
divisiRoute.get('/get-by-id/:id', divisiControl.getById)
divisiRoute.post('/create', divisiControl.createNew)
divisiRoute.delete('/:divisionName', divisiControl.deleteData)

module.exports = divisiRoute