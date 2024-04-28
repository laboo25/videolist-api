const express = require('express');
const { getAllBtv, createBTVController } = require('../../controllers/createBTVController');
const router = express.Router();

router.post('/create-btv', createBTVController)
router.get('/get-all-btv', getAllBtv)

module.exports = router