const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const createTaskRepo = async (data) => {
    return await prisma.task.create({
        data
    })
}

const getAllTaskRepo = async () => {
    return await prisma.task.findMany()
}

const getTaskByIdRepo = async (id) => {
    return await prisma.task.findUnique({
        where: {
            id
        }
    })
}

module.exports = {
    createTaskRepo,
    getAllTaskRepo,
    getTaskByIdRepo
}