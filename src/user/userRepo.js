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

const Login = async (email) => {
  return await prisma.m_user.findUnique({
    where: {
      u_email: email,
    },
  });
};

const getAllUserRepo = async () => {
  return await prisma.m_user.findMany();
};

const deleteUserRepo = async (id) => {
  return await prisma.m_user.delete({
    where: {
      u_id: id,
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

module.exports = {
  updatePicRepo,
  createUserRepo,
  Login,
  getAllUserRepo,
  deleteUserRepo,
  getUserByIdRepo,
};
