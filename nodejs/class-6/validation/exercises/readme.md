# Exercises

Study bitch.

## 1st

Crie um schema com cada tipo explicado, inserindo tanto um objeto correto, como um objeto que desencadeie erros de validação padrão. Criar especificamente:
- para String: **enum, match, maxlength** e **minlength**
- para Number: **max** e **min**

Schema correto:

```js
'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const _schema = {
    email: {type: String, match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']}
    , age: {type: Number, max: 99}
    , gender: {type: String, enum: ['m', 'f']}
    , city: {type: String, minlength: 4}
    , province: {type: String, minlength: 1, maxlength : 2}
};

const pokemonSchema = new Schema(_schema);

// IMPORTANT
const data = {
    email: 'nncl@live.com',
    age : 21,
    gender : 'm',
    city : 'Dublin',
    province : 'LE'
};

const Model = mongoose.model('pokemons', pokemonSchema);
const poke = new Model(data);

Model.create(data, function (err, data) {
    if (err) return console.log('Error mannn:', err);

    console.log('Inserted mannn:', data);
});
```

Console:

```bash
[nodemon] starting `node app.js`
Mongoose default connection connected in mongodb://localhost/be-mean-instagram
Mongoose default connection is open.
Inserted mannn: { __v: 0,
  email: 'nncl@live.com',
  age: 21,
  gender: 'm',
  city: 'Dublin',
  province: 'LE',
  _id: 57b86d9a51ded4f6035568fd }
```

Schema errado:

```js
const data = {
    email : 'nncl2live.com',
    age : 9999,
    gender : 'macho',
    city : 'sp',
    province : 'leinster'
};
```

Console:

```bash
[nodemon] restarting due to changes...
[nodemon] starting `node app.js`
Error mannn: { [ValidationError: pokemons validation failed]
  message: 'pokemons validation failed',
  name: 'ValidationError',
  errors:
   { province:
      { [ValidatorError: Path `province` (`leinster`) is longer than the maximum allowed length (2).]
        message: 'Path `province` (`leinster`) is longer than the maximum allowed length (2).',
        name: 'ValidatorError',
        properties: [Object],
        kind: 'maxlength',
        path: 'province',
        value: 'leinster' },
     city:
      { [ValidatorError: Path `city` (`sp`) is shorter than the minimum allowed length (4).]
        message: 'Path `city` (`sp`) is shorter than the minimum allowed length (4).',
        name: 'ValidatorError',
        properties: [Object],
        kind: 'minlength',
        path: 'city',
        value: 'sp' },
     gender:
      { [ValidatorError: `macho` is not a valid enum value for path `gender`.]
        message: '`macho` is not a valid enum value for path `gender`.',
        name: 'ValidatorError',
        properties: [Object],
        kind: 'enum',
        path: 'gender',
        value: 'macho' },
     age:
      { [ValidatorError: Path `age` (9999) is more than maximum allowed value (99).]
        message: 'Path `age` (9999) is more than maximum allowed value (99).',
        name: 'ValidatorError',
        properties: [Object],
        kind: 'max',
        path: 'age',
        value: 9999 },
     email:
      { [ValidatorError: Please fill a valid email address]
        message: 'Please fill a valid email address',
        name: 'ValidatorError',
        properties: [Object],
        kind: 'regexp',
        path: 'email',
        value: 'nncl2live.com' } } }
Mongoose default connection connected in mongodb://localhost/be-mean-instagram
Mongoose default connection is open.

```
## 2nd

Cadastre 3 pokemons **de uma só vez** - pesquisar.

```js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const _schema = {
    name: String
    , attack: Number
    , deffense: Number
};

const pokemonSchema = new Schema(_schema);

const data = [
    {
        name: "dayaramon",
        attack: 76,
        deffense: 2
    },
    {
        name: "cauemon",
        attack: 100,
        deffense: 100
    },
    {
        name: "maylamon",
        attack: 2,
        deffense: 3
    }
];

const Model = mongoose.model('pokemons', pokemonSchema);

Model.create(data, function (err, data) {
    if (err) return console.log('Error mannn:', err);

    console.log('Inserted mannn:', data);
});
```

## 3rd

Busque **todos** os pokemons com **attack > 50 e height > 0.5**.

```js

'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const _schema = {
    name: String
    , attack: Number
    , deffense: Number
};

const pokemonSchema = new Schema(_schema);

const Model = mongoose.model('pokemons', pokemonSchema);

const query = {attack : {$gt : 50}, height : {$gt : 1/2}};
const fields = {attack : 1, name : 1};

Model.find(query, fields, function (err, data) {
    if (err) return console.log('Error mannn:', err);

    console.log('Searched for:', data);
});

```

