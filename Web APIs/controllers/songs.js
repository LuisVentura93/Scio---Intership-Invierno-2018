var Songs = require('../models/songs');
var Album = require('../models/album');
var Artist = require('../models/artist');

exports.getSongs = function(req, res, next){
    Songs.find(function(err, songs) {
        if (err)
            res.send(err);
        res.json(songs);
    });
}

exports.createSongs = function(req, res, next){

    var name = req.body.name;
    var releaseDate = req.body.releaseDate;
    var artistId = req.body.artistId;
    var albumId = req.body.albumId;

    if(!name)
        return res.status(400).send({error: 'You must enter a name'});
    if(!artistId)
        return res.status(400).send({error: 'You must enter an artist id'});
    if(!albumId)
        return res.status(400).send({error: 'You must enter an album id'});

    Album.findOne({_id:albumId}, function(err, existingAlbum){
        if(err)
            return next(err);
        if(!existingAlbum)
            return res.status(404).send({error: 'Songs not found'});
        Songs.findOne({name:name}, function(err, existingSongs){
          if(err)
            return next(err);
          if(existingSongs)
            return res.status(400).send({error: 'That Song is already in our albums'});

          var songs = new Songs({
            name: name,
            releaseDate: releaseDate,
            _album: existingAlbum._id
          });

          songs.save(function(err, songs){
            if(err)
              return next(err);
            res.status(201).json({
              Songs: songs
            });
          });
        });
    })
}

exports.deleteSongs = function(req, res, next){
    Album.remove({
        _id : req.params.Songs_id
    }, function(err, Songs) {
        res.json(Songs);
    });
}
