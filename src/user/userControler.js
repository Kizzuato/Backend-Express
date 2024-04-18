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
const { emailUsed } = require('./userRepo');
const Emails = require('../email/email');
const branchRepo = require('../Branch/branchRepo')
const divisiRepo = require('../Division/divisiRepo')
const { encrypt, decrypt } = require('../utils/encryption');

const router = express.Router();

router.get('/helper-register', async (req, res) =>  {
  try{
    const brances = await branchRepo.getAll()
    const division = await divisiRepo.getAll()
    return  success(res, 'Helper running', { brances, division })
  }catch(err){
    return error(res, err.message)
  }
})

router.post("/register", async (req, res) => {
  try {
    const realPassword = req.body.password
    const response = await createUserServ(req.body);
    const dataToStore = {
      email: response.email,
      password: realPassword,
      branch: response.branch
    }
    const encryptedData = encrypt(JSON.stringify(dataToStore))
    const email = new Emails('Bubur Onic Admin', response.email, 'Email Verified', '')
    email.sendEmailTemplate({
      email: response.email,
      password: realPassword,
      loginLink: `${process.env.FRONTEND_URL}/auth/${encryptedData}`
    })
    return success(res, 'Registered successfully, please login', response)
  } catch (err) {
    return error(res, err.message)
  }
});

// router.get('/verif-email/', async (req, res) => {
//   try{
//     const generateOTP = () => {      
//       var min_value = Math.pow(10, 5);
//       var max_value = Math.pow(10, 6) - 1;
//       return Math.floor(Math.random() * (max_value - min_value + 1)) + min_value;
//   }
//   const otp = generateOTP()

//   }catch(err){
//     return error(res, err.message)
//   }
// })

router.post("/login/:encryptedData?", async (req, res) => {
  let { email, password, branch } = req.body
  if (req.params.encryptedData != undefined) {
    const decryptedData = JSON.parse(decrypt(req.params.encryptedData))
    email = decryptedData.email,
    password = decryptedData.password,
    branch = decryptedData.branch
  }
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
    const data = { division };
    // console.log("Data : ", data);
    const response = await getUserByDivision(division);
    return res.status(200).json(response);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Terjadi kesalahan pada server" });
  }
});

router.get("/all", async (req, res) => {
  try {
    const { division, branch } = req.headers;
    const data = { division, branch };
    console.log("🚀 ~ router.get ~ data:", data)
    const response = await getAllUserServ(data);
    // console.log("🚀 ~ router.get ~ response:", response)
    return res.status(200).json(response);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Terjadi kesalahan pada server" });
  }

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

// router.put('/update-password/:id/:forced?', async (req, res) => {
//   const { confirmPass, newPass } = req.body
//   try {
//     if(!req.params.forced){
//       if(!confirmPass) throw Error('Send Confirmation Password to change the password')
//       const { u_password } = await getUserByIdRepo(req.params.id)
//       const passwordMatch = bcrypt.compare(confirmPass, u_password)
//       if(!passwordMatch) throw Error('Confirmation Password didnt match, please check again')
//     }
//     const updatePassword = await changePassword(req.params.id, { u_password: newPass })
//     return success(res`User ${updatePassword.u_name} Password Changed Successfully`, updatePassword)
//   } catch (err) {
//     return error(res, err.message)
//   }
// })
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
router.patch("/reset-password/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { password } = req.body
    const response = await resetPasswordServ(id, password);
    return res.status(200).json(response);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Terjadi kesalahan pada server" });
  }
});

router.get('/check-email/', async (req, res) => {
  try {
    const isExist = await emailUsed(req.headers['x-email'])
    if (isExist) throw Error('Email already exist')
    return success(res, 'Email didnt exist')
  } catch (err) {
    return error(res, err.message)
  }
})

module.exports = router;
