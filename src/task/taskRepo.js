const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// Repo untuk mengedit task
const updateTaskRepo = async (data) => {
  return await prisma.task.update({
    where: {
        id
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

//  Repo untuk memperlihatkan task yang sudah di acc dari database
const getAllTaskRepo = async () => {
  return await prisma.task.findMany({
    where: {
      NOT: {
        status: "wait-app",
      },
      deleted_at: null,
    },
  });
};

//  Repo untuk memperlihatkan task yang belum di acc
const getAllWaitedTaskRepo = async () => {
  return await prisma.task.findMany({
    where: {
      status: "wait-app",
      deleted_at: null,
    },
  });
};

//  Repo untuk memperlihatkan task yang telah dihapus
const getAllDeletedTaskRepo = async () => {
  return await prisma.task.findMany({
    where: {
      deleted_at: {
        not: null,
      },
    }
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

module.exports = {
  updateTaskRepo,
  createTaskRepo,
  getAllTaskRepo,
  getAllWaitedTaskRepo,
  getAllDeletedTaskRepo,
  getTaskByIdRepo,
};
