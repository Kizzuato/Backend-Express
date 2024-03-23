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
        const branch = await branchRepo.isExist(req.params.b_name)
        if(!branch) throw Error('Branch didnt exist')
        const deletedBranch = await branchRepo.del(branch.id)
        return success(res, `Branch ${deletedBranch.b_name} Deleted Successfully`, deletedBranch)
    }catch(err){
        return error(res, err.message)
    }
}

const createNew = async (req, res) => {
    try{
        const exist = await branchRepo.isExist(req.body.b_name)
        if(exist) throw Error('Branch already exist')
        const createdBranch = await branchRepo.create(req.body)
        return success(res, `Branch ${createdBranch.b_name} Created`, createdBranch)
    }catch(err){
        return error(res, err.message)
    }
}

module.exports = { createNew , getAll, deleteData}