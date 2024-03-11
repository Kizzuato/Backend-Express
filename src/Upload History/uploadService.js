const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient()
const xlsx = require('xlsx')
const { createManyTask } = require("../task/taskRepo")

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
    await createHistory(user, file)
    return dataToStore
  } catch (err) {
    console.log(err)
    throw err
  }
}

const getAllHistory = async (search, from, to) => {
  try {
    let currentDate = new Date()
    let finishDate = new Date(currentDate)
    if (from) currentDate = new Date(from )
    if (to) { finishDate = new Date(to)
    } else finishDate.setDate(currentDate.getDate() + 7);
    const [startDate, endDate] = [currentDate.toISOString().split('T')[0], finishDate.toISOString().split('T')[0]]
    let histories = await prisma.uploadHistory.findMany({
      where: {
        AND: [
          { created_at: { gte: `${startDate}T00:00:00.000Z` } },
          { created_at: { lte: `${endDate}T23:59:59.999Z` } }
        ],
        ...(search && { fileName: { contains: search } }),
      },
      select: { fileName: true, created_at: true, user: { select: { u_name: true, title: true } } }
    })
    let no = 1, historyData = []
    for(let history of histories){
      historyData.push({
        no,
        fileName: history.fileName,
        uploadedDate: history.created_at.toISOString().split('T')[0],
        uploadedBy: history.user.u_name,
        jabatan: history.user.title
      })
      no++
    }
    return historyData
  } catch (err) {
    console.log(err)
    throw err
  }
}

const createHistory = async (user = { u_id: undefined }, file) => {
  try {
    return prisma.uploadHistory.create({
      data: { fileName: file.originalname, filePath: file.path, userId: user.u_id }
    })
  } catch (err) {
    console.log(err)
    throw err
  }
}

module.exports = { storeToExcel, getAllHistory }