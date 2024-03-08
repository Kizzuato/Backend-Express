const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

const getAll = async (userId) => {
    try{
        const user = await prisma.m_user.findFirstOrThrow({  where: { u_id: userId }})
        let notifications = await prisma.notification.findMany({ where: { ...(user.lastSeenNotification != null && {created_at: { gte: user.lastSeenNotification }}) }, select:{ message: true, timeStamp: true, task: true } })
        notifications = notifications.map(notif => ({
            taskTitle: notif.task.task_title,
            pic: notif.task.pic,
            time: notif.timeStamp,
            message: notif.message,
        }))
        return { notifs: notifications, unread: notifications.length }
    }catch(err){
        console.log(err)
        throw err
    }
}

const readMessage = async (userId) => {
    try{
        const user = await prisma.m_user.findFirstOrThrow({  where: { u_id: userId }})
        return await prisma.m_user.update({ where: { u_id: user.u_id }, data:{ lastSeenNotification: new Date().toISOString() } })
    }catch(err){
        console.log(err)
        throw err
    }
}

const createNotif = async (data) => {
    try{
        await prisma.task.findFirstOrThrow({ where: { id: data.taskId } })
        data.timeStamp = generateTimeStamp()
        return await prisma.notification.create({ data })
    }catch(err){
        console.log(err)
        throw err
    }
}

const generateTimeStamp = () => {
    const currentDate = new Date()
    let currentHour = currentDate.getHours(), currentMinute = currentDate.getMinutes()
    if(currentHour >= 12) currentHour = currentHour - 12 
    return `${currentHour.toString().padStart(2, '0')}:${currentMinute.toString().padStart(2, '0')} ${currentHour > 12 ? "PM" : "AM"}`
}

module.exports = { getAll, createNotif, readMessage,createNotif }