const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient()
const xlsx = require('xlsx')
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


// const storeToExcel = async (file, user, addInformation, employes) => {
//   let dataToStore = []
//   try {
//     const excel = xlsx.readFile(file.path)
//     const worksheet = excel.Sheets[excel.SheetNames[0]]
//     let tasks = xlsx.utils.sheet_to_json(worksheet, { header: 1 })
//     tasks.shift()
//     if (tasks.length < 1) throw Error('No Data to Store')

//     for (let task of tasks) {
//       let [task_type, task_title, priority, iteration, start_date, due_date, description, picName, spvName, status] = task
//       let pic = { pic: picName, pic_id: null, pic_title: null }
//       // console.log("🚀 ~ storeToExcel ~ due_date:", due_date)
//       console.log("🚀 ~ storeToExcel ~ start_date:", task)
//       let spv = { spv: spvName, spv_id: null }
//       start_date = formatDateToISO(start_date)
//       due_date = formatDateToISO(due_date)
      
//       if (pic.pic != null) {
//         const personInContact = await prisma.m_user.findFirst({ where: { u_name: { contains: pic.pic } } })
//         if (!personInContact) {
//           pic.pic = null
//         }else{
//           pic = { pic_id: personInContact.u_id }
//         }
//       }
//       if (spv.spv != null) {
//         const spvList = spv.spv.split(',')
//         let spvListId = '', spvListName = '', spvListDivision ='', spvListBranch = ''
//         for (let spvName of spvList) {
//           const supervisor = await prisma.m_user.findFirst({ where: { u_name: { contains: spvName } } })
//           if (!supervisor) continue
//           spvListId += `${supervisor.u_id},`
//           spvListName += `${supervisor.u_name},`
//           spvListDivision += `${supervisor.division_id},`
//           spvListBranch += `${supervisor.branch_id},`
//         }
//         if(spvListId.length < 2){
//           spvListId = null, spvListName = null, spvListBranch = null, spvListDivision = null
//         } else{
//           spvListId = spvListId.substring(0, spvListId.length - 1)
//           spvListName = spvListName.substring(0, spvListName.length - 1)
//           spvListBranch = spvListBranch.substring(0, spvListBranch.length - 1)
//           spvListDivision = spvListDivision.substring(0, spvListDivision.length -1)
//         } 
//         spv.spv_id = spvListId
//         spv.spv = spvListName
//         spv.branch  = spvListBranch
//         spv.division = spvListDivision
//       }
      
//       console.log("AKSKOASA:" + start_date)
//       console.log("KONKLSANKAJSN:" + due_date)
//       dataToStore.push({
//         task_type, task_title, priority, iteration, status, start_date, due_date, description,
//         branch_id: parseInt(spv.branch), division_id: parseInt(spv.division), pic_id: parseInt(pic.pic_id), spv_id: parseInt(spv.spv_id), created_by: user.u_name
//       })
//     }
//     await createManyTask(dataToStore)
//     await createHistory(user, file)
//     return dataToStore
//   } catch (err) {
//     console.log(err)
//     throw err
  // }

const storeToExcel = async (file, user, addInformation, employes) => {
  console.log("🚀 ~ storeToExcel ~ user:", user.u_id)
  let dataToStore = []
  try {
    const excel = xlsx.readFile(file.path)
    const worksheet = excel.Sheets[excel.SheetNames[0]]
    let tasks = xlsx.utils.sheet_to_json(worksheet, { header: 1 })
    tasks.shift()
    if (tasks.length < 1) throw Error('No Data to Store')

    for (let task of tasks) {
      let [pic_id, spv_id, task_type, task_title, priority, iteration, status, start_date, due_date, description, pic_title, created_by, pic, spv] = task
      
      const formattedStartDate = excelDateToJSDate(start_date);
      const formattedDueDate = excelDateToJSDate(due_date);

      if (!task_type || !task_title || !priority || !iteration || !status || !start_date || !due_date || !description || !pic_id || !spv_id || !pic_title || !user || !spv || !pic) {
        // console.log(`Skipping task due to missing required fields: ${task}`);
        continue;
      }
      // console.log(task);
      // console.log("AKSKOASA:" + formattedStartDate)
      // console.log("KONKLSANKAJSN:" + formattedDueDate)
      dataToStore.push({
        task_type, task_title, priority, iteration, status, start_date: formattedStartDate, due_date:formattedDueDate, description, pic_id, spv_id, pic_role:pic_title, created_by: user.username, spv, pic
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
    if (from) currentDate = new Date(from)
    if (to) {
      finishDate = new Date(to)
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