const { throwError } = require("../utils/error.utils")
const { success, error } = require("../utils/response.utils")
const positionRepo = require('./positionRepo')
const Branch = require('../Branch/branchRepo')

const getById = async (req, res) => {
    try{
        const { id } = req.params;
        const position = await positionRepo.getById(id)
        return success(res, 'Success', position)
    }catch(err){
        return error(res, err.message)
    }
}

const getAll = async (req, res) => {
    try {
        const branch_id = req.query.branch_id;
        console.log("🚀 ~ getAll ~ branch_id:", branch_id)
        let { division, branch, title } = req.headers;
        let data = { division, branch, title };
        // console.log("🚀 ~ getAll ~ DATATATATTA:", data)
        const branch_name = await Branch.getById(data.branch);
        // console.log("🚀 ~ getAll ~ branch_name:", branch_name)
        if (branch_name.b_name === "PT. RES" && data.title === "director") {
            data.branch = undefined;
            data.division = undefined;
        } else if (data.title === "director") {
            data.division = undefined;
        } else if (data.title === "admin") {
            data.branch = branch_id;
        }
        console.log("🚀 ~ getAll ~ data:", data);
        const response = await positionRepo.getAll(data);
        return success(res, 'Success', response);
    } catch(err) {
        return error(res, err.message);
    }
}

const deleteData = async (req, res) => {
    try{
        const position = await positionRepo.isExist(req.params.p_name)
        if(!position) throw Error('Position didnt exist')
        const deletedPosition = await positionRepo.del(position.id)
        return success(res, `Position ${deletedPosition.p_name} Deleted Successfully`, deletedPosition)
    }catch(err){
        return error(res, err.message)
    }
}

const createNew = async (req, res) => {
    try{
        const exist = await positionRepo.isExist(req.body.p_name)
        if(exist) throw Error('Position already exist')
        const createdPosition = await positionRepo.create(req.body)
        return success(res, `Position ${createdPosition.p_name} Created`, createdPosition)
    }catch(err){
        return error(res, err.message)
    }
}

module.exports = { createNew , getAll, deleteData, getById}