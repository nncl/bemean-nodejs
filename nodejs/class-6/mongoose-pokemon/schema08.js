const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const _schema = {
    pokemons : [String]
};

const pokemonSchema = new Schema(_schema);

// Array inside array
// const data = {
//     pokemons : ['Poke01', 'Poke02']
// };

const data = {
    pokemons : ['Poke01', 'Poke02']
};

var Model = mongoose.model('mypokemons', pokemonSchema);

var poke = new Model(data);

poke.save(function (err, data) {
    if (err) {
        return console.log('Error', err);
    }

    console.log('Inserted:', data);
});

module.exports = pokemonSchema;
