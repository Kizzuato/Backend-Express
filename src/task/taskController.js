const express = require("express");
const multer = require("multer");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/')
  },
  filename: function (req, file, cb) {
    // Dapatkan tanggal dan waktu saat ini
    const now = new Date();
    const date = now.toISOString().slice(0, 10);
    const time = now.toTimeString().slice(0, 8).replace(/:/g, '-');

    // Tambahkan tanggal dan waktu ke nama file
    const filename = `${date}_${time}_${file.originalname}`;

    cb(null, filename);
  }
});
const upload = multer({ storage: storage });


const {
  updateTaskServ,
  createTaskServ,

  getAllDirectorTaskServ,
  getAllManagerTaskServ,
  getAllSupervisorTaskServ,
  getAllOperatorTaskServ,
  getAllTaskServ,

  getAllWaitedTaskServ,
  getAllWaitedDirectorTaskServ,
  getAllWaitedManagerTaskServ,
  getAllWaitedSupervisorTaskServ,
  getAllWaitedOperatorTaskServ,

  getAllDirectorDeletedTaskServ,
  getAllManagerDeletedTaskServ,
  getAllSupervisorDeletedTaskServ,
  getAllOperatorDeletedTaskServ,
  getAllDeletedTaskServ,

  getTaskByIdServ,
  getTaskByEmailServ,
} = require("./taskServ");

const router = express.Router();

// Router untuk mengedit task
router.put("/edit/:id", async (req, res) => {
  const taskId = req.params.id;
  const { pic_id, spv_id, task_type, task_title, priority, iteration, start_date, due_date, description, pic_title, pic, spv, approved_at, approved_by, started_at, started_by, deleted_at, finished_by, status, progress, file_attachment, created_at, edited_at } = req.body;

  try {
    const data = {
      pic_id,
      spv_id,
      task_type,
      task_title,
      priority,
      iteration,
      start_date,
      due_date,
      description,
      pic_title,
      pic,
      spv,
      approved_at,
      approved_by,
      started_at,
      started_by,
      deleted_at,
      finished_by,
      status,
      progress,
      file_attachment,
      created_at,
      edited_at,
    };
    const response = await updateTaskServ(taskId, data);

    return res.status(200).json(response);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Terjadi kesalahan pada server" });
  }
});


router.post("/new", upload.single('bukti_tayang'), async (req, res) => {
  let nama_file
  try {
    if(req.file) nama_file = req.file.originalname;
    const now = new Date();
    const date = now.toISOString().slice(0, 10);
    const time = now.toTimeString().slice(0, 8).replace(/:/g, '-');

    // Tambahkan tanggal dan waktu ke nama file
    const filename = `${date}_${time}_${nama_file}`;

    const { pic_id, spv_id, task_type, task_title, priority, iteration, status, start_date, due_date, description, pic_title, created_by, pic, spv, fileName } = req.body;

    // Process the data and files as needed
    const data = {
      pic_id,
      spv_id,
      task_type,
      task_title,
      priority,
      iteration,
      status,
      start_date,
      due_date,
      description,
      pic_title,
      created_by,
      pic,
      spv,
      files: filename || fileName
    };

    const response = await createTaskServ(data);

    return res.status(200).json(response);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Terjadi kesalahan pada server" });
  }
});

//  Router untuk mengambil semua task yang sudah di acc di database
router.get("/all/director", async (req, res) => {
  try {
    const { status } = req.query;
    const response = await getAllDirectorTaskServ(status);
    return res.status(200).json(response);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Terjadi kesalahan pada server" });
  }
});

//  Router untuk mengambil semua task yang sudah di acc di database
router.get("/all/manager", async (req, res) => {
  try {
    const response = await getAllManagerTaskServ(req.query);
    return res.status(200).json(response);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Terjadi kesalahan pada server" });
  }
});

