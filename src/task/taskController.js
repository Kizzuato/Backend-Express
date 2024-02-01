const express = require("express");
const { createTaskServ, getAllTaskserv, getTaskByIdServ } = require("./taskServ");

const router = express.Router();

router.post("/new", async (req, res) => {
    const {
        task_type,
        task_title,
        priority,
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

router.get("/all", async (req, res) => {
    try {
      const response = await getAllTaskserv();
      return res.status(200).json(response);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Terjadi kesalahan pada server" });
    }
  });

router.get("/get-by-id/:id", async (req, res) => {
    try {
        const {id} = req.params
      const response = await getTaskByIdServ(id);
      return res.status(200).json(response);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Terjadi kesalahan pada server" });
    }
  });

module.exports = router;
