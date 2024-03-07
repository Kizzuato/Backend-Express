const { PrismaClient } = require("@prisma/client");
const { use } = require("../../src/task/taskController");
const prisma = new PrismaClient();
const tasks = [
    {
        pic_id: "",
        spv_id: "",
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
        pic_title: "Manager",
        progress: 100,
        pic: "user",
        spv: "Novi Handayani"
    },
    {
        pic_id: "",
        spv_id: "",
        task_type: "Single",
        task_title: "Stok Opname Mingguan",
        priority: "High",
        status: "Open",
        iteration: "Insidental",
        start_date: "2024-03-08T17:00:00.000Z",
        due_date: "2024-12-30T17:00:00.000Z",
        description: "desc",
        pic_title: "Manager",
        progress: 0,
        pic: "user",
        spv: "Novi Handayani"
    },
    {
        pic_id: "",
        spv_id: "",
        task_type: "Single",
        task_title: "Membuat laporan mingguan",
        priority: "High",
        status: "In-progress",
        iteration: "Insidental",
        start_date: "2024-03-09T17:00:00.000Z",
        due_date: "2024-12-30T17:00:00.000Z",
        started_at: "2024-03-09T17:00:00.000Z",
        description: "desc",
        pic_title: "Manager",
        progress: 20,
        pic: "user",
        spv: "Novi Handayani"
    },
    {
        pic_id: "",
        spv_id: "",
        task_type: "Single",
        task_title: "Relokasi Outlet SPJ2",
        priority: "important",
        status: "Open",
        iteration: "Insidental",
        start_date: "2024-03-24T17:00:00.000Z",
        due_date: "2024-12-30T17:00:00.000Z",
        description: "desc",
        pic_title: "Operator",
        progress: 0,
        pic: "Ara ariyanti",
        spv: "Ikromullah"
    },
    {
        pic_id: "",
        spv_id: "",
        task_type: "Single",
        task_title: "Kontrol kebersihan booth dan area outlet",
        priority: "Normal",
        status: "In-progress",
        iteration: "Insidental",
        start_date: "2024-03-03T17:00:00.000Z",
        due_date: "2024-12-30T17:00:00.000Z",
        started_at: "2024-03-03T17:00:00.000Z",
        description: "desc",
        pic_title: "Supervisor",
        progress: 50,
        pic: "M.Azuari Rahman",
        spv: "user"
    },
    {
        pic_id: "",
        spv_id: "",
        task_type: "Single",
        task_title: "Rencana Pembayaran",
        priority: "Normal",
        status: "In-progress",
        iteration: "Insidental",
        start_date: "2024-03-07T17:00:00.000Z",
        due_date: "2024-12-28T17:00:00.000Z",
        started_at: "2024-03-07T17:00:00.000Z",
        description: "desc",
        pic_title: "Supervisor",
        progress: 65,
        pic: "Ikromullah",
        spv: "user"
    },
    {
        pic_id: "",
        spv_id: "",
        task_type: "Single",
        task_title: "Melaksanakan kegiatan jumsih",
        priority: "High",
        status: "In-progress",
        iteration: "Insidental",
        start_date: "2024-03-08T17:00:00.000Z",
        due_date: "2024-03-09T17:00:00.000Z",
        started_at: "2024-03-08T17:00:00.000Z",
        description: "desc",
        pic_title: "Supervisor",
        progress: 77,
        pic: "Komariah Santi",
        spv: "user"
    },
    {
        pic_id: "",
        spv_id: "",
        task_type: "Single",
        task_title: "Review Inputan Kas Bank",
        priority: "High",
        status: "In-progress",
        iteration: "Insidental",
        start_date: "2024-03-11T17:00:00.000Z",
        due_date: "2024-12-09T17:00:00.000Z",
        started_at: "2024-03-11T17:00:00.000Z",
        description: "desc",
        pic_title: "Supervisor",
        progress: 67,
        pic: "M.Azuari Rahman",
        spv: "user"
    },
    {
        pic_id: "",
        spv_id: "",
        task_type: "Single",
        task_title: "Review Inputan Kas Bank",
        priority: "High",
        status: "In-progress",
        iteration: "Insidental",
        start_date: "2024-03-04T17:00:00.000Z",
        due_date: "2024-12-30T17:00:00.000Z",
        started_at: "2024-03-04T17:00:00.000Z",
        description: "desc",
        pic_title: "Operator",
        progress: 75,
        pic: "Sri Wahyuni",
        spv: "Aulia Novianty"
    },
    {
        pic_id: "",
        spv_id: "",
        task_type: "Single",
        task_title: "Kontrol ATK & Obat",
        priority: "High",
        status: "In-progress",
        iteration: "Insidental",
        start_date: "2024-03-11T17:00:00.000Z",
        due_date: "2024-12-30T17:00:00.000Z",
        started_at: "2024-03-11T17:00:00.000Z",
        description: "desc",
        pic_title: "Operator",
        progress: 89,
        pic: "Sri Wahyuni",
        spv: "Aulia Novianty"
    },
    {
        pic_id: "",
        spv_id: "",
        task_type: "Single",
        task_title: "Meeting Bulanan Cabang Onic",
        priority: "High",
        status: "Open",
        iteration: "Insidental",
        start_date: "2024-03-05T17:00:00.000Z",
        due_date: "2024-12-25T17:00:00.000Z",
        description: "desc",
        pic_title: "Operator",
        progress: 0,
        pic: "Sanusi",
        spv: "M.Azuari Rahman"
    },
    {
        pic_id: "",
        spv_id: "",
        task_type: "Single",
        task_title: "Meeting Bulanan Cabang",
        priority: "High",
        status: "Close",
        iteration: "Insidental",
        start_date: "2024-03-05T17:00:00.000Z",
        due_date: "2024-12-25T17:00:00.000Z",
        started_at: "2024-03-05T17:00:00.000Z",
        finished_at: "2024-03-25T17:00:00.000Z",
        description: "desc",
        pic_title: "Operator",
        progress: 100,
        pic: "Entin",
        spv: "Aulia Novianty"
    },
    {
        pic_id: "",
        spv_id: "",
        task_type: "Single",
        task_title: "Menata Gudang Mingguan",
        priority: "High",
        status: "Close",
        iteration: "Insidental",
        start_date: "2024-03-07T17:00:00.000Z",
        due_date: "2024-12-26T17:00:00.000Z",
        started_at: "2024-03-07T17:00:00.000Z",
        finished_at: "2024-03-26T17:00:00.000Z",
        description: "desc",
        pic_title: "Operator",
        progress: 100,
        pic: "Sri Wahyuni",
        spv: "Aulia Novianty"
    },
    {
        pic_id: "",
        spv_id: "",
        task_type: "Single",
        task_title: "Pengecekan kelayakan peralatan produksi",
        priority: "Normal",
        status: "Close",
        iteration: "Insidental",
        start_date: "2024-03-07T17:00:00.000Z",
        due_date: "2024-12-26T17:00:00.000Z",
        started_at: "2024-03-07T17:00:00.000Z",
        finished_at: "2024-03-26T17:00:00.000Z",
        description: "desc",
        pic_title: "Operator",
        progress: 100,
        pic: "Sanusi",
        spv: "Komariah Santi"
    },
]

const taskSeed = async (userData) => {
    try {
        for (let task of tasks) {
            // Melakukan pengecekan apakah task dengan karakteristik tertentu sudah ada atau belum
            const existingTask = await prisma.task.findFirst({
                where: {
                    task_title: task.task_title,
                    pic: task.pic,
                    spv: task.spv,
                    // Tambahkan kondisi lain jika diperlukan
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
