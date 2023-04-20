const multer = require("multer");
const { limitFileSize } = require("../config");
const path = require("path");

module.exports.uploadImage = (type) => {
  const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "./public");
    },
    filename: function (req, file, cb) {
      cb(null, "demo-video.mp4");
    },
  });

  const upload = multer({
    storage,
    limits: { fileSize: limitFileSize },
  });

  return upload.single(type);
};
