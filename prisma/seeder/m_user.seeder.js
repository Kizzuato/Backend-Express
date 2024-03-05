const { PrismaClient } = require("@prisma/client");
const { taskSeed } = require("./task.seeder");
const bcrypt = require("bcrypt");
const prisma = new PrismaClient();
const users = [
    {
        u_name: "Jajang Mulyana",
        u_email: "director@gmail.com",
        u_password: "director",
        title: "director",
    },
    {
        u_name: "Titin Nurhayati",
        u_email: "manager@gmail.com",
        u_password: "manager",
        title: "manager",
    },
    {
        u_name: "Darman Sukmana",
        u_email: "supervisor@gmail.com",
        u_password: "supervisor",
        title: "supervisor",
    },
    {
        u_name: "Maria Mariadi",
        u_email: "worker@gmail.com",
        u_password: "worker",
        title: "worker",
    },
    {
        u_name: "Lilis Sunandi",
        u_email: "operator@gmail.com",
        u_password: "operator",
        title: "operator",
    }
]

const userSeed = async () => {
    try{
        for(let user of users){
            const salt = await bcrypt.genSalt()
            user.u_password = await bcrypt.hash(user.u_password, salt);
            const createdUser = await prisma.m_user.upsert({
                where: { u_email: user.u_email },
                create: user, update: user
            })
            await taskSeed(createdUser)
        }
    }catch(err){
        console.log(err)
    }
}

module.exports = { userSeed }