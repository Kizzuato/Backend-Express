const { throwError } = require("../utils/error.utils")
const { success, error } = require("../utils/response.utils")
const ratingRepo = require('./ratingRepo')

const getById = async (req, res) => {
    try{
        const { id } = req.params;
        // console.log("🚀 ~ getById ~ u_id:", id)
        const exist = await ratingRepo.isExist(id)
        const u_id = parseInt(id); 
        const data = {u_id}
        if (!exist) {
            const create = await ratingRepo.create(u_id)
            // console.log("GA ADA")
        }
        const rating = await ratingRepo.getById(id)
        return success(res, 'Success', rating)
    }catch(err){
        return error(res, err.message)
    }
}

const edit = async (req, res) => {
    try{
        const id = req.params.id;
        const total_rating = req.body.total_rating;
        const total_task = req.body.total_task;
        const u_id = parseInt(id); 
        const data = {total_rating, total_task};
        const exist = await ratingRepo.isExist(u_id)
        if (!exist) {
            const create = await ratingRepo.create(data)
            // console.log("GA ADA")
        }
        const edit = await ratingRepo.edit(u_id, data)
        return success(res, 'Success', edit)
    }catch(err){
        return error(res, err.message)
    }
}


const getAll = async (req, res) => {
    try{
        let rating_id = req.headers.rating;
        // console.log("🚀 ~ getAll ~ rating_id:", rating_id)
        // const rating_name = await ratingRepo.getById(rating_id)
        // console.log("🚀 ~ getAll ~ rating_name:", rating_name)
    // if (rating_name.b_name === "PT. RES") {
    //     rating_id = undefined;
    // } 
    // console.log("🚀 ~ getAll ~ rating_id:", rating_id)
        const rating = await ratingRepo.getAll()
        return success(res, 'Success', rating)
    }catch(err){
        return error(res, err.message)
    }
}

const deleteData = async (req, res) => {
    try{
        const { b_name } = req.params;
        const rating = await ratingRepo.isExist(b_name)
        if(!rating) throw Error('Rating didnt exist')
        const deletedRating = await ratingRepo.del(rating.id)
        return success(res, `Rating ${deletedRating.b_name} Deleted Successfully`, deletedRating)
    }catch(err){
        return error(res, err.message)
    }
}

const createNew = async (req, res) => {
    try{
        const data = req.body;
        // const u_id = req.body.u_id;
        // const rating = req.body.rating;
        // const data = {u_id, rating};
        // console.log("🚀 ~ createNew ~ data:", data)
        const createdRating = await ratingRepo.create(data)
        return success(res, `Rating Created`, createdRating)
    }catch(err){
        return error(res, err.message)
    }
}

module.exports = { createNew , getAll, deleteData, getById, edit}