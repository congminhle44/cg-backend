const dotenv = require("dotenv");
dotenv.config();

const config = {
  port: process.env.PORT,
  limitFileSize: process.env.LIMIT_FILESIZE,
};

module.exports = config;
