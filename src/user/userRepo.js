const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const updatePicRepo = async (pic, pic_rating) => {
  return await prisma.m_user.updateMany({
    where: { u_name: pic },
    data: {
      total_task: {
        increment: 1,
      },
      u_rate: {
        increment: pic_rating,
      },
    },
  });
};

const createUserRepo = async (userData) => {
  return await prisma.m_user.create({
    data: userData,
  });
};

const createManyUserRepo = async (arrays) => {
  try {
    return await prisma.m_user.createMany({ data: arrays });
  } catch (err) {
    console.log(err);
    throw err;
  }
};

const Login = async (email) => {
  return await prisma.m_user.findUnique({
    where: {
      u_email: email,
    },
  });
};

const getAllUserRepo = async () => {
  return await prisma.m_user.findMany({
    where: {
      deleted: false,
    },
  });
};

const deleteUserRepo = async (u_id) => {
  return await prisma.m_user.update({
    where: { u_id },
    data: { deleted: true },
  });
};

const getUserByDivisionRepo = async (division) => {
  return await prisma.m_user.findMany({
    where: {
      division: division,
    },
  });
};

const getUserByIdRepo = async (id) => {
  return await prisma.m_user.findUnique({
    where: {
      u_id: id,
    },
  });
};

const updateUserRepo = async (id, data) => {
  try {
    const exist = await getUserByIdRepo(id);
    if (!exist) throw Error("User didnt exist");
    return await prisma.m_user.update({
      where: { u_id: exist.u_id },
      data,
    });
  } catch (err) {
    console.log(err);
    throw err;
  }
};

const emailUsed = async (u_email) => {
  try {
    const exist = await prisma.m_user.findFirst({ where: { u_email } });
    return exist ? true : false;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

const userDeleted = async (deleted) => {
  try {
    const exist = await prisma.m_user.findFirst({ where: { deleted } });
    return exist ? true : false;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

module.exports = {
  updatePicRepo,
  createUserRepo,
  createManyUserRepo,
  Login,
  emailUsed,
  userDeleted,
  updateUserRepo,
  getAllUserRepo,
  deleteUserRepo,
  getUserByDivisionRepo,
  getUserByIdRepo,
};
