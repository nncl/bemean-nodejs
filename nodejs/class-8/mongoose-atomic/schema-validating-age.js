/**
 * Validating age field
 *
 * Undefined == success
 * toString == message, so, toString() does not exist in SUCCESS
 */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = mongoose.ObjectId;

mongoose.connect('mongodb://localhost/test');

const _schema = {
    age: {
        type: Number,
        validate: {
            validator: (v) => {
                return v >= 18;
            },
            message : 'Your age ({VALUE}) is not permitted'
        }
    }
};

const PersonSchema = new Schema(_schema);

const UserModel = mongoose.model('users', PersonSchema);

const user = new UserModel();

/*user.age = 21;
console.log('Validated:', user.validateSync());*/

user.age = 69;
console.log('Only msg:', user.validateSync().toString());

/*user.age = 2;
console.log('Entire object', user.validateSync());*/