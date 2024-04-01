const { PrismaClient } = require("@prisma/client");
const { throwError } = require("../utils/error.utils");
const prismaBranch = new PrismaClient().branch;

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

const getAll = async (branch_id) => {
    try {
    return await prismaBranch.findMany({
      where: {
        id: parseInt(branch_id) || undefined,
      },
    });
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

const isExist = async (id) => {
  try {
    const exist = await prismaBranch.findFirst({ where: { id: parseInt(id) } });
    return exist;
  } catch (err) {
    throwError(err);
  }
};

module.exports = { getAll, create, del, isExist, getById };
