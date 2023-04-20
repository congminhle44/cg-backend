const express = require("express");
const router = express.Router();

const { getLink, updateLink } = require("./controllers/index.controler");
const { uploadImage } = require("./middlewares/uploadImages");

router.get("/links", getLink);
router.patch("/links/:id", updateLink);
router.post("/demo-video", uploadImage("video"), (req, res) =>
  res.status(200).json({ message: "success" })
);

module.exports = router;
