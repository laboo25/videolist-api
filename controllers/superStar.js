const channelSchema = require("../models/channelSchema");

async function createChannelController(req, res) {
    try {
        const { channelname } = req.body;
        const duplicateName = await channelSchema.findOne({ channelname });
        if (duplicateName) {
            return res.status(400).send('Channel name already exists');
        }
        const saveChannel = new channelSchema({ channelname })
        await saveChannel.save();
        res.status(201).json({ message: 'Channel created successfully', channel: saveChannel });
    }
    catch(err){
        console.log(err, "channel controller")
    }
}
async function getAllChannel(req, res) {
    const channels = await channelSchema.find({}).populate('videoslist');
    res.status(200).send(channels)
}
module.exports = {createChannelController, getAllChannel }