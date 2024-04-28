const express = require('express');
const { createChannelController, getAllChannel } = require('../../controllers/create-channel-controller');
const router = express.Router();

router.post('/create-channels', createChannelController)
router.get('/get-all-channels', getAllChannel)

module.exports = router