const { PrismaClient } = require("@prisma/client");
const { throwError } = require("../utils/error.utils");
const prismaDivision = new PrismaClient().division

const getAll = async () => {
    try {
        return await prismaDivision.findMany()
    } catch (err) {
        throwError(err)
    }
}

const create = async (data) => {
    try {
        return await prismaDivision.create({ data })
    } catch (err) {
        throwError(err)
    }
}

const del = async (id) => {
    try {
        return await prismaDivision.delete({ where: { id } })
    } catch (err) {
        throwError(err)
    }
}

const isExist = async (divisionName) => {
    try {
        const exist = await prismaDivision.findFirst({ where: { divisionName } })
        return exist
    } catch (err) {
        throwError(err)
    }
}

module.exports = { getAll, create, del, isExist }