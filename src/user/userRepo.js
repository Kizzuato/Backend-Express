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
    include: { branch: true, division: true }
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

const getAllUserRepo = async (data) => {
  return await prisma.m_user.findMany({
    where: {
      branch_id: parseInt(data.branch) || undefined,
      division_id: parseInt(data.division) || undefined,
      deleted: false,
    },
  });
};

const activateUserRepo = async (u_id) => {
  return await prisma.m_user.update({
    where: { u_id },
    data: { deleted: false },
  });
};

const deleteUserRepo = async (u_id) => {
  return await prisma.m_user.update({
    where: { u_id },
    data: { deleted: true },
  });
};

const getUserByDivisionRepo = async (data) => {
  return await prisma.m_user.findMany({
    where: {
      division_id: parseInt(data.division) || undefined,
      branch_id: parseInt(data.branch) || undefined,
    },
  });
};

const getUserByIdRepo = async (id) => {
  return await prisma.m_user.findUnique({
    where: {
      u_id: parseInt(id) || undefined,
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

const resetPassword = async (id, password) => {
  return response = await prisma.m_user.update({
    where: {
      u_id : id
    },
    data: {
      u_password: password
    }
  })
}

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
  activateUserRepo,
  getUserByDivisionRepo,
  getUserByIdRepo,
  resetPassword
};
