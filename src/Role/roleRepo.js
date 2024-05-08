const { PrismaClient } = require("@prisma/client");
const { throwError } = require("../utils/error.utils");
const prismaRole = new PrismaClient().role;

const getByRoleName = async (b_name) => {
  try {
    return await prismaRole.findFirst({ where: { b_name: { contains: b_name } } })
  } catch (err) {
    throwError(err);
  }
};

const getById = async (u_id) => {
  try {
    const role = await prismaRole.findUnique({
      where: {
        u_id: parseInt(u_id),
      },
    });

    if (!role) {
      return []; // Mengembalikan null jika data tidak ditemukan
    }

    return role;
  } catch (err) {
    console.error("Error in getById:", err);
    throw err; // Melemparkan kesalahan kembali untuk ditangani di luar fungsi
  }
};

const edit = async (id, data) => {
  return await prismaRole.update({
    where: { 
      u_id: parseInt(id)
     },
     data: {
      role: data
     }
  });
};

const updateTaskRepo = async (id, data) => {
  return await prisma.task.update({
    where: {
      id: +id,
    },
    data,
  });
};

const getAll = async () => {
    try {
    return await prismaRole.findMany();
  } catch (err) {
    throwError(err);
  }
};

const create = async (data) => {
  try {
    return await prismaRole.createMany({ data });
  } catch (err) {
    throwError(err);
  }
};

const del = async (id) => {
  try {
    return await prismaRole.delete({ where: { id: parseInt(id) } });
  } catch (err) {
    throwError(err);
  }
};

const isExist = async (b_name) => {
  try {
    const exist = await prismaRole.findFirst({ where: { b_name } });
    return exist;
  } catch (err) {
    throwError(err);
  }
};

module.exports = { getAll, create, del, isExist, getById, getByRoleName, edit };
