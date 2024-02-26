const express = require("express");
const multer = require("multer");
const path = require("path");

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

  const {
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
    finished_at,
    finished_by,
    status,
    progress,
    file_attachment,
    created_at,
    edited_at,
    deleted_at,
  } = req.body;

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
      finished_at,
      finished_by,
      status,
      progress,
      file_attachment,
      created_at,
      edited_at,
      deleted_at,
    };

    const response = await updateTaskServ(taskId, data);

    return res.status(200).json(response);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Terjadi kesalahan pada server" });
  }
});

// Set up storage for uploaded files
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/"); // Save files to the 'uploads' folder
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(
      null,
      file.fieldname + "-" + uniqueSuffix + path.extname(file.originalname)
    );
  },
});

// Declare 'upload' after setting up storage
const upload = multer({ storage: storage });

router.post("/new", upload.array("files[]", 5), async (req, res) => {
  try {
    const {
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
    } = req.body;
    const files = req.files; // Menyimpan file yang di-upload oleh multer

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
      files,
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
    const response = await getAllDirectorTaskServ();
    return res.status(200).json(response);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Terjadi kesalahan pada server" });
  }
});

//  Router untuk mengambil semua task yang sudah di acc di database
router.get("/all/manager", async (req, res) => {
  try {
    const response = await getAllManagerTaskServ();
    return res.status(200).json(response);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Terjadi kesalahan pada server" });
  }
});

//  Router untuk mengambil semua task yang sudah di acc di database
router.get("/all/supervisor", async (req, res) => {
  try {
    const response = await getAllSupervisorTaskServ();
    return res.status(200).json(response);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Terjadi kesalahan pada server" });
  }
});

//  Router untuk mengambil semua task yang sudah di acc di database
router.get("/all/operator", async (req, res) => {
  try {
    const response = await getAllOperatorTaskServ();
    return res.status(200).json(response);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Terjadi kesalahan pada server" });
  }
});

//  Router untuk mengambil semua task yang sudah di acc di database
router.get("/all", async (req, res) => {
  try {
    const response = await getAllTaskServ();
    return res.status(200).json(response);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Terjadi kesalahan pada server" });
  }
});

//  Router untuk mengambil semua task yang belum di acc di database
router.get("/waited/director", async (req, res) => {
  try {
    const response = await getAllWaitedDirectorTaskServ();
    return res.status(200).json(response);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Terjadi kesalahan pada server" });
  }
});

//  Router untuk mengambil semua task yang belum di acc di database
router.get("/waited/manager", async (req, res) => {
  try {
    const response = await getAllWaitedManagerTaskServ();
    return res.status(200).json(response);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Terjadi kesalahan pada server" });
  }
});

//  Router untuk mengambil semua task yang belum di acc di database
router.get("/waited/supervisor", async (req, res) => {
  try {
    const response = await getAllWaitedSupervisorTaskServ();
    return res.status(200).json(response);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Terjadi kesalahan pada server" });
  }
});

//  Router untuk mengambil semua task yang belum di acc di database
router.get("/waited/operator", async (req, res) => {
  try {
    const response = await getAllWaitedOperatorTaskServ();
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
    const response = await getAllManagerDeletedTaskServ();
    return res.status(200).json(response);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Terjadi kesalahan pada server" });
  }
});

//  Service untuk mengambil semua histori task yang sudah dihapus
router.get("/deleted/supervisor", async (req, res) => {
  try {
    const response = await getAllSupervisorDeletedTaskServ();
    return res.status(200).json(response);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Terjadi kesalahan pada server" });
  }
});

//  Service untuk mengambil semua histori task yang sudah dihapus
router.get("/deleted/operator", async (req, res) => {
  try {
    const response = await getAllOperatorDeletedTaskServ();
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
