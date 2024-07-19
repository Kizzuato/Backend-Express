const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient()
const xlsx = require('xlsx')
const moment = require('moment');
const { createManyTask } = require("../task/taskRepo")

const formatDateToISO = (date) => {
  return new Date(date).toISOString()
}

const excelDateToJSDate = (serial) => {
  const utc_days = Math.floor(serial - 25569);
  const utc_value = utc_days * 86400;                                        
  const date_info = new Date(utc_value * 1000);
  
  const fractional_day = serial - Math.floor(serial) + 0.0000001;

  let total_seconds = Math.floor(86400 * fractional_day);
  
  const seconds = total_seconds % 60;
  total_seconds -= seconds;
  
  const hours = Math.floor(total_seconds / (60 * 60));
  const minutes = Math.floor(total_seconds / 60) % 60;

  return new Date(date_info.getFullYear(), date_info.getMonth(), date_info.getDate(), hours, minutes, seconds);
}

const parseDate = (dateInput) => {
  if (!dateInput) return null;

  // Cek jika input adalah angka (serial number Excel)
  if (typeof dateInput === 'number') {
    // Tambahkan tanggal dasar Excel (01/01/1900) dan konversi ke JavaScript Date
    const excelBaseDate = new Date(1899, 11, 30);
    const date = new Date(excelBaseDate.getTime() + dateInput * 86400000);
    return date;
  }

  // Menggunakan moment.js untuk memparsing tanggal
  const date = moment(dateInput, 'DD/MM/YYYY HH:mm:ss');

  // Mengembalikan objek JavaScript Date
  return date.isValid() ? date.toDate() : null;
};

const storeToExcel = async (file, user, addInformation, employes) => {
  // console.log("🚀 ~ storeToExcel ~ user:", user.u_id)
  let dataToStore = []
  try {
    const excel = xlsx.readFile(file.path)
    const worksheet = excel.Sheets[excel.SheetNames[0]]
    let tasks = xlsx.utils.sheet_to_json(worksheet, { header: 1 })
    tasks.shift()
    if (tasks.length < 1) throw Error('No Data to Store')

    for (let task of tasks) {
      let [pic_id, spv_id, task_type, task_title, priority, iteration, status, start_date, due_date, description, pic_title, created_by, pic, spv, branch, division, position] = task
      
      

      const formattedStartDate = parseDate(start_date);
      const formattedDueDate = parseDate(due_date);

      if (!task_type || !task_title || !priority || !iteration || !status || !start_date || !due_date || !description || !pic_id || !spv_id || !pic_title || !user || !spv || !pic) {
        // console.log(`Skipping task due to missing required fields: ${task}`);
        continue;
      }
      // console.log(task);
      // console.log("AKSKOASA:" + formattedStartDate)
      // console.log("KONKLSANKAJSN:" + formattedDueDate)
      console.log("🚀 ~ storeToExcel ~ start_date:", start_date)
      console.log("🚀 ~ storeToExcel ~ due_date:", due_date)
      dataToStore.push({
        task_type, task_title, priority, iteration, status, start_date: formattedStartDate, due_date:formattedDueDate, description, pic_id, spv_id, pic_role:pic_title, created_by: user.username, spv, pic
      })
    }

    await createManyTask(dataToStore)
    await createHistory(user, file)
    // console.log("DON")
    return dataToStore
  } catch (err) {
    console.log(err)
    throw err
  }
}

const getAllHistory = async (search, from, to) => {
  try {
    // let currentDate = new Date()
    // let finishDate = new Date(currentDate)
    // if (from) currentDate = new Date(from)
    // if (to) {
    //   finishDate = new Date(to)
    // } else finishDate.setDate(currentDate.getDate() + 7);
    // const [startDate, endDate] = [currentDate.toISOString().split('T')[0], finishDate.toISOString().split('T')[0]]
    const startDate = from? new Date(from).toISOString() : null;
    const endDate = to? new Date(to).toISOString() : null;
    let histories = await prisma.uploadHistory.findMany({
      where: {
        AND: [
          { created_at: { gte: startDate || undefined } },
          { created_at: { lte: endDate || undefined } }
        ],
        ...(search && { fileName: { contains: search } }),
      },
      select: { fileName: true, created_at: true, u_name: true, title: true }
    })
    let no = 1, historyData = []
    for (let history of histories) {
      historyData.push({
        no,
        fileName: history.fileName,
        uploadedDate: history.created_at.toISOString().split('T')[0],
        uploadedBy: history.u_name,
        jabatan: history.title
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
      data: { fileName: file.originalname, filePath: file.path, userId: parseInt(user.u_id), u_name: user.username, title: user.title  }
    })
  } catch (err) {
    console.log(err)
    throw err
  }
}

module.exports = { storeToExcel, getAllHistory }