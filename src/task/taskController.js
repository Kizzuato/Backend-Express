const express = require("express");
const {
  updateTaskServ,
  createTaskServ,
  getAllTaskServ,
  getAllWaitedTaskServ,
  getAllDeletedTaskServ,
  getTaskByIdServ,
} = require("./taskServ");

const router = express.Router();

// Router untuk mengedit task
router.put("/edit", async (req, res) => {
  const {
    task_type,
    task_title,
    priority,
    Status,
    start_date,
    due_date,
    description,
    pic,
    spv,
  } = req.body;

  try {
    const data = {
      task_type,
      task_title,
      priority,
      Status,
      start_date,
      due_date,
      description,
      pic,
      spv,
    };

    const response = await updateTaskServ(data);

    return res.status(200).json(response);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Terjadi kesalahan pada server" });
  }
});

// Router untuk membuat task baru
router.post("/new", async (req, res) => {
  const {
    task_type,
    task_title,
    priority,
    Status,
    start_date,
    due_date,
    description,
    pic,
    spv,
  } = req.body;

  try {
    const data = {
      task_type,
      task_title,
      priority,
      Status,
      start_date,
      due_date,
      description,
      pic,
      spv,
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
    const response = await getAllTaskServ();
    return res.status(200).json(response);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Terjadi kesalahan pada server" });
  }
});

//  Router untuk mengambil semua task yang belum di acc di database
router.get("/all/waited", async (req, res) => {
  try {
    const response = await getAllWaitedTaskServ();
    return res.status(200).json(response);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Terjadi kesalahan pada server" });
  }
});

//  Service untuk mengambil semua histori task yang sudah dihapus
router.get("/all/deleted", async (req, res) => {
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

module.exports = router;
