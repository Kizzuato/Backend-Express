const express = require("express");
const multer = require("multer");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    // Dapatkan tanggal dan waktu saat ini
    const now = new Date();
    const date = now.toISOString().slice(0, 10);
    const time = now.toTimeString().slice(0, 8).replace(/:/g, "-");

    // Tambahkan tanggal dan waktu ke nama file
    const filename = `${date}_${time}_${file.originalname}`;

    cb(null, filename);
  },
});
const upload = multer({ storage: storage });

const {
  getAllTask,
  AcceptTaskServe,
  updateTaskServ,
  createTaskServ,
  getAllTaskServ,
  getAllWaitedTaskServ,
  getAllDeletedTaskServ,
  getTaskByIdServ,
  storeToExcel,
  createManyTaskServ,
  getLateTaskServe,
  checkLateTaskServe
} = require("./taskServ");
const { auth } = require("../middleware/auth.middleware");

const router = express.Router();

// Router untuk mengedit task
router.put(
  "/file_hasil/:strid",
  upload.single("file_hasil"),
  async (req, res) => {
    try {
      let nama_file = null;

      if (req.file) {
        nama_file = req.file.originalname;
      }

      let filename = null;

      if (nama_file !== null) {
        const now = new Date();
        const date = now.toISOString().slice(0, 10);
        const time = now.toTimeString().slice(0, 8).replace(/:/g, "-");
        filename = `${date}_${time}_${nama_file}`;
      }

      const { strid } = req.params;
      const id = parseInt(strid);

      const { fileName } = req.body;

      // Process the data and files as needed
      const data = {
        file_hasil: filename || fileName,
      };

      const response = await updateTaskServ(id, data);

      return res.status(200).json(response);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Terjadi kesalahan pada server" });
    }
  }
);

router.put("/acc/:id", async (req, res) => {
  const { id } = req.params;
  const { pic_id, status, pic_rating, approved_at } = req.body;

  try {
    const data = {
      pic_id,
      pic_rating,
      status,
      approved_at,
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
  const {
    pic_id,
    spv_id,
    branch_id,
    division_id,
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
    branch,
    division,
    approved_at,
    approved_by,
    started_at,
    started_by,
    deleted_at,
    finished_at,
    finished_by,
    status,
    progress,
    file_attachment,
    created_at,
    edited_at,
    pic_rating,
  } = req.body;

  try {
    const data = {
      pic_id,
      spv_id,
      branch_id,
      division_id,
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
      branch,
      division,
      pic_rating,
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

router.post("/new", upload.single("bukti_tayang"), async (req, res) => {
  try {
    let nama_file = null;

    if (req.file) {
      nama_file = req.file.originalname;
    }

    let filename = null;

    if (nama_file !== null) {
      const now = new Date();
      const date = now.toISOString().slice(0, 10);
      const time = now.toTimeString().slice(0, 8).replace(/:/g, "-");
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
      fileName,
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
      files: filename || fileName,
    };

    const response = await createTaskServ(data);

    return res.status(200).json(response);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Terjadi kesalahan pada server" });
  }
});

router.post("/many-new", async (req, res) => {
  try {

    const data = req.body;
    // console.log("🚀 ~ router.post ~ data:", data)
    const response = await createManyTaskServ(data);

    return res.status(200).json(response);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Terjadi kesalahan pada server" });
  }
});

//  Router untuk mengambil semua task yang sudah di acc di database
router.get("/all", async (req, res) => {
  try {
    const { status, search, startDate, dueDate } = req.query;
    const { pic, spv, division, branch, title } = req.headers;
    const data = {pic, spv, division, branch, title};
    const response = await getAllTaskServ(
      search,
      status,
      data,
      startDate,
      dueDate
    );
    // console.log("🚀 ~ router.get ~ response:", response)
    return res.status(200).json(response);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Terjadi kesalahan pada server" });
  }
});

router.get("/", async (req, res) => {
  try {
    // const { status, search, startDate, dueDate } = req.query;
    // const { pic, spv, division, branch } = req.headers;
    // const data = {pic, spv, division, branch};
    // console.log("division", division);
    // console.log("🚀 ~ router.get ~ data:"  , data)
    // console.log("Branch", branch);
    // console.log("status", status);
    // console.log("search", search);
    // console.log("spv", spv);
    // console.log("search", search);
    // console.log("startDate", startDate);
    // console.log("dueDate", dueDate);
    const response = await getAllTask(
      // search,
      // status,
      // data,
      // startDate,
      // dueDate
    );
    return res.status(200).json(response);
    // console.log("🚀 ~ router.get ~ response:", response)
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Terjadi kesalahan pada server" });
  }
});

router.get("/waited", async (req, res) => {
  try {
    const { status, search, startDate, dueDate } = req.query;
    const { pic, spv, pic_id, spv_id, division, branch } = req.headers;
    const data = {pic, spv, division, pic_id, spv_id, branch};
    console.log("🚀 ~ router.get ~ data:", data)
    // console.log("pic", pic);
    // console.log("spv", spv);
    // console.log("search", search);
    // console.log("startDate", startDate);
    // console.log("dueDate", dueDate);
    const response = await getAllWaitedTaskServ(
      search,
      status,
      data,
      startDate,
      dueDate
    );
    return res.status(200).json(response);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Terjadi kesalahan pada server" });
  }
});

router.get("/deleted", async (req, res) => {
  try {
    const { status, search, startDate, dueDate } = req.query;
    const { pic, spv, division, branch } = req.headers;
    const data = {pic, spv, division, branch}
    // console.log("pic", pic);
    // console.log("spv", spv);
    // console.log("startDate", startDate);
    // console.log("dueDate", dueDate);
    const response = await getAllDeletedTaskServ(
      search,
      status,
      data,
      startDate,
      dueDate
    );
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

router.get("/checker", async (req, res) => {
  try {
    const response = await checkLateTaskServe();
    return res.status(200).json(response);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "terjadi kesalahan pada server"});
  }
})

router.get("/late-notification/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const role = res.headers;
    // console.log(id, " dicek")
    const response = await getLateTaskServe(id, role);
    // console.log("🚀 ~ router.get ~ response:", response)
    return res.status(200).json(response);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "terjadi kesalahan pada server"});
  }
})

module.exports = router;
