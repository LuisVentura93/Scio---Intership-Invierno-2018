var TodoController            = require('./controllers/todos'),
    AuthController            = require('./controllers/auth'),
    ArtistController          = require('./controllers/artist'),
    AlbumController           = require('./controllers/album'),
    SongsController           = require('./controllers/songs'),
    express                   = require('express'),
    passport                  = require('passport');

var requireAuth   = passport.authenticate('jwt', {session: false}),
    requireLogin  = passport.authenticate('local', {session: false});

module.exports = function(app){

    var apiRoutes     = express.Router(),
        authRoutes    = express.Router(),
        artistRoutes  = express.Router(),
        albumRoutes   = express.Router(),
        songsRoutes   = express.Router(),
        todoRoutes    = express.Router();

    // Auth Routes
    apiRoutes.use('/auth', authRoutes);
    authRoutes.post('/register', AuthController.register);

    // Todo Routes
    apiRoutes.use('/todos', todoRoutes);
    todoRoutes.get('/:todo_id', TodoController.getTodo);
    todoRoutes.get('/', TodoController.getTodos);
    todoRoutes.post('/', TodoController.createTodo);
    todoRoutes.put('/:todo_id', TodoController.updateTodo);
    todoRoutes.delete('/:todo_id', TodoController.deleteTodo);

    //Artist routes
    apiRoutes.use('/artists', artistRoutes);
    artistRoutes.get('/', ArtistController.getArtists);
    artistRoutes.post('/', ArtistController.createArtist);

    //Album routes
    apiRoutes.use('/albums', albumRoutes);
    albumRoutes.get('/', AlbumController.getAlbums);
    albumRoutes.post('/', AlbumController.createAlbum);

    //Songs routes
    apiRoutes.use('/songs', songsRoutes);
    songsRoutes.get('/', SongsController.getSongs);
    songsRoutes.post('/', SongsController.createSongs);

    // Set up routes
    app.use('/v1', apiRoutes);

}
