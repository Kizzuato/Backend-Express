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
  AcceptTaskServe,
  updateTaskServ,
  createTaskServ,
  getAllTaskServ,
  getAllWaitedTaskServ,
  getAllDeletedTaskServ,
  getTaskByIdServ,
  storeToExcel,
} = require("./taskServ");

const router = express.Router();

// Router untuk mengedit task
router.put("/acc/:id", async (req, res) => {
  const { id } = req.params;
  const {pic, status, pic_rating, approved_at } = req.body;

  try {
    const data = {
      pic,
      pic_rating,
      status,
      approved_at
    };
    const response = await AcceptTaskServe(id, data);

    return res.status(200).json(response);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Terjadi kesalahan pada server" });
  }
});

// Router untuk mengedit task
router.put("/edit/:id", async (req, res) => {
  const taskId = req.params.id;
  const { pic_id, spv_id, task_type, task_title, priority, iteration, start_date, due_date, description, pic_title, pic, spv, approved_at, approved_by, started_at, started_by, deleted_at, finished_at, finished_by, status, progress, file_attachment, created_at, edited_at, pic_rating } = req.body;

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
      pic_rating,
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
      finished_at,
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
  try {
    let nama_file = null;

    if (req.file) {
      nama_file = req.file.originalname;
    }

    let filename = null;

    if (nama_file !== null) {
      const now = new Date();
      const date = now.toISOString().slice(0, 10);
      const time = now.toTimeString().slice(0, 8).replace(/:/g, '-');
      filename = `${date}_${time}_${nama_file}`;
    }

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
      fileName
    } = req.body;

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
router.get("/all", async (req, res) => {
  try {
    const { status, search } = req.query;
    const { pic, spv, division } = req.headers;
    console.log("division", division);
    console.log("status", status);
    console.log("search", search);
    console.log("pic", pic);
    console.log("spv", spv);
    const response = await getAllTaskServ(search, status, pic, spv, division);
    return res.status(200).json(response);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Terjadi kesalahan pada server" });
  }
});

router.get("/waited", async (req, res) => {
  try {
    const { pic, spv, division } = req.headers;
    console.log("pic", pic);
    console.log("spv", spv);
    const response = await getAllWaitedTaskServ(pic, spv, division);
    return res.status(200).json(response);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Terjadi kesalahan pada server" });
  }
});

router.get("/deleted", async (req, res) => {
  try {
    const { pic, spv, division } = req.headers;
    // console.log("pic", pic);
    // console.log("spv", spv);
    const response = await getAllDeletedTaskServ(pic, spv, division);
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
