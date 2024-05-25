const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const User = require("../user/userRepo");
const Branch = require("../Branch/branchRepo");

const {
  updateTaskRepo,
  createTaskRepo,
  getAllTaskRepo,
  getAllWaitedTaskRepo,
  getAllDeletedTaskRepo,
  getTaskByIdRepo,
  createManyTask,
} = require("./taskRepo");
const { getUserByIdRepo } = require("../user/userRepo");
const { check } = require("prisma");

const { updatePicRepo } = require("../user/userRepo");
const { response } = require("../Notification/notificationRoute");

// service untuk mengedit task
const updateTaskServ = async (id, data) => {
  const dataRest = {
    pic_id: data.pic_id,
    spv_id: data.spv_id,
    branch_id: data.branch_id,
    division_id: data.division_id,
    task_type: data.task_type,
    task_title: data.task_title,
    priority: data.priority,
    iteration: data.iteration,
    start_date: data.start_date,
    due_date: data.due_date,
    description: data.description,
    pic_title: data.pic_title,
    pic: data.pic,
    spv: data.spv,
    branch: data.branch,
    division: data.division,
    pic_rating: data.pic_rating,
    approved_at: data.approved_at,
    approved_by: data.approved_by,
    started_at: data.started_at,
    started_by: data.started_by,
    finished_at: data.finished_at,
    finished_by: data.finished_by,
    status: data.status,
    progress: data.progress,
    file_hasil: data.file_hasil,
    created_at: data.created_at,
    edited_at: data.edited_at,
    deleted_at: data.deleted_at,
  };

  return await updateTaskRepo(id, dataRest);
};

const AcceptTaskServe = async (id, data) => {
  try {
    // Ambil data task sebelum diupdate
    const existingTask = await getTaskByIdRepo(+id);

    // Lakukan validasi atau logika bisnis jika diperlukan
    const pic = data.pic;
    const pic_rating = data.pic_rating;
    const updatedTask = {
      status: data.status,
      approved_at: data.approved_at,
    };
    await updateTaskRepo(id, updatedTask);

    // Perbarui total_task dan total_rating pada tabel pic jika task diterima (misalnya, status "accepted")
    if (
      existingTask.status === "In-progress" &&
      updatedTask.status === "Close"
    ) {
      await updatePicRepo(pic, pic_rating);
    } else if (
      existingTask.status === "Idle" &&
      updatedTask.status === "Close"
    ) {
      const pic_rating = pic_rating - 2;
      // console.log(pic_rating)
      await updatePicRepo(pic, pic_rating);
    }

    return updatedTask;
  } catch (error) {
    throw error;
  }
};

// Service untuk membuat task baru
const createTaskServ = async (data, files) => {
  const picId = parseInt(data.pic_id);
  const spvId = parseInt(data.spv_id);

  const dataRest = {
    pic_id: picId,
    spv_id: spvId,
    task_type: data.task_type,
    task_title: data.task_title,
    priority: data.priority,
    iteration: data.iteration,
    status: data.status,
    start_date: data.start_date,
    due_date: data.due_date,
    description: data.description,
    created_by: data.created_by,
    fileName: data.files,
    pic: data.pic,
    pic_role: data.pic_title,
    spv: data.spv
  };

  return await createTaskRepo(dataRest);
};

const getAllTaskServ = async (search, status, data, startDate, dueDate) => {
  const fromDate = startDate ? new Date(startDate).toISOString() : null;
  const toDate = dueDate ? new Date(dueDate).toISOString() : null;
  const response = await getAllTaskRepo(search, status, data, fromDate, toDate);

  if (response.length === 0) {
    return [];
  }

  return response;
};


