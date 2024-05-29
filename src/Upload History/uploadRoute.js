const express = require("express");
const multer = require("multer");
const { auth } = require("../middleware/auth.middleware");
const uploadControl = require('./uploadController');
const { importUser } = require("../user/userServ");
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/excels')
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
const uploadExcel = multer({
    storage,
    fileFilter(req, file, cb) {
        const allowedMimeTypes = ['application/vnd.openxmlformats-officedocument.spreadsheetml.sheet']
        if (!allowedMimeTypes.includes(file.mimetype)) {
            req.fileValidationError = 'Only excel file are allowed'
            cb(null, false)
            return
        }
        cb(null, true)
    }
})

const router = express()

//Get All
router.get('/', uploadControl.getAll)

//Import Excel
router.post('/store-excel', uploadExcel.single('file'), uploadControl.store)
router.post('/store-user', uploadExcel.single('file'), uploadControl.storeUser)

module.exports = router