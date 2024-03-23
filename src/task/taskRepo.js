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
const getAllTaskRepo = async (search, status, pic, spv, division, branch, fromDate, toDate) => {
  const whereClause = {
    NOT: {
      status: "wait-app",
    },
    status: status || undefined,
    pic: pic || undefined,
    deleted_at: null,
    spv: spv || undefined,
    division: division || undefined,
    branch: branch || undefined,
    OR: [
      { task_title: { contains: search || '' } },
    ]
  };

  if (fromDate && toDate) {
    whereClause.start_date = {
      gte: fromDate || undefined,
      lte: toDate || undefined,
    };
  }

  return await prisma.task.findMany({
    where: whereClause,
  });
};


//  Username buat ngambil nama user yang masuk jika udifined maka akan memunculkan semuanya
const getAllWaitedTaskRepo = async ( search, status, pic, spv, division, branch, fromDate, toDate) => {
    const whereClause = {
      status: "wait-app",
      deleted_at: null,
      pic: pic || undefined,
      spv: spv || undefined,
      division: division || undefined,
      branch: branch || undefined,
      OR: [
        { task_title: { contains: search || '' } },
      ]
    };

    if (fromDate && toDate) {
      whereClause.start_date = {
        gte: fromDate || undefined,
        lte: toDate || undefined,
      };
    };
  
    return await prisma.task.findMany({
      where: whereClause,
    });
};

//  Username buat ngambil nama user yang masuk jika udifined maka akan memunculkan semuanya
const getAllDeletedTaskRepo = async (search, status, pic, spv, division, branch, fromDate, toDate) => {
    const whereClause = {
      deleted_at: {
        not: null,
      },
      pic: pic || undefined,
      spv: spv || undefined,
      division: division || undefined,
      branch: branch || undefined,
      OR: [
        { task_title: { contains: search || '' } },
      ]
    };

    if (fromDate && toDate) {
      whereClause.start_date = {
        gte: fromDate || undefined,
        lte: toDate || undefined,
      };
    };
  
    return await prisma.task.findMany({
      where: whereClause,
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
