/**
 * User's Controller
 */

const UserModel = require('./model');

const _userData = {
    name: "CAUÊ ALMEIDA"
    , password: "1234567"
    , email: "nncl@live.com"
    , type: "m"
};

const CRUD = {
    create: UserModel.create
    , find: UserModel.find
    , findOne: UserModel.findOne
    , update: UserModel.update
    , remove: UserModel.remove
};

module.exports = CRUD;