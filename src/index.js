const express = require("express");
const fs = require("fs");
const https = require("https");
const cookieParser = require('cookie-parser');
const session = require('express-session');
const dotenv = require("dotenv");
const cors = require("cors");
const multer = require('multer');
const path = require('path');

const userController = require('./user/userControler');
const TaskController = require('./task/taskController')
const notificationRoute = require('./Notification/notificationRoute');
const uploadRoute = require('./Upload History/uploadRoute');
const branchRoute = require("./Branch/branchRoute");
const positionRoute = require("./Position/positionRoute");
const divisiRoute = require("./Division/divisiRoute");
const Emails = require("./email/email");

const corsOptions = {
  origin: "*",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE,OPTION",
  credentials: true,
};


const app = express();

app.use(cors(corsOptions));
app.use(cookieParser());
app.use(session({
  secret: 'secret-key',
  resave: false,
  saveUninitialized: true
}));

dotenv.config();
const port = process.env.PORT || 3000; // Menggunakan port 3000 untuk HTTPS

app.use(express.json({ limit: "1gb" }));
app.use(express.urlencoded({ limit: "1gb", extended: true }));
app.get('/image/:name', (req, res) => {
  res.sendFile(path.join(__dirname, '../uploads', req.params.name));
});
app.set('view engine', 'ejs')
app.get('/render', (req, res) => {
  return res.render(path.resolve('src/email/templates/confirmationEmail'), {
    email: "EMAIL HERE",
    password: "PASSWORD HERE",
    loginLink: ''
  })
})

app.use('/user', userController);
app.use('/task', TaskController);
app.use('/branch', branchRoute)
app.use('/position', positionRoute)
app.use('/divisi', divisiRoute)
app.use('/notif', notificationRoute)
app.use('/upload', uploadRoute)

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/')
  },
  filename: function (req, file, cb) {
    const filename = file.originalname;
    cb(null, filename);
  }
});

const upload = multer({ storage: storage });

app.use((req, res) => {
  res.status(404).json({ message: "Endpoint not found" });
});

app.listen(port, () => {
  console.log(`Server Runing on port ${port}`);
});


// SSL configuration
// const privateKey = fs.readFileSync('./certs/prmn.key', 'utf8');
// const certificate = fs.readFileSync('./certs/prmn.crt', 'utf8');

// const credentials = { key: privateKey, cert: certificate };

// const httpsServer = https.createServer(credentials, app);

// httpsServer.listen(port, () => {
//   console.log(`HTTPS Server running on port ${port}`);
// });
// app.use((req, res) => {
//   res.status(404).json({ message: "Endpoint not found" });
// });
