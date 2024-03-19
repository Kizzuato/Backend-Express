/// Response Handler Start
const success = (res, message, data, status = 200) => {
    return res.status(status).json({ message, data })
}
const error = (res, message, status = 404) =>  {
    return res.status(status).json({ message })
}
// Response Handler End

module.exports = { success,error }