const { PrismaClient } = require("@prisma/client");
const { throwError } = require("../utils/error.utils");
const prismaBranch = new PrismaClient().branch;

const getByBranchName = async (b_name) => {
  try {
    return await prismaBranch.findFirst({ where: { b_name: { contains: b_name } } })
  } catch (err) {
    throwError(err);
  }
};

const getById = async (id) => {
  try {
    return await prismaBranch.findUnique({
      where: {
        id: parseInt(id),
      },
    });
  } catch (err) {
    throwError(err);
  }
};

const getAll = async () => {
    try {
    return await prismaBranch.findMany();
  } catch (err) {
    throwError(err);
  }
};

const create = async (data) => {
  try {
    return await prismaBranch.create({ data });
  } catch (err) {
    throwError(err);
  }
};

const del = async (id) => {
  try {
    return await prismaBranch.delete({ where: { id: parseInt(id) } });
  } catch (err) {
    throwError(err);
  }
};

const isExist = async (b_name) => {
  try {
    const exist = await prismaBranch.findFirst({ where: { b_name } });
    return exist;
  } catch (err) {
    throwError(err);
  }
};

module.exports = { getAll, create, del, isExist, getById, getByBranchName };
