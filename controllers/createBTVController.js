const btvSchema = require("../models/btvSchema");
const modelSchema = require("../models/modelSchema");

async function createBTVController(req, res) {
    try {
        const { btvname } = req.body;
        const duplicateName = await btvSchema.findOne({ btvname });
        if (duplicateName) {
            return res.status(400).send('btv name already exists');
        }
        const saveVideo = new btvSchema({
            btvname
        });
        await saveVideo.save();

        const updatedmodel = await modelSchema.findOneAndUpdate({_id: saveVideo.model}, {
            $push: { model: saveVideo._id },
          }, { new: true });

        res.status(201).json({ message: 'Video created successfully', video: saveVideo, updatedmodel });
    } catch (error) {
        // Handle any errors (e.g., validation errors, database errors)
        console.error(error, "btv controller");
        res.status(500).send('Internal Server Error');
    }
}

async function getAllBtv(req, res) {
    try {
        const btv = await btvSchema.find({}).populate('videoslist').sort({ btvname: 1 });
        res.status(200).send(btv);
    } catch (error) {
        console.error('Error fetching BTVs:', error.message);
        res.status(500).send('Internal Server Error');
    }
}


module.exports = { createBTVController, getAllBtv }