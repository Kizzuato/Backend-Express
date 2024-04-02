const { importUser } = require("../user/userServ")
const { success, error } = require("../utils/response.utils")
const { storeToExcel } = require("./uploadService")
const uploadService = require('./uploadService')

const store = async (req, res) => {
    try {
        if (!req.file) throw Error('Please include the proper Excel File')
        const data = await uploadService.storeToExcel(req.file, req.user, req.body.info)
        return success(res, 'Excel Stored Successfully', data)
    } catch (err) {
        console.log(err)
        return error(res, err.message)
    }
}

const storeUser = async(req, res) => {
    try{
        if (!req.file) throw Error('Please include the proper Excel File')
        const importedUser = await importUser(req.file)
        return success(res, `User Imported`,  importedUser.imported)
    }catch(err){
        return error(res, err.message)
    }
}

const getAll = async (req, res) => {
    const { search, from, to } = req.query
    try{
        const data = await uploadService.getAllHistory(search, from, to)
        return success(res, 'Success', data)
    }catch(err){
        console.log(err)
        return error(res, err.message)
    }
}

module.exports = { store, getAll, storeUser }