Console:

```bash
[nodemon] restarting due to changes...
[nodemon] starting `node app.js`
Mongoose default connection connected in mongodb://localhost/be-mean-instagram
Mongoose default connection is open.
Searched for: []
```

## 4th

Altere, **inserindo**, o pokemon **Nerdmon** com **attack = 49** e com os valores dos outros campos à sua escolha.

```js
'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const _schema = {
    name: String
    , attack: Number
    , deffense: Number
};

const pokemonSchema = new Schema(_schema);

const Model = mongoose.model('pokemons', pokemonSchema);

const query = {attack : {$gt : 1}};
const mod = {attack : 29};
const options = {upsert : true, multi : true};

Model.update(query, mod, options, (err, data) => {
    if (err) return console.log('Error mannn:', err);

    console.log('Updated to:', data);
});
```

Console:

```bash
Mongoose default connection connected in mongodb://localhost/be-mean-instagram
Mongoose default connection is open.
Updated to: { ok: 1, nModified: 0, n: 1 }
```

Mongo:

```bash
var query = {attack : {$gt : 1}}
Caues-MacBook-Pro(mongod-3.2.9) be-mean-instagram> query
{
  "attack": {
    "$gt": 1
  }
}
Caues-MacBook-Pro(mongod-3.2.9) be-mean-instagram> db.pokemons.find(query)             db.pokemons.find(query)
{
  "_id": ObjectId("57b873cd4c9201d469539d30"),
  "attack": 29
}
Fetched 1 record(s) in 1ms
```

## 5th

Remova **todos** os pokemons com **attack > 50**.

```js
'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const _schema = {
    name: String
    , attack: Number
    , deffense: Number
};

const pokemonSchema = new Schema(_schema);

const Model = mongoose.model('pokemons', pokemonSchema);

const query = {attack : 50};

Model.remove(query, (err, data) => {
    if (err) return console.log('Error mannn:', err);

    console.log('Deleted dude:', data);
});
```

Console:

```bash
[nodemon] restarting due to changes...
[nodemon] starting `node app.js`
Mongoose default connection connected in mongodb://localhost/be-mean-instagram
Mongoose default connection is open.
Deleted dude: { result: { ok: 1, n: 0 },
  connection:
   EventEmitter {
     domain: null,
     _events:
      { close: [Object],
        error: [Object],
        timeout: [Object],
        parseError: [Object],
        connect: [Function] },
     _eventsCount: 5,
     _maxListeners: undefined,
     options:
      { socketOptions: {},
        auto_reconnect: true,
        host: 'localhost',
        port: 27017,
        cursorFactory: [Object],
        reconnect: true,
        emitError: true,
        size: 5,
        disconnectHandler: [Object],
        bson: {},
        messageHandler: [Function],
        wireProtocolHandler: [Object] },
     id: 0,
     logger: { className: 'Connection' },
     bson: {},
     tag: undefined,
     messageHandler: [Function],
     maxBsonMessageSize: 67108864,
     port: 27017,
     host: 'localhost',
     keepAlive: true,
     keepAliveInitialDelay: 0,
     noDelay: true,
     connectionTimeout: 0,
     socketTimeout: 0,
     destroyed: false,
     domainSocket: false,
     singleBufferSerializtion: true,
     serializationFunction: 'toBinUnified',
     ca: null,
     cert: null,
     key: null,
     passphrase: null,
     ssl: false,
     rejectUnauthorized: false,
     checkServerIdentity: true,
     responseOptions: { promoteLongs: true },
     flushing: false,
     queue: [],
     connection:
      Socket {
        _connecting: false,
        _hadError: false,
        _handle: [Object],
        _parent: null,
        _host: 'localhost',
        _readableState: [Object],
        readable: true,
        domain: null,
        _events: [Object],
        _eventsCount: 8,
        _maxListeners: undefined,
        _writableState: [Object],
        writable: true,
        allowHalfOpen: false,
        destroyed: false,
        bytesRead: 250,
        _bytesDispatched: 221,
        _sockname: null,
        _pendingData: null,
        _pendingEncoding: '',
        server: null,
        _server: null,
        _idleNext: null,
        _idlePrev: null,
        _idleTimeout: -1,
        read: [Function],
        _consuming: true },
     writeStream: null,
     hashedName: '29bafad3b32b11dc7ce934204952515ea5984b3c',
     buffer: null,
     sizeOfMessage: 0,
     bytesRead: 0,
     stubBuffer: null } }

```