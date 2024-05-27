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
        const id = req.params.id;
        const role = req.body.role;
        const u_id = parseInt(id); 
        const data = {u_id, role}
        const exist = await roleRepo.isExist(u_id)
        if (!exist) {
            const create = await roleRepo.create(data)
            // console.log("GA ADA")
        }
        const edit = await roleRepo.edit(u_id, role)
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
        const data = req.body.data;
        console.log("🚀 ~ createNew ~ data:", data)
        // const u_id = req.body.u_id;
        // const role = req.body.role;
        // const data = {u_id, role};
        // console.log("🚀 ~ createNew ~ data:", data)
        const createdRole = await roleRepo.create(data)
        return success(res, `Role Created`, createdRole)
    }catch(err){
        return error(res, err.message)
    }
}

module.exports = { createNew , getAll, deleteData, getById, edit}