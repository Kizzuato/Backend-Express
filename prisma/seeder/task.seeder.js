const { PrismaClient } = require("@prisma/client");
const { use } = require("../../src/task/taskController");
const prisma = new PrismaClient();
const tasks = [
  {
    pic_id: 27,
    spv_id: 23,
    task_type: "Single",
    task_title: "Memastikan Pembayaran Lapak",
    priority: "High",
    status: "Close",
    iteration: "Insidental",
    start_date: "2024-01-31T17:00:00.000Z",
    due_date: "2024-03-31T17:00:00.000Z",
    started_at: "2024-01-31T17:00:00.000Z",
    finished_at: "2024-03-31T17:00:00.000Z",
    description: "desc",
    pic_title: "manager",
    progress: 100,
    pic: "Manager",
    spv: "Director",
    division: "Acc & Purchase", // Divisi pic
    branch: "PT. RES", // Branch pic
  },
  {
    pic_id: 27,
    spv_id: 33,
    task_type: "Single",
    task_title: "Stok Opname Mingguan",
    priority: "High",
    status: "Open",
    iteration: "Insidental",
    start_date: "2024-03-08T17:00:00.000Z",
    due_date: "2024-12-30T17:00:00.000Z",
    description: "desc",
    pic_title: "manager",
    progress: 0,
    pic: "Supervisor",
    spv: "Manager",
    division: "Acc & Purchase", // Divisi pic
    branch: "PT. RES", // Branch pic
  },
  {
    pic_id: 39,
    spv_id: 27,
    task_type: "Single",
    task_title: "Membuat laporan mingguan",
    priority: "High",
    status: "In-progress",
    iteration: "Insidental",
    start_date: "2024-03-09T17:00:00.000Z",
    due_date: "2024-12-30T17:00:00.000Z",
    started_at: "2024-03-09T17:00:00.000Z",
    description: "desc",
    pic_title: "manager",
    progress: 20,
    pic: "Operator",
    spv: "Supervisor",
    division: "Acc & Purchase", // Divisi pic
    branch: "PT. RES", // Branch pic
  },
  {
    pic_id: 37,
    spv_id: 28,
    task_type: "Single",
    task_title: "Relokasi Outlet SPJ2",
    priority: "important",
    status: "Open",
    iteration: "Insidental",
    start_date: "2024-03-24T17:00:00.000Z",
    due_date: "2024-12-30T17:00:00.000Z",
    description: "desc",
    pic_title: "operator",
    progress: 0,
    pic: "Sri wahyuni",
    spv: "Komariah Santi",
    division: "Marketing", 
    branch: "Produksi RES", 
  },
];

const taskSeed = async () => {
    try {
        for (let task of tasks) {
            // Mencari atau membuat divisi baru jika belum ada
            const branch = await prisma.branch.findUnique({ where: { b_name: task.branch } });
            const division = await prisma.division.findUnique({ where: { divisionName: task.division } });

            // Mendapatkan division_id dan branch_id
            console.log(division)
            console.log(branch)
            const division_id = division.id;
            const branch_id = branch.id;

            // Menambahkan division_id dan branch_id ke task
            task.division_id = division_id;
            task.branch_id = branch_id;

            // Mencari task yang sudah ada berdasarkan task_title, pic_id, dan spv_id
            const existingTask = await prisma.task.findFirst({
                where: {
                    task_title: task.task_title,
                    // pic_id: task.pic_id,
                    // spv_id: task.spv_id,
                },
            });

            // Jika task belum ada, maka simpan ke database
            if (!existingTask) {
                await prisma.task.create({ data: task });
            }
        }
    } catch (err) {
        console.log(err);
    }
};

module.exports = { taskSeed };
