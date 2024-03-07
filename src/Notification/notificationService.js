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
        return notifications
    }catch(err){
        console.log(err)
        throw err
    }
}

const getUnread = async  (userId) => {
    try{
        const user = await prisma.m_user.findFirstOrThrow({  where: { u_id: userId }})
        return await prisma.notification.count({where: { ...(user.lastSeenNotification != null && {created_at: { gte: user.lastSeenNotification }}) } })
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
    const currentHour = currentDate.getHours(), currentMinute = currentDate.getMinutes()
    return `${currentHour}:${currentMinute} ${currentHour > 12 ? "PM" : "AM"}`
}

module.exports = { getAll, createNotif, getUnread, readMessage,createNotif }