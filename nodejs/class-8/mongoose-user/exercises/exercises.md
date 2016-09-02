## Exercises

### 1 - Insira 5 pokemons novos, na coleção pokemons, escolha 3 e os adicione em um array e uma nova coleção chamada meus-pokemons, utilizando o ObjectId. Adicione o required em campos que ache obrigatório no Schema do Pokemon.

Pokemon' Schema:

```
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const _schema = {
    name: {type : String, required : true}
    , type : {type : String}
};

const pokemonSchema = new Schema(_schema);

module.exports = pokemonSchema;
```

Inserting 5 pokemon:

```
const create = (req, res) => {
    req.on('end', () => {
        var pokemons = [
            {
                name : "Digimon",
                type : "Digitype"
            },
            {
                name : "Pkemon",
                type : "Pkemontype"
            },
            {
                name : "Chrismon",
                type : "Christype"
            },
            {
                name : "Chairmon",
                type : "Chairtype"
            },
            {
                name : "Cumon",
                type : "Cutype"
            }
        ];

        Pokemon.create(pokemons, (err, user) => callback(err, user, res));
    });
};

```

Picking 3 of them by its _id:

```
[
  {
    "_id": "57c771f97005287706a5d283",
  },
  {
    "_id": "57c771f97005287706a5d284",
  },
  {
    "_id": "57c771f97005287706a5d285",
  }
]
```

Adding to `my-pokemons`:

```
[
  {
    "__v": 0,
    "_id": "57c8cbd03a166c7e059040d5",
    "my_pokemons": []
  },
  {
    "__v": 0,
    "_id": "57c8cbd03a166c7e059040d6",
    "my_pokemons": []
  },
  {
    "__v": 0,
    "_id": "57c8cbd03a166c7e059040d7",
    "my_pokemons": []
  }
]
```

### 2 - Crie um Schema de exemplo com validação para os campos (utilizar Arquitetura Atômica, ou seja cada campo sendo um Schema separado):

### 3 - Dê 3 exemplos diferentes, de cada, utilizando as funções:

    - findAndModify
    - findOneAndUpdate
    - findOneAndRemove