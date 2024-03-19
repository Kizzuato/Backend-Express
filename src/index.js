const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const multer = require('multer');
const path = require('path');

const userController = require('./user/userControler');
const TaskController = require('./task/taskController')
const notificationRoute = require('./Notification/notificationRoute');
const uploadRoute = require('./Upload History/uploadRoute');
const divisiRoute = require("./Division/divisiRoute");

const corsOptions = {
  origin: "*",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE,OPTION",
  credentials: true,
};

const app = express();

app.use(cors(corsOptions));

dotenv.config();
const port = process.env.PORT || 9090; // default to 443 if PORT not set

app.use(express.json({ limit: "1gb" }));
app.use(express.urlencoded({ limit: "1gb", extended: true }));
app.get('/image/:name', (req, res) => {
  res.sendFile(path.join(__dirname, '../uploads', req.params.name));
});

app.use('/user', userController);
app.use('/task', TaskController);
app.use('/divisi', divisiRoute)
app.use('/notif', notificationRoute)
app.use('/upload', uploadRoute)

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//       cb(null, 'uploads/')
//   },
//   filename: function (req, file, cb) {
//       cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
//   }
// });

// app.post('/upload', upload.single('file'), (req, res) => {
//   if (!req.file) {
//       return res.status(400).json({ error: 'Tidak ada file yang diunggah' });
//   }
//   res.json({ filename: req.file.filename });
// });

app.use((req, res) => {
  res.status(404).json({ message: "Endpoint not found" });
});

app.use((req, res) => {
  res.status(404).json({ message: "Endpoint not found" });
});

app.listen(port, () => {
  console.log(`Server Runing on port ${port}`);
});
