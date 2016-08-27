'use strict';

const PokemonModel = require('./schema');

/*
 const query = PokemonModel.where({name: /PikaChu/i});

 query.count((err, doc)=> {
 if (err) return console.log('Error::::::', err);

 return console.log('Success::::::', doc);
 });
 */

/*
 const poke = new PokemonModel({
 name: "Fiestamon"
 , description: "Puta carro foda"
 , attack: 100
 , defense: 100
 , height: 800
 , type: "Rocam"
 });

 poke.validate((err)=> {
 if (err) return console.log('Error::::::', err);

 return console.log('Success validated');
 });
 */

PokemonModel.findOne({name: /Squirtle/i}, (err, pokemon)=> {
    if (err) return console.log('Error::::::', err);

    pokemon.remove((err)=> {
        console.log(err || "Success removed!!!");
    });
});

// 38m