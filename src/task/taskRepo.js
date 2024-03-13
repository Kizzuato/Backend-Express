const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();


const getShownTitle = (title) => {
  const taskHierarchy = ['director', 'manager', 'supervisor', 'operator']
  try {
    const titleIndexs = taskHierarchy.indexOf(title.toLowerCase());
    if (titleIndexs < 0) throw Error('No Title Match')
    return taskHierarchy.splice(titleIndexs)
  } catch (err) {
    console.log(err)
  }
}

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
const getAllTaskRepo = async (status, userData) => {
  const { title, u_name } = userData
  return await prisma.task.findMany({
    where: {
      NOT: {
        status: "wait-app",
      },
      deleted_at: null,
      pic_title: { in: getShownTitle(title) },
      ...(title === "operator" && { pic: { contains: u_name } }),
      status: status || undefined,
    },
  });
};

//  Username buat ngambil nama user yang masuk jika udifined maka akan memunculkan semuanya
const getAllWaitedTaskRepo = async (userData) => {
  const { title, u_name } = userData
  return await prisma.task.findMany({
    where: {
      status: "wait-app",
      deleted_at: null,
      pic_title: { in: getShownTitle(title) },
      ...(title === "operator" && { pic: { contains: u_name } }) 
    },
  });
};

//  Username buat ngambil nama user yang masuk jika udifined maka akan memunculkan semuanya
const getAllDeletedTaskRepo = async (userData) => {
  const { title, u_name } = userData
  console.log(title, u_name)
  return await prisma.task.findMany({
    where: {
      deleted_at: {
        not: null,
      },
      pic_title: { in: getShownTitle(title) },
      ...(title === "operator" && { pic: { contains: u_name } }) },
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
  return await prisma.m_user.findunique({
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
