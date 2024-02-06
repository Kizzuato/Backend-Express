const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// repo untuk mengedit data
const updateTaskRepo = async (id, data) => {
  return await prisma.task.update({
    where: {
      id,
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

//  Repo untuk memperlihatkan task yang belum di acc (Untuk director)
const getAllWaitedDirectorTaskRepo = async () => {
  return await prisma.task.findMany({
    where: {
      status: "wait-app",
      deleted_at: null,
      pic_title: "manager"
    },
  });
};

//  Repo untuk memperlihatkan task yang belum di acc (Untuk manager)
const getAllWaitedManagerTaskRepo = async () => {
  return await prisma.task.findMany({
    where: {
      status: "wait-app",
      deleted_at: null,
      pic_title: "supervisor"
    },
  });
};

//  Repo untuk memperlihatkan task yang belum di acc (Untuk spv)
const getAllWaitedSupervisorTaskRepo = async () => {
  return await prisma.task.findMany({
    where: {
      status: "wait-app",
      deleted_at: null,
      pic_title: "operator"
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

module.exports = {
  updateTaskRepo,
  createTaskRepo,
  getAllTaskRepo,
  getAllWaitedDirectorTaskRepo,
  getAllWaitedManagerTaskRepo,
  getAllWaitedSupervisorTaskRepo,
  getAllWaitedTaskRepo,
  getAllDeletedTaskRepo,
  getTaskByIdRepo,
};