const getAllTask = async (search, status, data, startDate, dueDate) => {
  // const fromDate = startDate ? new Date(startDate).toISOString() : null;
  // const toDate = dueDate? new Date(dueDate).toISOString() : null;
  // const response = await getAllTaskRepo(search, status, data, fromDate, toDate);

  // const picIds = [...new Set(response.map(task => task.pic_id))];
  // const spvIds = [...new Set(response.map(task => task.spv_id))];

  // const picPromises = picIds.map(id => User.getUserByIdRepo(id));
  // const picData = await Promise.all(picPromises);
  // const spvPromises = spvIds.map(id => User.getUserByIdRepo(id));
  // const spvData = await Promise.all(spvPromises);

  // const tasksWithUserData = response.map(task => {
  //   const user = picData.find(userData => {return userData.u_id === task.pic_id})
  //   const spv = spvData.find(userData => {return userData.u_id === task.spv_id})
  //   if (user) {
  //     return {
  //       ...task,
  //       pic_title: user.title,
  //       pic: user.u_name,
  //       spv: spv.u_name
  //     };
  //   } else {
  //     return task;
  //   }
  // });

  return await getAllTaskRepo(search, status, data, startDate, dueDate);
};

//  Service untuk mengambil semua task yang belum di acc
const getAllWaitedTaskServ = async (
  search,
  status,
  data,
  startDate,
  dueDate
) => {
  try {
    const fromDate = startDate ? new Date(startDate).toISOString() : null;
    const toDate = dueDate ? new Date(dueDate).toISOString() : null;

    const response = await getAllWaitedTaskRepo(
      search,
      status,
      data,
      fromDate,
      toDate
    );

    // // Dapatkan id pic dari respons
    // const picIds = [...new Set(response.map((task) => task.pic_id))];
    // const spvIds = [...new Set(response.map((task) => task.spv_id))];

    // const picPromises = picIds.map((id) => User.getUserByIdRepo(id));
    // const picData = await Promise.all(picPromises);
    // const spvPromises = spvIds.map((id) => User.getUserByIdRepo(id));
    // const spvData = await Promise.all(spvPromises);

    // const tasksWithUserData = response.map((task) => {
    //   const user = picData.find((userData) => {
    //     return userData.u_id === task.pic_id;
    //   });
    //   const spv = spvData.find((userData) => {
    //     return userData.u_id === task.spv_id;
    //   });
    //   if (user) {
    //     return {
    //       ...task,
    //       pic_title: user.title,
    //       pic: user.u_name,
    //       spv: spv.u_name,
    //     };
    //   } else {
    //     return task;
    //   }
    // });

    return response;
  } catch (error) {
    console.error("Error in getAllWaitedTaskServ:", error);
    throw error;
  }
};

// Service untuk mengambil semua histori task yang telah di hapus
const getAllDeletedTaskServ = async (
  search,
  status,
  data,
  startDate,
  dueDate
) => {
  const fromDate = startDate ? new Date(startDate).toISOString() : null;
  const toDate = dueDate ? new Date(dueDate).toISOString() : null;
  const response = await getAllDeletedTaskRepo(
    search,
    status,
    data,
    fromDate,
    toDate
  );

  // const picIds = [...new Set(response.map((task) => task.pic_id))];
  // const spvIds = [...new Set(response.map((task) => task.spv_id))];

  // const picPromises = picIds.map((id) => User.getUserByIdRepo(id));
  // const picData = await Promise.all(picPromises);
  // const spvPromises = spvIds.map((id) => User.getUserByIdRepo(id));
  // const spvData = await Promise.all(spvPromises);

  // const tasksWithUserData = response.map((task) => {
  //   const user = picData.find((userData) => {
  //     return userData.u_id === task.pic_id;
  //   });
  //   const spv = spvData.find((userData) => {
  //     return userData.u_id === task.spv_id;
  //   });
  //   if (user) {
  //     return {
  //       ...task,
  //       pic_title: user.title,
  //       pic: user.u_name,
  //       spv: spv.u_name,
  //     };
  //   } else {
  //     return task;
  //   }
  // });

  return await response;
};

const getTaskByIdServ = async (id) => {
  const task = await getTaskByIdRepo(+id);

  return task;
};

module.exports = {
  updateTaskServ,
  AcceptTaskServe,
  createTaskServ,
  getAllTaskServ,
  getAllWaitedTaskServ,
  getAllDeletedTaskServ,
  getTaskByIdServ,
  getAllTask,
};
