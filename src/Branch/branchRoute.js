const express = require('express')
const branchRoute = express()
const branchControl = require('./branchController')

branchRoute.get('/', branchControl.getAll)
branchRoute.post('/create', branchControl.createNew)
branchRoute.delete('/:branchonName', branchControl.deleteData)

module.exports = branchRoute