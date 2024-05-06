const express = require('express');
const {createVideoController, getAllVideo, deleteVideo, updateVideo} = require('../../controllers/create-video-controller');
const router = express.Router();

router.post('/create-video', createVideoController)
router.delete('/delete-video', deleteVideo)
router.get('/get-all-video', getAllVideo)
router.put('/update-video', updateVideo)


module.exports = router