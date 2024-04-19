const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const notifs = [
    {
        timeStamp: "01:10 AM",
        message: "Task need to be finished today",
        taskId: 1
    }
]

const notifSeed = async () => {
    await prisma.notification.createMany({ data: notifs })
}

module.exports = { notifSeed }