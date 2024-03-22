const { PrismaClient } = require("@prisma/client");
const { taskSeed } = require("./task.seeder");
const bcrypt = require("bcrypt");
const prisma = new PrismaClient();
const users = [
    {
        u_name: "Admin",
        u_email: "admin@gmail.com",
        u_password: "12345678",
        title: "admin",
    },
    {
        u_name: "Novi Handayani",
        u_email: "Novi@gmail.com",
        u_password: "12345678",
        title: "director",
    },
    {
        u_name: "Director",
        u_email: "director@gmail.com",
        u_password: "12345678",
        title: "director",
    },
    {
        u_name: "user",
        u_email: "user@gmail.com",
        u_password: "12345678",
        title: "manager",
    },
    {
        u_name: "Siti Mariyam",
        u_email: "siti@gmail.com",
        u_password: "12345678",
        title: "manager",
    },
    {
        u_name: "Vivi Wasiah",
        u_email: "vivi@gmail.com",
        u_password: "12345678",
        title: "manager",
    },
    {
        u_name: "Manager",
        u_email: "manager@gmail.com",
        u_password: "12345678",
        title: "manager",
    },
    {
        u_name: "Komariah Santi",
        u_email: "komariah@gmail.com",
        u_password: "12345678",
        title: "supervisor",
    },
    {
        u_name: "Aulia Novianty",
        u_email: "aulia@gmail.com",
        u_password: "12345678",
        title: "supervisor",
    },
    {
        u_name: "M.Azuari Rahman",
        u_email: "azuari@gmail.com",
        u_password: "12345678",
        title: "supervisor",
    },
    {
        u_name: "Nahda Eliza Zaeni",
        u_email: "nahda@gmail.com",
        u_password: "12345678",
        title: "supervisor",
    },
    {
        u_name: "Ikromullah",
        u_email: "ikromullah@gmail.com",
        u_password: "12345678",
        title: "supervisor",
    },
    {
        u_name: "Supervisor",
        u_email: "supervisor@gmail.com",
        u_password: "12345678",
        title: "supervisor",
    },
    {
        u_name: "Ara ariyanti",
        u_email: "ara@gmail.com",
        u_password: "12345678",
        title: "operator",
    },
    {
        u_name: "Sanusi",
        u_email: "sanusi@gmail.com",
        u_password: "12345678",
        title: "operator",
    },
    {
        u_name: "Entin",
        u_email: "entin@gmail.com",
        u_password: "12345678",
        title: "operator",
    },
    {
        u_name: "Sri Wahyuni",
        u_email: "sriwiw@gmail.com",
        u_password: "12345678",
        title: "operator",
    },
    {
        u_name: "Ruli Saputra",
        u_email: "Ruli@gmail.com",
        u_password: "12345678",
        title: "operator",
    },
    {
        u_name: "Romi pangestuda",
        u_email: "romi@gmail.com",
        u_password: "12345678",
        title: "operator",
    },
    {
        u_name: "Operator",
        u_email: "operator@gmail.com",
        u_password: "12345678",
        title: "operator"
    }
]

const userSeed = async () => {
    try{
        for(let user of users){
            const salt = await bcrypt.genSalt()
            user.u_password = await bcrypt.hash(user.u_password, salt);
            user.lastSeenNotification = new Date().toISOString()
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