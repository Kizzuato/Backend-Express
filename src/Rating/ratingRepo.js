const { PrismaClient } = require("@prisma/client");
const { throwError } = require("../utils/error.utils");
const { parse } = require("dotenv");
const prismaRating = new PrismaClient().rating;

const getByRatingName = async (b_name) => {
  try {
    return await prismaRating.findFirst({ where: { b_name: { contains: b_name } } })
  } catch (err) {
    throwError(err);
  }
};

const getById = async (u_id) => {
  try {
    const rating = await prismaRating.findUnique({
      where: {
        u_id: parseInt(u_id),
      },
    });

    if (!rating) {
      return 0; // Mengembalikan null jika data tidak ditemukan
    }

    return rating;
  } catch (err) {
    console.error("Error in getById:", err);
    throw err; // Melemparkan kesalahan kembali untuk ditangani di luar fungsi
  }
};

const edit = async (id, data) => {
  return await prismaRating.update({
    where: { 
      u_id: parseInt(id)
     },
     data: data
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
    return await prismaRating.findMany();
  } catch (err) {
    throwError(err);
  }
};

const create = async (data) => {
  try {
    return await prismaRating.createMany({ data });
  } catch (err) {
    throwError(err);
  }
};

const del = async (id) => {
  try {
    return await prismaRating.delete({ where: { id: parseInt(id) } });
  } catch (err) {
    throwError(err);
  }
};

const isExist = async (u_id) => {
  try {
    const exist = await prismaRating.findFirst({ where: { u_id: parseInt(u_id) } });
    return exist;
  } catch (err) {
    throwError(err);
  }
};

module.exports = { getAll, create, del, isExist, getById, getByRatingName, edit };
