const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const _schema = {
    name : Boolean
};

const pokemonSchema = new Schema(_schema);
const data = {name : 1};

var Model = mongoose.model('pokemons', pokemonSchema);

var poke = new Model(data);

poke.save(function (err, data) {
    if (err) {
        return console.log('Error' , err);
    }

    console.log('Inserted:', data);
});

module.exports = pokemonSchema;
