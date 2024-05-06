const express = require('express');
const { superStarController, getAllSuperStar } = require('../../controllers/superStarController');
const router = express.Router();

router.post('/add-superstar', superStarController)
router.get('/get-all-superstar', getAllSuperStar)

module.exports = router