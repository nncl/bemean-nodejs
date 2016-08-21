/**
 * SETTERS
 *
 * You can use to change original data before it goes to your document.
 *
 * I.e.: You have to transform data to lowercase before it goes to
 *  database. Just use Setters to do the job.
 */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/test');

var toLower = (value) => {
    return value.toLowerCase();
};

const _schema = {
    email: {type: String, set: toLower}
};

const UserSchema = new Schema(_schema);

const UserModel = mongoose.model('users', UserSchema);

const user = new UserModel({email: 'NnCl@lIvE.CoM'});

console.log(user.email);

/*
 * nncl@live.com
 *
 * OMG _____o/
 */
