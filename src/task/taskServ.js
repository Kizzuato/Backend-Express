const xlsx = require('xlsx')
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

const storeToExcel = async (file, user, addInformation) => {
  let dataToStore = []
  try {
    const excel = xlsx.readFile(file.path)
    const worksheet = excel.Sheets[excel.SheetNames[0]]
    let tasks = xlsx.utils.sheet_to_json(worksheet)
    if (tasks.length < 1) throw Error('No Data to Store')
    if (addInformation) addInformation = JSON.parse(addInformation)
    const formatDataExcel = async (properties, referenceObject, defaultValue) => {
      if (!addInformation) return referenceObject[properties] || defaultValue
      return addInformation[properties] ? referenceObject[addInformation[properties]] : referenceObject[properties] || defaultValue
    }

    for (let task of tasks) {
      dataToStore.push({
        pic_id: await formatDataExcel('pic_id', task, null),
        spv_id: await formatDataExcel('spv_id', task, null),
        task_type: await formatDataExcel('task_type', task, null),
        task_title: await formatDataExcel('task_title', task, null),
        priority: await formatDataExcel('priority', task, null),
        iteration: await formatDataExcel('iteration', task, null),
        start_date: await formatDataExcel('start_date', task, null).then(data => { new Date(data).toISOString() }),
        due_date: await formatDataExcel('due_date', task, null).then(data => { new Date(data).toISOString() }),
        description: await formatDataExcel('description', task, null),
        pic_title: await formatDataExcel('pic_title', task, null),
        pic: await formatDataExcel('pic', task, null),
        pic_rating: await formatDataExcel('pic_rating', task, null),
        spv: await formatDataExcel('spv', task, null),
        approved_at: await formatDataExcel('approved_at', task, null).then(data => { new Date(data).toISOString() }),
        approved_by: await formatDataExcel('approved_by', task, null),
        started_at: await formatDataExcel('started_at', task, null).then(data => { new Date(data).toISOString() }),
        started_by: await formatDataExcel('started_by', task, null),
        finished_at: await formatDataExcel('finished_at', task, null).then(data => { new Date(data).toISOString() }),
        finished_by: await formatDataExcel('finished_by', task, null),
        status: await formatDataExcel('status', task, null),
        progress: await formatDataExcel('progress', task, null),
        created_by: user.u_name,
      })
    }
    await createManyTask(dataToStore)
    return dataToStore
  } catch (err) {
    console.log(err)
    throw err
  }
}


module.exports = {
  updateTaskServ,
  createTaskServ,
  getAllTaskServ,
  getAllWaitedTaskServ,
  getAllDeletedTaskServ,
  getTaskByIdServ,
  storeToExcel
};
