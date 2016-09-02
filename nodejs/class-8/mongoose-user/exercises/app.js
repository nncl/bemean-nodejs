/**
 * Main stuff
 */

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/pokemons');

const http = require('http');
const url = require('url');
const PokemonController = require('./controllers/Pokemon');
const MyPokemonController = require('./controllers/MyPokemon');

var server = http.createServer(function (req, res) {
    var url_parts = url.parse(req.url);

    switch (url_parts.pathname) {
        case '/api/pokemons/create' :
            PokemonController.create(req, res);
            break;
        case '/api/mypokemons/create' :
            MyPokemonController.create(req, res);
            break;
        case '/api/pokemons/find' :
            PokemonController.find(req, res);
            break;
        default :
            res.end('Path not found');
            break;
    }
});

server.listen(8080, () => {
    console.log('Server running in localhost:8080');
});