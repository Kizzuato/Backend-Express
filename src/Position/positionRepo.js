const { PrismaClient } = require("@prisma/client");
const { throwError } = require("../utils/error.utils");
const prismaPosition = new PrismaClient().position;

const getById = async (id) => {
  try {

    if (id === null) {
      return [];
    }
    return await prismaPosition.findUnique({
      where: {
        id: parseInt(id),
      },
    });
  } catch (err) {
    throwError(err);
  }
};

const getAll = async (data) => {
    try {
    return await prismaPosition.findMany({where: {branch_id: parseInt(data.branch)}});
  } catch (err) {
    throwError(err);
  }
};

const create = async (data) => {
  try {
    return await prismaPosition.create({ data });
  } catch (err) {
    throwError(err);
  }
};

const del = async (id) => {
  try {
    return await prismaPosition.delete({ where: { id } });
  } catch (err) {
    throwError(err);
  }
};

const isExist = async (p_name) => {
  try {
    const exist = await prismaPosition.findFirst({ where: { p_name } });
    return exist;
  } catch (err) {
    throwError(err);
  }
};

const createManyUserRepo = async (arrays) => {
  try {
    return await prisma.prismaPosition({ data: arrays });
  } catch (err) {
    console.log(err);
    throw err;
  }
};

module.exports = { getAll, create, del, isExist, getById, createManyUserRepo };
