/**
 * CRUD of a pokemon
 */

'use strict';

require('./db/config');
const CRUD = require('./pokemon-controller');

const query = {name: /Atomicmon/i};
const data = {
    height: 1000,
    deffense: 40,
    attack: 40,
    description: 'Cool',
    name: 'Atomicmon'
};
const mod = {attack : 99};

CRUD.read(query);
// CRUD.create(data);
// CRUD.update(query, mod);
// CRUD.delete(query);
