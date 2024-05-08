const express = require('express')
const roleRoute = express()
const roleControl = require('./roleController')

roleRoute.get('/', roleControl.getAll)
roleRoute.get('/get-by-id/:id', roleControl.getById)
roleRoute.put('/edit/:id', roleControl.edit)
roleRoute.post('/create', roleControl.createNew)
roleRoute.delete('/delete/:id', roleControl.deleteData)

module.exports = roleRoute