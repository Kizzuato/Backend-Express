const { throwError } = require("../utils/error.utils")
const { success, error } = require("../utils/response.utils")
const divisiRepo = require('./divisiRepo')

const getAll = async (req, res) => {
    try{
        const divisions = await divisiRepo.getAll()
        return success(res, 'Success', divisions)
    }catch(err){
        return error(res, err.message)
    }
}

const deleteData = async (req, res) => {
    try{
        const divisi = await divisiRepo.isExist(req.params.divisionName)
        if(!divisi) throw Error('Divisi didnt exist')
        const deletedDivisi = await divisiRepo.del(divisi.id)
        return success(res, `Divisi ${deletedDivisi.divisionName} Deleted Successfully`, deletedDivisi)
    }catch(err){
        return error(res, err.message)
    }
}

const createNew = async (req, res) => {
    try{
        const exist = await divisiRepo.isExist(req.body.divisionName)
        if(exist) throw Error('Divisi already exist')
        const createdDivisi = await divisiRepo.create(req.body)
        return success(res, `Divisi ${createdDivisi.divisionName} Created`, createdDivisi)
    }catch(err){
        return error(res, err.message)
    }
}

module.exports = { createNew , getAll, deleteData}