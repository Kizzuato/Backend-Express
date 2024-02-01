const { createTaskRepo, getAllTaskRepo, getTaskByIdRepo } = require("./taskRepo")

const createTaskServ = async (data) => {
    const dataRest = {
        task_type : data.task_type,
        task_title: data.task_title,
        priority: data.priority,
        start_date : data.start_date,
        due_date: data.due_date,
        description: data.description,
        pic: data.pic,
        spv: data.spv,
    }

    return await createTaskRepo(dataRest)
}

const getAllTaskserv = async () => {
    return await getAllTaskRepo()
}

const getTaskByIdServ = async (id) => {
    return await getTaskByIdRepo(id)
}
module.exports = {
    createTaskServ,
    getAllTaskserv,
    getTaskByIdServ
}