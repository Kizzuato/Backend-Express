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
const getAllDirectorTaskRepo = async (status) => {
  return await prisma.task.findMany({
    where: {
      NOT: {
        status: "wait-app",
      },
      deleted_at: null,
      pic_title: "director",
      status: status || undefined,
    },
  });
};

// buat ngambil data manager task monit
const getAllManagerTaskRepo = async (status, title) => {
  return await prisma.task.findMany({
    where: {
      ...(title && { task_title: { contains: title } }),
      ...(status ? { status } : {
        NOT: {
          status: "wait-app",
        }
      }),
      deleted_at: null,
      pic_title: "manager",
      status: status || undefined,
    }, orderBy: { updated_at: 'desc' }
  });
};

// buat ngambil data spv task monit
const getAllSupervisorTaskRepo = async (status, title) => {
  return await prisma.task.findMany({
    where: {
      ...(title && { task_title: { contains: title } }),
      ...(status ? { status } : {
        NOT: {
          status: "wait-app",
        }
      }),
      deleted_at: null,
      pic_title: {
        in: ["supervisor", "operator"],
      },
      status: status || undefined,
    }, orderBy: { updated_at: 'desc' }
  });
};

// buat ngambil data worker task monit
const getAllOperatorTaskRepo = async (status) => {
  return await prisma.task.findMany({
    where: {
      NOT: {
        status: "wait-app",
      },
      deleted_at: null,
      pic_title: "operator",
      status: status || undefined,
    },
  });
};

// buat ngambil data default task monit 
const getAllTaskRepo = async (status) => {
  return await prisma.task.findMany({
    where: {
      NOT: {
        status: "wait-app",
      },
      deleted_at: null,
      status: status || undefined,
    },
  });
};

//  buat ngambil data director task app
const getAllWaitedDirectorTaskRepo = async (title) => {
  return await prisma.task.findMany({
    where: {
      ...(title && { task_title: { contains: title } }),
      status: "wait-app",
      deleted_at: null,
      pic_title: "director",
    }, orderBy: { updated_at: "desc" }
  });
};

//  buat ngambil data manager task app
const getAllWaitedManagerTaskRepo = async (title) => {
  return await prisma.task.findMany({
    where: {
      ...(title && { task_title: { contains: title } }),
      status: "wait-app",
      deleted_at: null,
      pic_title: "manager",
    }, orderBy: { updated_at: "desc" }
  });
};

//  buat ngambil data supervisor task app
const getAllWaitedSupervisorTaskRepo = async (title) => {
  return await prisma.task.findMany({
    where: {
      ...(title && { task_title: { contains: title } }),
      status: "wait-app",
      deleted_at: null,
      pic_title: "supervisor",
    }, orderBy: { updated_at: "desc" }
  });
};

//  buat ngambil data worker task app
const getAllWaitedOperatorTaskRepo = async (title) => {
  return await prisma.task.findMany({
    where: {
      ...(title && { task_title: { contains: title } }),
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
const getAllDeletedManagerTaskRepo = async (title) => {
  return await prisma.task.findMany({
    where: {
      ...(title && { task_title: {  contains: title} }),
      deleted_at: {
        not: null,
      },
      pic_title: "manager",
    },  orderBy: { created_at: 'desc' }
  });
};

//  buat ngambil data supervisor history supervisor
const getAllDeletedSupervisorTaskRepo = async (title) => {
  return await prisma.task.findMany({
    where: {
      ...(title && { task_title: { contains: title } }),
      deleted_at: {
        not: null,
      },
      pic_title: "supervisor",
    },
  });
};

//  buat ngambil data worker history operator
const getAllDeletedOperatorTaskRepo = async (title) => {
  return await prisma.task.findMany({
    where: {
      ...(title && { task_title: { contains: title } }),
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
