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
async function deleteChannel(req, res){
    try{
        const { id } = req.params;
        const deletedChannel = await channelSchema.findByIdAndDelete(id);
        if (!deletedChannel) {
            return res.status(404).send('Channel not found');
        }
        res.status(200).send('Channel deleted successfully');
    }
    catch(err){
        console.log(err, "deleteChannel controller")
    }
}
async function updateChannel(req, res){
    try{
        const { id, channelname } = req.params || req.body;
        const updatedChannel = await channelSchema.findByIdAndUpdate(id, { channelname }, { new: true });
        res.status(200).json({ message: 'Channel updated successfully', updatedChannel });
    }
    catch(err){
        console.log(err, "updateChannel controller")
    }
}
async function getAllChannel(req, res) {
    try {
        const channels = await channelSchema.find({}).populate('videoslist').sort({ channelname: 1 });
        res.status(200).send(channels);
    } catch (error) {
        console.error('Error fetching channels:', error.message);
        res.status(500).send('Internal Server Error');
    }
}

module.exports = {createChannelController, getAllChannel, deleteChannel, updateChannel }