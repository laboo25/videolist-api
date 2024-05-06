// channelSchema.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const channelSchema = new Schema({
    channelvdo: {
        type: Schema.Types.ObjectId,
        ref: 'channel'
    },
    btvvdo: [{
        type: Schema.Types.ObjectId,
        ref: 'btv'
    }]
})

module.exports = mongoose.model('superStar', channelSchema)



