const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// repo untuk mengedit data
const updateTaskRepo = async (id, data) => {
  return await prisma.task.update({
    where: {
      id: +id,
    },
    data,
  });
};

// Repo untuk membuat task baru
const createTaskRepo = async (data) => {
  return await prisma.task.create({
    data,
  });
};

//  Username buat ngambil nama user yang masuk jika udifined maka akan memunculkan semuanya
const getAllTaskRepo = async (status, username) => {
  return await prisma.task.findMany({
    where: {
      NOT: {
        status: "wait-app",
      },
      deleted_at: null,
      pic: username || undefined,
      status: status || undefined,
    },
  });
};

//  Username buat ngambil nama user yang masuk jika udifined maka akan memunculkan semuanya
const getAllWaitedTaskRepo = async (username) => {
  return await prisma.task.findMany({
    where: {
      status: "wait-app",
      deleted_at: null,
      pic: username || undefined,
    },
  });
};

//  Username buat ngambil nama user yang masuk jika udifined maka akan memunculkan semuanya
const getAllDeletedTaskRepo = async (username) => {
  return await prisma.task.findMany({
    where: {
      deleted_at: {
        not: null,
      },
      pic: username || undefined,
    },
  });
};

// Repo untuk mencari task berdasarkan Id
const getTaskByIdRepo = async (id) => {
  return await prisma.task.findUnique({
    where: {
      id,
    },
  });
};

// Repo untuk mencari task berdasarkan Id
const getTaskByEmailRepo = async (email) => {
  return await prisma.m_user.findUnique({
    where: {
      u_email: email,
    }
  });
};

module.exports = {
  updateTaskRepo,
  createTaskRepo,
  getAllTaskRepo,
  getAllWaitedTaskRepo,
  getAllDeletedTaskRepo,
  getTaskByIdRepo,
  getTaskByEmailRepo,
};
