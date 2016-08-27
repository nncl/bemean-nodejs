const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');
const Schema = mongoose.Schema;
const _schema = {
    name: String
    , description: String
    , attack: Number
    , defense: Number
    , height: Number
    , type: Number
};

const PokemonSchema = new Schema(_schema);

PokemonSchema.pre('count', (next) => {
    console.log('PRE COUNT DUDE');
    next();
});

PokemonSchema.post('count', (doc) => {
    console.log('POST COUNT DUDE');
    console.log(doc);
});

PokemonSchema.pre('validate', (next) => {
    console.log('PRE VALIDATE');
    next();
});

PokemonSchema.post('validate', (doc) => {
    console.log('%s is valid', doc.name);
});

PokemonSchema.pre('save', (next) => {
    console.log('BEFORE SAVE');
    next();
});

PokemonSchema.post('save', (doc) => {
    console.log('%s has been saved', doc.name);
});

const PokemonModel = mongoose.model('Pokemon', PokemonSchema);

module.exports = PokemonModel;