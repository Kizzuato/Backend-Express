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

const createManyTask = async (data) => {
  return await prisma.task.createMany({ data })
}

//  Username buat ngambil nama user yang masuk jika udifined maka akan memunculkan semuanya
const getAllTaskRepo = async (search, status, pic, spv, division) => {
return await prisma.task.findMany({
    where: {
      NOT: {
        status: "wait-app",
      },
      status: status || undefined,
      pic: pic || undefined,
      deleted_at: null,
      spv: spv || undefined,
      division: division || undefined,
    },
  });
};

//  Username buat ngambil nama user yang masuk jika udifined maka akan memunculkan semuanya
const getAllWaitedTaskRepo = async (division, pic, spv) => {
  return await prisma.task.findMany({
    where: {
      status: "wait-app",
      deleted_at: null,
      division: division || undefined,
      pic: pic || undefined,
      spv: spv || undefined,
    },
  });
};

//  Username buat ngambil nama user yang masuk jika udifined maka akan memunculkan semuanya
const getAllDeletedTaskRepo = async (division, pic, spv) => {
  return await prisma.task.findMany({
    where: {
      deleted_at: {
        not: null,
      },
      division: division || undefined,
      pic: pic || undefined,
      spv: spv || undefined,
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
  createManyTask,
  getAllTaskRepo,
  getAllWaitedTaskRepo,
  getAllDeletedTaskRepo,
  getTaskByIdRepo,
  getTaskByEmailRepo,
};
