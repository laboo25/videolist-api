// create-video-controller.js

const videoSchema = require("../models/videoSchema");
const channelSchema = require("../models/channelSchema"); // Assuming you have a channel schema
const modelSchema = require("../models/modelSchema");
const btvSchema = require("../models/btvSchema");

async function createVideoController(req, res) {
  try {
    const { name, url, tags, channel, btv, modelsname, status, quality } = req.body;

    // Check if the video name already exists
    const duplicateName = await videoSchema.findOne({ name })
    if (duplicateName) {
      return res.status(400).send('Video name already exists');
    }

    // Create a new video instance
    const saveVideo = new videoSchema({
      name,
      url,
      tags,
      channel,
      btv,
      modelsname, status, quality 
    });

    // Save the video to the database
    await saveVideo.save();

    // Update the channel collection (assuming channelSchema has an 'updateChannel' method)
    const updatedChannel = await channelSchema.findOneAndUpdate({_id: saveVideo.channel}, {
      $push: { videoslist: saveVideo._id },
    }, { new: true });

    const updatedmodel = await modelSchema.findOneAndUpdate({_id: saveVideo.modelsname}, {
      $push: { videos: saveVideo._id },
    }, { new: true });

    const updatedbtv = await btvSchema.findOneAndUpdate({_id: saveVideo.btv}, {
      $push: { videoslist: saveVideo._id },
    }, { new: true });

    res.status(201).json({ message: 'Video created successfully', video: saveVideo, updatedChannel, updatedmodel, updatedbtv });
  } catch (error) {
    // Handle any errors (e.g., validation errors, database errors)
    console.error(error.message, "video controller");
    res.status(500).send('Internal Server Error in video controller');
  }
}

async function deleteVideo(req, res) {
  try {
      const { id } = req.params || req.body;
      const deletedVideo = await videoSchema.findByIdAndDelete(id);
      if (!deletedVideo) {
          return res.status(404).send('Video not found');
      }
      res.status(200).send('Video deleted successfully');
  } catch (error) {
      // Handle any errors
      console.error(error.message, "deleteVideo");
      res.status(500).send('Internal Server Error in deleteVideo');
  }
}
async function updateVideo(req, res) {
  try {
    const { id, name, url, tags, channel, btv, modelsname, status, quality } =  req.params || req.body;
    let videoToUpdate = await videoSchema.findById(id);
    if(!videoToUpdate){
      return res.status(404).send('Video not found');
    }
  }
  catch(error){
    res.send(error)
  }
}
async function getAllVideo(req, res) {
  try {
      // Fetch all videos and populate the 'channel' field
      const videos = await videoSchema.find({})
            .populate('channel')
            .populate('model')
            .populate('btv');

      // Sort the videos alphabetically by their name
      videos.sort((a, b) => a.name.localeCompare(b.name));

      // Send the sorted videos as a response
      res.status(200).send(videos);
  } catch (error) {
      // Handle any errors
      console.error(error.message, "getAllVideo");
      res.status(500).send('Internal Server Error in getAllVideo');
  }
}


module.exports = {createVideoController,deleteVideo, getAllVideo, updateVideo};
