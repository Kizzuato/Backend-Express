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
        let { division, branch, title } = req.headers;
        const lowerTitle = title.toLowerCase(); // Ubah title menjadi lowercase untuk perbandingan

        let data = { division, branch, title };

        const branchData = await Branch.getById(data.branch);
        const branch_name = branchData.b_name;

        if (branch_name === "PT. RES" && (lowerTitle === "director" || lowerTitle === "direktur")) {
            // Jika branch_name adalah "PT. RES" dan title adalah "director" atau "direktur"
            data.branch = undefined;
            data.division = undefined;
        } else if (lowerTitle === "director" || lowerTitle === "direktur") {
            // Jika title adalah "director" atau "direktur" tapi bukan di cabang "PT. RES"
            data.division = undefined;
        } else if (lowerTitle === "admin") {
            // Jika title adalah "admin"
            data.branch = branch_id;
        }

        const response = await divisiRepo.getAll(data);
        return success(res, 'Success', response);
    } catch(err) {
        return error(res, err.message);
    }
}



const deleteData = async (req, res) => {
    try{
        const { id } = req.params;
        const divisi = await divisiRepo.isExist(id)
        if(!divisi) throw Error('Divisi didnt exist')
        const deletedDivisi = await divisiRepo.del(id)
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