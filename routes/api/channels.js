const express = require('express');
const { createChannelController, getAllChannel, deleteChannel, updateChannel } = require('../../controllers/create-channel-controller');
const router = express.Router();

router.post('/create-channels', createChannelController)
router.delete('/delete-channel/:id', deleteChannel)
router.put('/update-channel/:id', updateChannel)
router.get('/get-all-channels', getAllChannel)

module.exports = router