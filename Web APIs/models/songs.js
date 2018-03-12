var mongoose = require('mongoose');

var SongsSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    releaseDate: String,
    _album: { type: mongoose.Schema.Types.ObjectId, ref: 'Album'},
    _artist: { type: mongoose.Schema.Types.ObjectId, ref: 'Artist'}

}, 
{ timestamps: true });

module.exports = mongoose.model('Songs', SongsSchema);