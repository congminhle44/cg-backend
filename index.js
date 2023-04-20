const express = require("express");
const config = require("./config");
const app = express();

// Cors unlock
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept,token"
  );
  res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,PATCH");
  next();
});
app.use(express.json());

// Config api routes
app.use(express.static("public"));
app.use("/api", require("./routes"));
app.listen(config.port, () => {
  console.log(`App is running on http://localhost:${config.port}`);
});
