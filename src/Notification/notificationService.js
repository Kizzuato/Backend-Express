const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

const getAllByUserId = async (userId) => {
    try{
        await prisma.m_user.findFirstOrThrow({  where: { id: userId }})
        let notifications = await prisma.notification.findMany({ where: { userId } })
        notifications.map(notif => ({
            
        }))
    }catch(err){
        console.log(err)
        throw err
    }
}