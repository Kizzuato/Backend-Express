const { success, error } = require('../utils/response.utils')
const service = require('./notificationService')

const get = async (req, res) => {
    const { u_id } = req.user
    try {
        const data = await service.getAll(u_id)
        return success(res, 'Get Success', data)
    } catch (err) {
        return error(res, err.message)
    }
}

const postReadMessage = async (req, res) => {
    const { u_id } = req.user
    try {
        const updateUser = await service.readMessage(u_id)
        return success(res, 'Message Readed', updateUser)
    } catch (err) {
        return error(res, err.message)
    }
}

const postCreate = async (req, res) => {
    try {
        const message = await service.createNotif(req.body)
        return success(res, 'Message Created Successfully', message)
    } catch (err) {
        return error(res, err.message)
    }
}

module.exports = { get, postReadMessage, postCreate, success, error }