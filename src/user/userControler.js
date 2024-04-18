const jwt = require('jsonwebtoken');
const express = require("express");
const {
  createUserServ,
  LoginUser,
  getAllUserServ,
  deleteUserServ,
  getUserByIdServ,
  getUserByDivision,
  updateUserServ,
  changePassword
} = require("./userServ");
const { route } = require("./userControler");
const { success, error } = require("../utils/response.utils");

const router = express.Router();

router.post("/register", async (req, res) => {
  const { name, email, title, password, repassword, branch_id, division_id, position_id } = req.body;

  if (password !== repassword) {
    return res.status(400).json({ message: "Password tidak sama" });
  }

  try {
    const data = { name, email, password, title, branch_id, division_id, position_id };
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
  const { email, password, branch } = req.body;
  const token = null;
  // console.log("🚀 ~ router.post ~ token:", token)
  try {
    const response = await LoginUser(email, password, branch, token);
    return res.status(response.status).json(response);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Terjadi kesalahan pada server" });
  }
});

router.get("/division", async (req, res) => {
  try {
    const { division } = req.query;
    const data = {division};
    console.log("Data : ", data);
    const response = await getUserByDivision(division);
    return res.status(200).json(response);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Terjadi kesalahan pada server" });
  }
});

router.get("/all", async (req, res) => {
  try {
    const { division, branch, title } = req.headers;
    const data = {division, branch, title };
    console.log("🚀 ~ router.get ~ data:", data)
    const response = await getAllUserServ(data);
    // console.log("🚀 ~ router.get ~ response:", response)
    return res.status(200).json(response);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Terjadi kesalahan pada server" });
  }
});

router.post('/refreshToken', (req, res) => {
  const oldToken = req.body.oldToken;

  // Periksa validitas token yang lama
  jwt.verify(oldToken, 'secret_key', (err, decoded) => {
    if (err) {
      // Jika token tidak valid, kembalikan respons dengan status 401 Unauthorized
      return res.status(401).json({ message: 'Invalid token' });
    }

    // Jika token valid, buat token yang baru
    const newToken = jwt.sign({ /* data tambahan */ }, 'secret_key', { expiresIn: '1h' });

    // Kembalikan token baru sebagai respons
    res.status(200).json({ newToken });
  });
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
  try {
    const updatedUser = await updateUserServ(+req.params.id, req.body)
    return success(res, `User ${updatedUser.u_name} Updated Successfully`, updateUserServ)
  } catch (err) {
    return error(res, err.message)
  }
})

router.put('/update-password/:id/:forced?', async (req, res) => {
  const { newPassword } = req.body
  try {
    const updatePassword = await changePassword(req.params.id, newPassword)
    return success(res, `User ${updatePassword.u_name} Password Changed Successfully`, updatePassword)
  } catch (err) {
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
