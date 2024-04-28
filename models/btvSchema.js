const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const btvSchema = new Schema({
    btvname: {
        type: String,
        required: true
    },
    videoslist: [{
        type: Schema.Types.ObjectId,
        ref: 'video'
    }],
    model: [{
        type: Schema.Types.ObjectId,
        ref: 'model'
    }]
})

module.exports = mongoose.model('btv', btvSchema)