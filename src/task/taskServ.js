const {
  updateTaskRepo,
  createTaskRepo,
  getAllTaskRepo,
  getAllWaitedTaskRepo,
  getAllDeletedTaskRepo,
  getTaskByIdRepo,
  createManyTask,
} = require("./taskRepo");
const { getUserByIdRepo } = require('../user/userRepo');
const { check } = require('prisma');

// service untuk mengedit task
const updateTaskServ = async (id, data) => {
  const dataRest = {
    pic_id: data.pic_id,
    spv_id: data.spv_id,
    task_type: data.task_type,
    task_title: data.task_title,
    priority: data.priority,
    iteration: data.iteration,
    start_date: data.start_date,
    due_date: data.due_date,
    description: data.description,
    pic_title: data.pic_title,
    pic: data.pic,
    pic_rating: data.pic_rating,
    spv: data.spv,
    approved_at: data.approved_at,
    approved_by: data.approved_by,
    started_at: data.started_at,
    started_by: data.started_by,
    finished_at: data.finished_at,
    finished_by: data.finished_by,
    status: data.status,
    progress: data.progress,
    file_attachment: data.file_attachment,
    created_at: data.created_at,
    edited_at: data.edited_at,
    deleted_at: data.deleted_at,
  };

  return await updateTaskRepo(id, dataRest);
};

// Service untuk membuat task baru
const createTaskServ = async (data, files) => {
  const dataRest = {
    pic_id: data.pic_id,
    spv_id: data.spv_id,
    task_type: data.task_type,
    task_title: data.task_title,
    priority: data.priority,
    iteration: data.iteration,
    status: data.status,
    start_date: data.start_date,
    due_date: data.due_date,
    description: data.description,
    pic_title: data.pic_title,
    created_by: data.created_by,
    pic: data.pic,
    spv: data.spv,
    fileName: data.files,
  };

  return await createTaskRepo(dataRest);
};

const getAllTaskServ = async (status, username) => {
  return await getAllTaskRepo(status, username);
};

//  Service untuk mengambil semua task yang belum di acc
const getAllWaitedTaskServ = async (username) => {
  return await getAllWaitedTaskRepo(username);
};

// Service untuk mengambil semua histori task yang telah di hapus
const getAllDeletedTaskServ = async (username) => {
  return await getAllDeletedTaskRepo(username);
};

const getTaskByIdServ = async (id) => {
  return await getTaskByIdRepo(+id);
};


module.exports = {
  updateTaskServ,
  createTaskServ,
  getAllTaskServ,
  getAllWaitedTaskServ,
  getAllDeletedTaskServ,
  getTaskByIdServ,
};
