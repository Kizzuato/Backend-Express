const { throwError } = require("../utils/error.utils")
const { success, error } = require("../utils/response.utils")
const divisiRepo = require('./divisiRepo')
const Branch = require('../Branch/branchRepo')

const getById = async (req, res) => {
    try{
        const { id } = req.params;
        const divisions = await divisiRepo.getById(id)
        return success(res, 'Success', divisions)
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
        const response = await divisiRepo.getAll(data);
        return success(res, 'Success', response);
    } catch(err) {
        return error(res, err.message);
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
        // const exist = await divisiRepo.isExist(req.body.divisionName)
        // if(exist) throw Error('Divisi already exist')
        const createdDivisi = await divisiRepo.create(req.body)
        return success(res, `Divisi ${createdDivisi.divisionName} Created`, createdDivisi)
    }catch(err){
        return error(res, err.message)
    }
}

module.exports = { createNew , getAll, deleteData, getById}