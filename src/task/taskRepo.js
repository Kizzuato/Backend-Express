const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();


const getShownTitle = (title) => {
  const taskHierarchy = ['director', 'manager', 'supervisor', 'operator']
  const lowerTitle = title.toLowerCase();
  try {
    const titleIndexs = taskHierarchy.indexOf(lowerTitle);
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
  return await prisma.task.createMany({
    data,
  });
};

const createManyTask = async (data) => {
  return await prisma.task.createMany({ data })
}

//  Username buat ngambil nama user yang masuk jika udifined maka akan memunculkan semuanya
const getAllTaskRepo = async (search, status, data, fromDate, toDate) => {
  const whereClause = {
    NOT: {
      status: "wait-app",
    },
    pic_id: data.pic !== undefined ? parseInt(data.pic) : undefined,
    spv_id: data.spv !== undefined ? parseInt(data.spv) : undefined,
    status: status || undefined,
    deleted_at: null,
    // division: parseInt(data.division) || undefined,
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
const getAllWaitedTaskRepo = async ( search, status, data, fromDate, toDate) => {
    const whereClause = {
      status: "wait-app",
      deleted_at: null,
      spv_id: parseInt(data.spv) || undefined,
      pic_id: parseInt(data.pic) || undefined,
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
const getAllDeletedTaskRepo = async (search, status, data, fromDate, toDate) => {
    const whereClause = {
      deleted_at: {
        not: null,
      },
      pic_id: parseInt(data.pic) || undefined,
      spv_id: parseInt(data.spv) || undefined,
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

const getLateTaskRepo = async (id) => {
  const now = new Date(); 

  return await prisma.task.findMany({
    where: { 
      pic_id: parseInt(id) || undefined,
      due_date: {
        lt: now,
      },
      status: {
        not: "Close",
      },
    }
  });
};

const updateOverdueRepo = async (id) => {
  return await prisma.task.update({
    where: {
      id: id,
    },
    data: {
      overdue: true,
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
  getLateTaskRepo,
  updateOverdueRepo
};
