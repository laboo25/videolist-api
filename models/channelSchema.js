// channelSchema.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const channelSchema = new Schema({
    channelname: {
        type: String,
        required: true
    },
    videoslist: [{
        type: Schema.Types.ObjectId,
        ref: 'video'
    }]
})

module.exports = mongoose.model('Channel', channelSchema)



