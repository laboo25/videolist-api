const channelSchema = require("../models/channelSchema");
const superStarSchema = require("../models/superStarSchema");

async function superStarController(req, res) {
    try {
        const { channelvdo, btvvdo  } = req.body;
        const save = new superStarSchema({ channelvdo, btvvdo })
        await save.save();
        res.status(201).json({ message: 'Channel created successfully', save: save });
    }
    catch(err){
        console.log(err, "star controller")
    }
}

async function getAllSuperStar(req, res) {
    try {
        const superStars = await superStarSchema.find({})
            .populate('channelvdo')
            .populate('btvvdo')
            .sort({ createdAt: 1 }); // Sort by createdAt field in ascending order
        res.status(200).send(superStars);
    } catch (error) {
        res.status(500).send({ message: "Error retrieving superstars", error });
    }
}

module.exports = { superStarController, getAllSuperStar };
