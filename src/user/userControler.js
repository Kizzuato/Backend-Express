const express = require("express");
const {
  createUserServ,
  LoginUser,
  getAllUserServ,
  deleteUserServ,
} = require("./userServ");

const router = express.Router();

router.post("/register", async (req, res) => {
  const { name, email, password, repassword } = req.body;

  if (password !== repassword) {
    return res.status(400).json({ message: "Password tidak sama" });
  }

  try {
    const data = {
      name,
      email,
      password,
    };

    const response = await createUserServ(data);

    if (response.error) {
      return res.status(500).json({ message: response.message });
    }

    return res.status(200).json(response);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Terjadi kesalahan pada server" });
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const response = await LoginUser(email, password);
    return res.status(response.status).json(response.data);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Terjadi kesalahan pada server" });
  }
});

router.get("/all", async (req, res) => {
  try {
    const response = await getAllUserServ();
    return res.status(200).json(response);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Terjadi kesalahan pada server" });
  }
});

router.delete("/delete-user/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const response = await deleteUserServ(id);
    return res.status(200).json("Deleted");
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Terjadi kesalahan pada server" });
  }
});

module.exports = router;
