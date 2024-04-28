const express = require('express');
const { getAllModels, createModelController } = require('../../controllers/create-model-controller');
const router = express.Router();

router.post('/create-performer', createModelController)
router.get('/get-all-performers', getAllModels)

module.exports = router