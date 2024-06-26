const { throwError } = require("../utils/error.utils")
const { success, error } = require("../utils/response.utils")
const roleRepo = require('./roleRepo')

const getById = async (req, res) => {
    try{
        const { id } = req.params;
        const role = await roleRepo.getById(id)
        return success(res, 'Success', role)
    }catch(err){
        return error(res, err.message)
    }
}

const edit = async (req, res) => {
    try{
        const { id } = req.params;
        const role = req.body.role;
        const edit = await roleRepo.edit(id, role)
        return success(res, 'Success', edit)
    }catch(err){
        return error(res, err.message)
    }
}


const getAll = async (req, res) => {
    try{
        let role_id = req.headers.role;
        // console.log("🚀 ~ getAll ~ role_id:", role_id)
        // const role_name = await roleRepo.getById(role_id)
        // console.log("🚀 ~ getAll ~ role_name:", role_name)
    // if (role_name.b_name === "PT. RES") {
    //     role_id = undefined;
    // } 
    // console.log("🚀 ~ getAll ~ role_id:", role_id)
        const role = await roleRepo.getAll()
        return success(res, 'Success', role)
    }catch(err){
        return error(res, err.message)
    }
}

const deleteData = async (req, res) => {
    try{
        const { b_name } = req.params;
        const role = await roleRepo.isExist(b_name)
        if(!role) throw Error('Role didnt exist')
        const deletedRole = await roleRepo.del(role.id)
        return success(res, `Role ${deletedRole.b_name} Deleted Successfully`, deletedRole)
    }catch(err){
        return error(res, err.message)
    }
}

const createNew = async (req, res) => {
    try{
        const exist = await roleRepo.isExist(req.body.b_name)
        if(exist) throw Error('Role already exist')
        const createdRole = await roleRepo.create(req.body)
        return success(res, `Role ${createdRole.b_name} Created`, createdRole)
    }catch(err){
        return error(res, err.message)
    }
}

module.exports = { createNew , getAll, deleteData, getById, edit}