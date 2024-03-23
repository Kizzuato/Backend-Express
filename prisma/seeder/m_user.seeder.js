const { PrismaClient } = require("@prisma/client");
const { taskSeed } = require("./task.seeder");
const { branchSeed } = require("./branch.seeder");
const { divisionSeed } = require("./division.seeder");
const bcrypt = require("bcrypt");
const prisma = new PrismaClient();
const users = [
    {
        u_name: "Admin",
        u_email: "admin@gmail.com",
        u_password: "12345678",
        title: "admin",
        division: "Acc & Purchase",
        branch: "PT. RES",
    },
    {
        u_name: "Novi Handayani",
        u_email: "Novi@gmail.com",
        u_password: "12345678",
        title: "director",
        division: "Marketing",
        branch: "Produksi RES",
    },
    {
        u_name: "Director",
        u_email: "director@gmail.com",
        u_password: "12345678",
        title: "director",
        division: "Acc & Purchase",
        branch: "PT. RES",
    },
    {
        u_name: "user",
        u_email: "user@gmail.com",
        u_password: "12345678",
        title: "manager",
        division: "Marketing",
        branch: "Produksi RES",
    },
    {
        u_name: "Siti Mariyam",
        u_email: "siti@gmail.com",
        u_password: "12345678",
        title: "manager",
        division: "HRD & GA",
        branch: "ONIC 1",
    },
    {
        u_name: "Vivi Wasiah",
        u_email: "vivi@gmail.com",
        u_password: "12345678",
        title: "manager",
        division: "HRD & GA",
        branch: "ONIC 1",
    },
    {
        u_name: "Manager",
        u_email: "manager@gmail.com",
        u_password: "12345678",
        title: "manager",
        division: "Acc & Purchase",
        branch: "PT. RES",
    },
    {
        u_name: "Komariah Santi",
        u_email: "komariah@gmail.com",
        u_password: "12345678",
        title: "supervisor",
        division: "Marketing",
        branch: "Produksi RES",
    },
    {
        u_name: "Aulia Novianty",
        u_email: "aulia@gmail.com",
        u_password: "12345678",
        title: "supervisor",
        division: "HRD & GA",
        branch: "Produksi RES",
    },
    {
        u_name: "M.Azuari Rahman",
        u_email: "azuari@gmail.com",
        u_password: "12345678",
        title: "supervisor",
        division: "HRD & GA",
        branch: "ONIC 1",
    },
    {
        u_name: "Nahda Eliza Zaeni",
        u_email: "nahda@gmail.com",
        u_password: "12345678",
        title: "supervisor",
        division: "HRD & GA",
        branch: "ONIC 1",
    },
    {
        u_name: "Ikromullah",
        u_email: "ikromullah@gmail.com",
        u_password: "12345678",
        title: "supervisor",
        division: "HRD & GA",
        branch: "Produksi RES",
    },
    {
        u_name: "Supervisor",
        u_email: "supervisor@gmail.com",
        u_password: "12345678",
        title: "supervisor",
        division: "HRD & GA",
        branch: "PT. RES",
    },
    {
        u_name: "Ara ariyanti",
        u_email: "ara@gmail.com",
        u_password: "12345678",
        title: "operator",
        division: "HRD & GA",
        branch: "Produksi RES",
    },
    {
        u_name: "Sanusi",
        u_email: "sanusi@gmail.com",
        u_password: "12345678",
        title: "operator",
        division: "HRD & GA",
        branch: "Produksi RES",
    },
    {
        u_name: "Entin",
        u_email: "entin@gmail.com",
        u_password: "12345678",
        title: "operator",
        division: "HRD & GA",
        branch: "Produksi RES",
    },
    {
        u_name: "Sri Wahyuni",
        u_email: "sriwiw@gmail.com",
        u_password: "12345678",
        title: "operator",
        division: "Marketing",
        branch: "Produksi RES",
    },
    {
        u_name: "Ruli Saputra",
        u_email: "Ruli@gmail.com",
        u_password: "12345678",
        title: "operator",
        division: "Marketing",
        branch: "",
    },
    {
        u_name: "Romi pangestuda",
        u_email: "romi@gmail.com",
        u_password: "12345678",
        title: "operator",
        division: "Marketing",
        branch: "Produksi RES",
    },
    {
        u_name: "Operator",
        u_email: "operator@gmail.com",
        u_password: "12345678",
        title: "operator",
        division: "Acc & Purchase",
        branch: "PT. RES"
    }
]

const userSeed = async () => {
    try {
        // Looping melalui setiap pengguna
        for (let user of users) {
            // Mengambil ID dari cabang dan divisi berdasarkan nama
            const branchData = await prisma.branch.findUnique({ where: { b_name: user.branch } });
            const divisionData = await prisma.division.findUnique({ where: { divisionName: user.division } });

            // Jika cabang atau divisi tidak ditemukan, lewati pengguna ini
            if (!branchData || !divisionData) {
                console.log(`Branch or Division not found for user: ${user.u_name}`);
                continue;
            }

            // Mengisi branch_id dan division_id di dalam objek pengguna
            user.branch_id = branchData.id;
            user.division_id = divisionData.id;

            // Membuat hash password sebelum menyimpan pengguna
            const salt = await bcrypt.genSalt();
            user.u_password = await bcrypt.hash(user.u_password, salt);

            // Menyimpan pengguna ke basis data
            const createdUser = await prisma.m_user.create({ data: user });

            // Memanggil taskSeed dengan pengguna yang dibuat
            await taskSeed(createdUser);
        }
    } catch (err) {
        console.log(err);
    }
}

module.exports = { userSeed }