const express = require('express');
const {createVideoController, getAllVideo} = require('../../controllers/create-video-controller');
const router = express.Router();

router.post('/create-video', createVideoController)
router.get('/get-all-video', getAllVideo)


module.exports = router