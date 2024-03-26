const express = require('express')
const branchRoute = express()
const branchControl = require('./branchController')

branchRoute.get('/', branchControl.getAll)
branchRoute.get('/get-by-id/:id', branchControl.getById)
branchRoute.post('/create', branchControl.createNew)
branchRoute.delete('/:branchName', branchControl.deleteData)

module.exports = branchRoute