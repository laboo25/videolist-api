const express = require('express');
const { getAllModels, createModelController, deleteModel, updateModel } = require('../../controllers/create-model-controller');
const router = express.Router();

router.post('/create-performer', createModelController)
router.delete('/delete-performer', deleteModel)
router.put('/update-performer', updateModel)
router.get('/get-all-performers', getAllModels)

module.exports = router