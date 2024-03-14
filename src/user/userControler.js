const express = require("express");
const {
  createUserServ,
  LoginUser,
  getAllUserServ,
  deleteUserServ,
  getUserByIdServ,
  updateUserServ
} = require("./userServ");
const { route } = require("./userControler");
const { error, success } = require("../Notification/notificationController");

const router = express.Router();

router.post("/register", async (req, res) => {
  const { name, email, title, password, repassword, divisi } = req.body;

  if (password !== repassword) {
    return res.status(400).json({ message: "Password tidak sama" });
  }

  try {
    const data = {
      name,
      email,
      password,
      title,
      divisi
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
    return res.status(response.status).json(response);
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
    const response = await deleteUserServ(+id);
    return res.status(200).json("Deleted");
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Terjadi kesalahan pada server" });
  }
});

router.put('/update-user/:id', async (req, res) => {
  try{
    const updatedUser = await updateUserServ(+req.params.id, req.body)
    return success(res, `User ${updatedUser.u_name} Updated Successfully`, updateUserServ)
  }catch(err){
    return error(res, err.message)
  }
})

router.get("/get-by-id/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const response = await getUserByIdServ(+id);
    return res.status(200).json(response);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Terjadi kesalahan pada server" });
  }
});

module.exports = router;
