/**
 * Atom field email
 */

const Atom = {
    type: String
    , set: require('../quarks/quark-toLower')
    , required: true
    , unique: true
};

module.exports = Atom;