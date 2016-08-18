const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const _schema = {
    attacks: Schema.Types.Mixed
};

const pokemonSchema = new Schema(_schema);
const data = {
    attacks: [
        {
            name: 'soco na cara',
            power: 9000,
            order: 1,
            active: true,
            created_at: Date.now()
        },

        {
            name: 'soco na petio',
            power: 9400,
            order: 2,
            active: true,
            created_at: Date.now()
        }
    ]
};

var Model = mongoose.model('pokemons', pokemonSchema);

var poke = new Model(data);

poke.save(function (err, data) {
    if (err) {
        return console.log('Error', err);
    }

    console.log('Inserted:', data);
});

module.exports = pokemonSchema;
