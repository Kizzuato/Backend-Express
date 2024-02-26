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

// buat ngambil data director task monit
const getAllDirectorTaskRepo = async () => {
  return await prisma.task.findMany({
    where: {
      NOT: {
        status: "wait-app",
      },
      deleted_at: null,
      pic_title: "director",
    },
  });
};

// buat ngambil data manager task monit
const getAllManagerTaskRepo = async () => {
  return await prisma.task.findMany({
    where: {
      NOT: {
        status: "wait-app",
      },
      deleted_at: null,
      pic_title: "manager",
    },
  });
};

// buat ngambil data spv task monit
const getAllSupervisorTaskRepo = async () => {
  return await prisma.task.findMany({
    where: {
      NOT: {
        status: "wait-app",
      },
      deleted_at: null,
      pic_title: "supervisor",
    },
  });
};

// buat ngambil data worker task monit
const getAllOperatorTaskRepo = async () => {
  return await prisma.task.findMany({
    where: {
      NOT: {
        status: "wait-app",
      },
      deleted_at: null,
      pic_title: "operator",
    },
  });
};

// buat ngambil data default task monit 
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

//  buat ngambil data director task app
const getAllWaitedDirectorTaskRepo = async () => {
  return await prisma.task.findMany({
    where: {
      status: "wait-app",
      deleted_at: null,
      pic_title: "director",
    },
  });
};

//  buat ngambil data manager task app
const getAllWaitedManagerTaskRepo = async () => {
  return await prisma.task.findMany({
    where: {
      status: "wait-app",
      deleted_at: null,
      pic_title: "manager",
    },
  });
};

//  buat ngambil data supervisor task app
const getAllWaitedSupervisorTaskRepo = async () => {
  return await prisma.task.findMany({
    where: {
      status: "wait-app",
      deleted_at: null,
      pic_title: "supervisor",
    },
  });
};

//  buat ngambil data worker task app
const getAllWaitedOperatorTaskRepo = async () => {
  return await prisma.task.findMany({
    where: {
      status: "wait-app",
      deleted_at: null,
      pic_title: "operator",
    },
  });
};

//  buat ngambil data default task app
const getAllWaitedTaskRepo = async () => {
  return await prisma.task.findMany({
    where: {
      status: "wait-app",
      deleted_at: null,
    },
  });
};

//  buat ngambil data director history director
const getAllDeletedDirectorTaskRepo = async () => {
  return await prisma.task.findMany({
    where: {
      deleted_at: {
        not: null,
      },
      pic_title: "director",
    },
  });
};

//  buat ngambil data manager history manager
const getAllDeletedManagerTaskRepo = async () => {
  return await prisma.task.findMany({
    where: {
      deleted_at: {
        not: null,
      },
      pic_title: "manager",
    },
  });
};

//  buat ngambil data supervisor history supervisor
const getAllDeletedSupervisorTaskRepo = async () => {
  return await prisma.task.findMany({
    where: {
      deleted_at: {
        not: null,
      },
      pic_title: "supervisor",
    },
  });
};

//  buat ngambil data worker history operator
const getAllDeletedOperatorTaskRepo = async () => {
  return await prisma.task.findMany({
    where: {
      deleted_at: {
        not: null,
      },
      pic_title: "operator",
    },
  });
};

//  buat ngambil data default history
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
  
  // get all acc task
  getAllDirectorTaskRepo,
  getAllManagerTaskRepo,
  getAllSupervisorTaskRepo,
  getAllOperatorTaskRepo,
  getAllTaskRepo,
  // get all acc task

  // get all waited acc task
  getAllWaitedDirectorTaskRepo,
  getAllWaitedManagerTaskRepo,
  getAllWaitedSupervisorTaskRepo,
  getAllWaitedOperatorTaskRepo,
  getAllWaitedTaskRepo,
  // get all waited acc task

  // get all deleted acc task
  getAllDeletedDirectorTaskRepo,
  getAllDeletedManagerTaskRepo,
  getAllDeletedSupervisorTaskRepo,
  getAllDeletedOperatorTaskRepo,
  getAllDeletedTaskRepo,
  // get all deleted acc task

  getTaskByIdRepo,
  getTaskByEmailRepo,
};
