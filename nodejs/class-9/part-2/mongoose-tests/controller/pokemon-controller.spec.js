'use strict';

const expect = require('chai').expect;
const controller = require('./pokemon-controller');

describe('Pokemons` Controller', () => {
    const pokemon = {
        name: 'Jean',
        description: 'Pokemonzudo S2',
        type: 'Fire',
        attack: 85,
        defense: 85,
        height: 1.80
    };

    after(done => {
        let Model = require('./pokemon-schema');
        Model.remove({});
        done();
    });

    describe('create a new pokemon', () => {
        it('expect a new pokemon had been created', done => {
            controller.create(pokemon, (err, data)=> {
                expect(err).to.not.exist;
                expect(data._id).to.exist;
                expect(data.name).to.be.eq('Jean');
                expect(data.description).to.exist;
                expect(data.type).to.be.eq('Fire');
                expect(data.attack).to.exist;
                expect(data.defense).to.exist;
                expect(data.height).to.exist;
                done();
            });
        });
    });

    describe('find all pokemon', () => {
        it('expect to find all pokemon that had been created', done => {
            controller.retrieve({}, (err, data)=> {
                expect(err).to.not.exist;
                expect(data).to.be.an('array');
                expect(data).to.have.length.above(1);
                done();
            });
        });
    });
});
