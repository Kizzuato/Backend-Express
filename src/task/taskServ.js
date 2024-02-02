const {
  updateTaskRepo,
  createTaskRepo,
  getAllTaskRepo,
  getAllWaitedTaskRepo,
  getAllDeletedTaskRepo,
  getTaskByIdRepo,
} = require("./taskRepo");

// service untuk mengedit task
const updateTaskServ = async (id, data) => {
  const dataRest = {
    task_type:data.task_type,
    task_title:data.task_title,
    priority:data.priority,
    iteration:data.iteration,
    start_date:data.start_date,
    due_date:data.due_date,
    description:data.description,
    pic:data.pic,
    spv:data.spv,
    approved_at:data.approved_at,
    approved_by:data.approved_by,
    finished_at:data.finished_at,
    finished_by:data.finished_by,
    status:data.status,
    progress:data.progress,
    file_attachment:data.file_attachment,
    created_at:data.created_at,
    edited_at:data.edited_at,
    deleted_at:data.deleted_at
  };

  return await updateTaskRepo(id, dataRest);
};

// Service untuk membuat task baru
const createTaskServ = async (data) => {
  const dataRest = {
    task_type: data.task_type,
    task_title: data.task_title,
    priority: data.priority,
    status: data.status,
    start_date: data.start_date,
    due_date: data.due_date,
    description: data.description,
    pic: data.pic,
    spv: data.spv,
  };

  return await createTaskRepo(dataRest);
};

//  Service untuk mengambil semua task yang sudah di acc di database
const getAllTaskServ = async () => {
  return await getAllTaskRepo();
};

//  Service untuk mengambil semua task yang belum di acc
const getAllWaitedTaskServ = async () => {
  return await getAllWaitedTaskRepo();
};

// Service untuk mengambil semua histori task yang telah di hapus
const getAllDeletedTaskServ = async () => {
  return await getAllDeletedTaskRepo();
};

// Service untuk mengambil task berdasarkan id
const getTaskByIdServ = async (id) => {
  return await getTaskByIdRepo(id);
};

module.exports = {
  updateTaskServ,
  createTaskServ,
  getAllTaskServ,
  getAllWaitedTaskServ,
  getAllDeletedTaskServ,
  getTaskByIdServ,
};
