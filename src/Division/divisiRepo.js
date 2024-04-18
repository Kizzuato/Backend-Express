const { PrismaClient } = require("@prisma/client");
const { throwError } = require("../utils/error.utils");
const prismaDivision = new PrismaClient().division;

const getById = async (id) => {
  try {
    return await prismaDivision.findUnique({
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
    return await prismaDivision.findMany({
      where: {
        id: data?.division ? parseInt(data.division) :  undefined,
        branch_id: data?.branch ? parseInt(data.branch) : undefined
       },
    });
  } catch (err) {
    throwError(err);
  }
};

const create = async (data) => {
  try {
    return await prismaDivision.create({ data });
  } catch (err) {
    throwError(err);
  }
};

const del = async (id) => {
  try {
    return await prismaDivision.delete({ where: { id } });
  } catch (err) {
    throwError(err);
  }
};

const isExist = async (divisionName) => {
  try {
    const exist = await prismaDivision.findFirst({ where: { divisionName } });
    return exist;
  } catch (err) {
    throwError(err);
  }
};

module.exports = { getAll, create, del, isExist, getById };
