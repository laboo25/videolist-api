const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const videoSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    url: {
        type: String
    },
    tags: [
        {
            type: String
        }
    ],
    channel: {
        type: Schema.Types.ObjectId,
        ref: 'Channel' // Reference to another model named 'Channel'
    },
    model: {
        type: Schema.Types.ObjectId,
        ref: 'model' // Reference to another model named 'model'
    },
    btv: {
        type: Schema.Types.ObjectId,
        ref: 'btv' // Reference to another model named 'btv'
    },
    status: {
        type: String,
        enum: ['waiting', 'complete', 'deleted', 'wishlist', 'other'],
        default: 'waiting'
    },
    quality: {
        type: String,
        default: '1080p'
    }
}, { timestamps: true }); // Option to automatically generate createdAt and updatedAt fields

module.exports = mongoose.model('video', videoSchema);
