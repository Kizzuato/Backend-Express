const { throwError } = require("../utils/error.utils")
const { success, error } = require("../utils/response.utils")
const branchRepo = require('./branchRepo')

const getById = async (req, res) => {
    try{
        const { id } = req.params;
        const branch = await branchRepo.getById(id)
        return success(res, 'Success', branch)
    }catch(err){
        return error(res, err.message)
    }
}

const getAll = async (req, res) => {
    try{
        let branch_id = req.headers.branch;
        // console.log("🚀 ~ getAll ~ branch_id:", branch_id)
        // const branch_name = await branchRepo.getById(branch_id)
        // console.log("🚀 ~ getAll ~ branch_name:", branch_name)
    // if (branch_name.b_name === "PT. RES") {
    //     branch_id = undefined;
    // } 
    // console.log("🚀 ~ getAll ~ branch_id:", branch_id)
        const branch = await branchRepo.getAll()
        return success(res, 'Success', branch)
    }catch(err){
        return error(res, err.message)
    }
}

const deleteData = async (req, res) => {
    try{
        const { b_name } = req.params;
        const branch = await branchRepo.isExist(b_name)
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

module.exports = { createNew , getAll, deleteData, getById}