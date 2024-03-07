const service = require('./notificationService')

/// Response Handler Start
const success = (res, message, data, status = 200) => {
    return res.status(status).json({ message, data })
}
const error = (res, message, status = 404) =>  {
    return res.status(status).json({ message })
}
// Response Handler End

const get = async (req, res) => {
    try{
        const messages = await service.getAll(+req.params.userId)
        return success(res, 'Get Success', messages)
    }catch(err){
        return error(res, err.message)
    }
}

const getUnreadMessages = async (req, res) => {
    try{
        const messages = await service.getUnread(+req.params.userId)
        return success(res, 'Get Success', messages)
    }catch(err){
        return error(res, err.message)
    }
}

const postReadMessage = async (req, res) => {
    try{
        const updateUser = await service.readMessage(+req.params.userId)
        return success(res, 'Message Readed', updateUser)
    }catch(err){
        return error(res, err.message)
    }
}

const postCreate = async (req, res) => {
    try{
        const message = await service.createNotif(req.body)
        return success(res, 'Message Created Successfully', message)
    }catch(err){
        return error(res, err.message)
    }
}

module.exports = { get, getUnreadMessages, postReadMessage, postCreate }