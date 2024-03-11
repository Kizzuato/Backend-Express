const { PrismaClient } = require('@prisma/client')
const schedule = require('node-schedule')
const { createNotif } = require('../Notification/notificationService')

const prisma = new PrismaClient()

//? TO RUN THIS SCHEDULE Use "npm run schedule"
const generateNotification = async (act) => {
    let searchedDate = new Date(), dueDate, message
    try {
        if (act != "overdue") {
            searchedDate.setDate(searchedDate.getDate() + 1)
            searchedDate = searchedDate.toISOString().split('T')[0]
            dueDate = {
                gte: `${searchedDate}T00:00:00.000Z`,
                lte: `${searchedDate}T23:59:59.999Z`
            }
            message = "Tugas harus diselesaikan besok, mohon dikerjakan" //TODO: Message need to be chaged for H-1
        }else{
            searchedDate = searchedDate.toISOString().split('T')[0]
            dueDate = { lt: `${searchedDate}T00:00:00.000Z` }
            message = "Tugas sudah melewati batas waktu pengerjaan, mohon konfirmasi" //TODO: Message need to be chaged for Overdue Task
        }
        const tasks = await prisma.task.findMany({
            where: {
                due_date: { ...dueDate },
                finished_at: null
            }, select: { id: true }
        })
        for (let task of tasks) await createNotif({
            taskId: task.id,
            message
        })
    } catch (err) {
        console.log(err)
    }
}

// schedule.scheduleJob('* * * * *', async () => { console.log('Schedule Running') }) //? USED TO TEST IF THE SCHEDULE RUNNING
schedule.scheduleJob('generateComment', '* 0 * * *', async () => { //? CREATE REMINDER NOTIFICATION
    await generateNotification('h-1')
    await generateNotification('overdue')
})
