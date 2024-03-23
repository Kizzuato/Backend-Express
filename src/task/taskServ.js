const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

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

const {updatePicRepo} = require("../user/userRepo");

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
    const updatedTask = {
      pic_rating: data.pic_rating,
      status: data.status,
      approved_at: data.approved_at
    };
    await updateTaskRepo(id, updatedTask);

    // Perbarui total_task dan total_rating pada tabel pic jika task diterima (misalnya, status "accepted")
    if (
      existingTask.status === "In-progress" &&
      updatedTask.status === "Close"
    ) {
      await updatePicRepo(pic, updatedTask.pic_rating);
    } else if (
      existingTask.status === "Idle" &&
      updatedTask.status === "Close"
    ) {
      const pic_rating = updatedTask.pic_rating - 2
      console.log(pic_rating)
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
    pic_title: data.pic_title,
    created_by: data.created_by,
    pic: data.pic,
    spv: data.spv,
    fileName: data.files,
  };
  console.log("🚀 ~ createTaskServ ~ dataRest.spv_id:", dataRest.spv_id)

  const user = await prisma.m_user.findUnique({
    where: {
      u_id: spvId
    },
    select: {
      division_id: true,
      division: true,
      branch_id: true,
      branch: true
    }
  });

  // Jika user ditemukan, tambahkan division dan branch ke dalam data yang akan dikirim
  if (user) {
    dataRest.division_id = user.division_id;
    dataRest.division = user.division;
    dataRest.branch_id = user.branch_id;
    dataRest.branch = user.branch;
  }

  console.log("🚀 ~ router.put ~ data:", dataRest)
  return await createTaskRepo(dataRest);
};

const getAllTaskServ = async (search, status, pic, spv, division, branch, startDate, dueDate) => {
  const fromDate = startDate ? new Date(startDate).toISOString() : null;
  const toDate = dueDate? new Date(dueDate).toISOString() : null;
  return await getAllTaskRepo(search, status, pic, spv, division, branch, fromDate, toDate);
};

//  Service untuk mengambil semua task yang belum di acc
const getAllWaitedTaskServ = async (search, status, pic, spv, division, branch, startDate, dueDate) => {
  const fromDate = startDate ? new Date(startDate).toISOString() : null;
  const toDate = dueDate? new Date(dueDate).toISOString() : null;
  return await getAllWaitedTaskRepo(search, status, pic, spv, division, branch, fromDate, toDate);
};

// Service untuk mengambil semua histori task yang telah di hapus
const getAllDeletedTaskServ = async (search, status, pic, spv, division, branch, startDate, dueDate) => {
  const fromDate = startDate ? new Date(startDate).toISOString() : null;
  const toDate = dueDate? new Date(dueDate).toISOString() : null;
  return await getAllDeletedTaskRepo(search, status, pic, spv, division, branch, fromDate, toDate);
};

const getTaskByIdServ = async (id) => {
  return await getTaskByIdRepo(+id);
};


module.exports = {
  updateTaskServ,
  AcceptTaskServe,
  createTaskServ,
  getAllTaskServ,
  getAllWaitedTaskServ,
  getAllDeletedTaskServ,
  getTaskByIdServ,
};
