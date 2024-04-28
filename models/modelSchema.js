// modelSchema.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const modelSchema = new Schema({
    modelname: {
        type: String,
        required: true
    },
    videos: [{
        type: Schema.Types.ObjectId,
        ref: 'video'
    }],
    superStar: {
        type: Boolean,
        default: false
    }
})

module.exports = mongoose.model('model', modelSchema)