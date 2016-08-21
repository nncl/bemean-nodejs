/**
 * Validating email field
 */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = mongoose.ObjectId;

mongoose.connect('mongodb://localhost/test');

const validateEmail = (email) => {
    const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email);
};

const _schema = {
    email: {
        type: String
        , trim: true
        , unique: true
        , required: 'Email is required dude'
        , validate: [validateEmail, 'Please, add a valid email address.']
    }
};

const EmailSchema = new Schema(_schema);

const EmailModel = mongoose.model('Emails', EmailSchema);
// const mail = new EmailModel({email : 'nncl2live.com'});
const mail = new EmailModel({email: null});

console.log(mail.validateSync());
// console.log(mail.validateSync().errors.email.message);
