const express = require('express')
const router = express.Router()

const { getLink, updateLink } = require('./controllers/index.controler')
const { uploadFile } = require('./middlewares/uploadFile')

router.get('/links', getLink)
router.patch('/links/:id', updateLink)
router.post('/demo-video', uploadFile('video'), (req, res) =>
  res.status(200).json({ message: 'success' })
)

module.exports = router
