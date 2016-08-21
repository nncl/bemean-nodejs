/**
 * Validating requirements
 */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/test');

const _schema = {
    name: String
};

const RequirementsSchema = new Schema(_schema);

const RequirementsModel = mongoose.model('requirements', RequirementsSchema);

RequirementsModel.schema.path('name').validate((value) => {
    return /js|html|css|mongodb|angular|node/i.test(value);
}, 'Requirement ({value}) invalid');

const req = new RequirementsModel({name : 'php'});

console.log(req.validateSync());
