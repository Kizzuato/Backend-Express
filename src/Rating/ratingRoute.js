const express = require('express')
const ratingRoute = express()
const ratingControl = require('./ratingController')

ratingRoute.get('/', ratingControl.getAll)
ratingRoute.get('/get-by-id/:id', ratingControl.getById)
ratingRoute.put('/edit/:id', ratingControl.edit)
ratingRoute.post('/create', ratingControl.createNew)
ratingRoute.delete('/delete/:id', ratingControl.deleteData)

module.exports = ratingRoute