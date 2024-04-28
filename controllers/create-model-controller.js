const modelSchema = require("../models/modelSchema");

async function createModelController(req, res){
    try{
        const { modelname } = req.body;

        const duplicateName = await modelSchema.findOne({ modelname });
        if (duplicateName) {
            return res.status(400).send('model name already exists');
        }
        const saveModel = new modelSchema({ modelname })
        await saveModel.save();
        res.status(201).json({ message: 'model created successfully', model: saveModel });

    }
    catch(err){
        console.log(err)
        res.status(500).send(err, "model controller")
    }
}

async function getAllModels(req, res) {
    const models = await modelSchema.find({}).populate('videoslist');
    res.status(200).send(models)
}

module.exports = {createModelController, getAllModels }