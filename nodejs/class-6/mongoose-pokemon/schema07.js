const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const _schema = {
    pokemons : [{
        type : Schema.Types.ObjectId,
        ref : 'pokemons'
    }]
};

const pokemonSchema = new Schema(_schema);
const data = {
    pokemons : [
        '57b4fb5ec947bcaa055fb192',
        '57b4fa210e870d4d05e02b8f'
    ]
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
