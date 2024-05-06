const modelSchema = require("../models/modelSchema");

async function createModelController(req, res){
    try{
        const { modelname, videos, superStar } = req.body;

        const duplicateName = await modelSchema.findOne({ modelname });
        if (duplicateName) {
            return res.status(400).send('model name already exists');
        }
        const saveModel = new modelSchema({ modelname, videos, superStar })
        await saveModel.save();
        res.status(201).json({ message: 'model created successfully', model: saveModel });

    }
    catch(err){
        console.log(err)
        res.status(500).send(err, "model controller")
    }
}
async function deleteModel(req, res){
    try{
        const { id } = req.body;
        const deletedModel = await modelSchema.findByIdAndDelete(id);
        if (!deletedModel) {
            return res.status(404).send('model not found');
        }
        res.status(200).send('model deleted successfully');
    }
    catch(err){
        console.log(err, "deleteModel controller")
    }
}
async function updateModel(req, res){
    try{
        const { id, modelname, videos, superStar } = req.body;
        const updatedModel = await modelSchema.findByIdAndUpdate(id, { modelname, videos, superStar }, { new: true });
        res.status(200).json({ message: 'model updated successfully', updatedModel });
    }
    catch(err){
        console.log(err, "updateModel controller")
    }
}
async function getAllModels(req, res) {
    try {
        const models = await modelSchema.find({}).populate('videos').sort({ modelname: 1 });
        res.status(200).send(models);
    } catch (error) {
        console.error('Error fetching models:', error.message);
        res.status(500).send('Internal Server Error');
    }
}


module.exports = {createModelController, getAllModels, deleteModel, updateModel }