//  Router untuk mengambil semua task yang sudah di acc di database
router.get("/all/supervisor", async (req, res) => {
  try {
    const { status, search } = req.query;
    const response = await getAllSupervisorTaskServ(status, search);
    return res.status(200).json(response);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Terjadi kesalahan pada server" });
  }
});

//  Router untuk mengambil semua task yang sudah di acc di database
router.get("/all/operator", async (req, res) => {
  try {
    const { status } = req.query;
    const response = await getAllOperatorTaskServ(status);
    return res.status(200).json(response);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Terjadi kesalahan pada server" });
  }
});

//  Router untuk mengambil semua task yang sudah di acc di database
router.get("/all", async (req, res) => {
  try {
    const { status } = req.query;
    const response = await getAllTaskServ(status);
    return res.status(200).json(response);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Terjadi kesalahan pada server" });
  }
});

//  Router untuk mengambil semua task yang belum di acc di database
router.get("/waited/director", async (req, res) => {
  try {
    const response = await getAllWaitedDirectorTaskServ(req.query);
    return res.status(200).json(response);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Terjadi kesalahan pada server" });
  }
});

//  Router untuk mengambil semua task yang belum di acc di database
router.get("/waited/manager", async (req, res) => {
  try {
    const response = await getAllWaitedManagerTaskServ(req.query);
    return res.status(200).json(response);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Terjadi kesalahan pada server" });
  }
});

//  Router untuk mengambil semua task yang belum di acc di database
router.get("/waited/supervisor", async (req, res) => {
  try {
    const response = await getAllWaitedSupervisorTaskServ(req.query);
    return res.status(200).json(response);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Terjadi kesalahan pada server" });
  }
});

//  Router untuk mengambil semua task yang belum di acc di database
router.get("/waited/operator", async (req, res) => {
  try {
    const response = await getAllWaitedOperatorTaskServ(req.query);
    return res.status(200).json(response);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Terjadi kesalahan pada server" });
  }
});

//  Router untuk mengambil semua task yang belum di acc di database
router.get("/waited", async (req, res) => {
  try {
    const response = await getAllWaitedTaskServ();
    return res.status(200).json(response);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Terjadi kesalahan pada server" });
  }
});

//  Service untuk mengambil semua histori task yang sudah dihapus
router.get("/deleted/director", async (req, res) => {
  try {
    const response = await getAllDirectorDeletedTaskServ();
    return res.status(200).json(response);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Terjadi kesalahan pada server" });
  }
});

//  Service untuk mengambil semua histori task yang sudah dihapus
router.get("/deleted/manager", async (req, res) => {
  try {
    const response = await getAllManagerDeletedTaskServ(req.query);
    return res.status(200).json(response);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Terjadi kesalahan pada server" });
  }
});

//  Service untuk mengambil semua histori task yang sudah dihapus
router.get("/deleted/supervisor", async (req, res) => {
  try {
    const response = await getAllSupervisorDeletedTaskServ(req.query);
    return res.status(200).json(response);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Terjadi kesalahan pada server" });
  }
});

//  Service untuk mengambil semua histori task yang sudah dihapus
router.get("/deleted/operator", async (req, res) => {
  try {
    const response = await getAllOperatorDeletedTaskServ(req.query);
    return res.status(200).json(response);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Terjadi kesalahan pada server" });
  }
});

//  Service untuk mengambil semua histori task yang sudah dihapus
router.get("/deleted", async (req, res) => {
  try {
    const response = await getAllDeletedTaskServ();
    return res.status(200).json(response);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Terjadi kesalahan pada server" });
  }
});

//  Service untuk mengambil task berdasarkan Id
router.get("/get-by-id/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const response = await getTaskByIdServ(id);
    return res.status(200).json(response);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Terjadi kesalahan pada server" });
  }
});

//  Service untuk mengambil task berdasarkan Id
router.get("/get-by-email/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const response = await getTaskByIdServ(id);
    return res.status(200).json(response);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Terjadi kesalahan pada server" });
  }
});

module.exports = router;
