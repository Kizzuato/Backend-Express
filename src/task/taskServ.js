const {
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
} = require("./taskRepo");

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
    files: files,
  };

  return await createTaskRepo(dataRest);
};

//  Service untuk mengambil semua task yang sudah di acc di database
const getAllDirectorTaskServ = async () => {
  return await getAllDirectorTaskRepo();
};

//  Service untuk mengambil semua task yang sudah di acc di database
const getAllManagerTaskServ = async () => {
  return await getAllManagerTaskRepo();
};

//  Service untuk mengambil semua task yang sudah di acc di database
const getAllSupervisorTaskServ = async () => {
  return await getAllSupervisorTaskRepo();
};

//  Service untuk mengambil semua task yang sudah di acc di database
const getAllOperatorTaskServ = async () => {
  return await getAllOperatorTaskRepo();
};

//  Service untuk mengambil semua task yang sudah di acc di database
const getAllTaskServ = async () => {
  return await getAllTaskRepo();
};

//  Service untuk mengambil semua task yang belum di acc
const getAllWaitedDirectorTaskServ = async () => {
  return await getAllWaitedDirectorTaskRepo();
};

//  Service untuk mengambil semua task yang belum di acc
const getAllWaitedManagerTaskServ = async () => {
  return await getAllWaitedManagerTaskRepo();
};

//  Service untuk mengambil semua task yang belum di acc
const getAllWaitedSupervisorTaskServ = async () => {
  return await getAllWaitedSupervisorTaskRepo();
};

//  Service untuk mengambil semua task yang belum di acc
const getAllWaitedOperatorTaskServ = async () => {
  return await getAllWaitedOperatorTaskRepo();
};

//  Service untuk mengambil semua task yang belum di acc
const getAllWaitedTaskServ = async () => {
  return await getAllWaitedTaskRepo();
};

// Service untuk mengambil semua histori task yang telah di hapus
const getAllDirectorDeletedTaskServ = async () => {
  return await getAllDeletedDirectorTaskRepo();
};

// Service untuk mengambil semua histori task yang telah di hapus
const getAllManagerDeletedTaskServ = async () => {
  return await getAllDeletedManagerTaskRepo();
};

// Service untuk mengambil semua histori task yang telah di hapus
const getAllSupervisorDeletedTaskServ = async () => {
  return await getAllDeletedSupervisorTaskRepo();
};

// Service untuk mengambil semua histori task yang telah di hapus
const getAllOperatorDeletedTaskServ = async () => {
  return await getAllDeletedOperatorTaskRepo();
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

  getAllDirectorTaskServ,
  getAllManagerTaskServ,
  getAllSupervisorTaskServ,
  getAllOperatorTaskServ,
  getAllTaskServ,

  getAllWaitedTaskServ,
  getAllWaitedDirectorTaskServ,
  getAllWaitedManagerTaskServ,
  getAllWaitedSupervisorTaskServ,
  getAllWaitedOperatorTaskServ,

  getAllDirectorDeletedTaskServ,
  getAllManagerDeletedTaskServ,
  getAllSupervisorDeletedTaskServ,
  getAllOperatorDeletedTaskServ,
  getAllDeletedTaskServ,

  getTaskByIdServ,
};
