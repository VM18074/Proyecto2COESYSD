'use strict'
const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'src/uploads');
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
});
const filefileter = (req, file, cb) => {
    if (file.mimetype === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
        || file.mimetype === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
        || file.mimetype === 'application/pdf'){
            cb(null, true); 
        }else{
            cb(null, false);
        }
}

const upload = multer({storage: storage, fileFilter: filefileter});
module.exports = {upload}