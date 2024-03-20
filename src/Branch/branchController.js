const { throwError } = require("../utils/error.utils")
const { success, error } = require("../utils/response.utils")
const branchRepo = require('./branchRepo')

const getAll = async (req, res) => {
    try{
        const branch = await branchRepo.getAll()
        return success(res, 'Success', branch)
    }catch(err){
        return error(res, err.message)
    }
}

const deleteData = async (req, res) => {
    try{
        const branch = await branchRepo.isExist(req.params.branchName)
        if(!branch) throw Error('Branch didnt exist')
        const deletedBranch = await branchRepo.del(branch.id)
        return success(res, `Branch ${deletedBranch.branchName} Deleted Successfully`, deletedBranch)
    }catch(err){
        return error(res, err.message)
    }
}

const createNew = async (req, res) => {
    try{
        const exist = await branchRepo.isExist(req.body.branchName)
        if(exist) throw Error('Branch already exist')
        const createdBranch = await branchRepo.create(req.body)
        return success(res, `Branch ${createdBranch.branchName} Created`, createdBranch)
    }catch(err){
        return error(res, err.message)
    }
}

module.exports = { createNew , getAll, deleteData}