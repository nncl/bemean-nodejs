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
    create: (req, res) => {
        UserModel.create(req, res);
    }
    , retrieve: (req, res) => {
        UserModel.retrieve(req, res);
        // UserModel.get(query);
    }
    , update: (req, res) => {
        UserModel.update(req, res);
    }
    , delete: (req, res) => {
        UserModel.delete(req, res);
    }
};

module.exports = CRUD;