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
        const messages = await service.getAllByUserId(req.params.id)
        return success(res, 'Get Success', messages)
    }catch(err){
        return error(res, err.message)
    }
}


module.exports = { get }