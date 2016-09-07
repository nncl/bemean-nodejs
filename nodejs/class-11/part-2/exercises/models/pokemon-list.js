'use strict';

const mongoose = require('mongoose');

module.exports = (Organism) => {

    return (req, res) => {
        Organism.find({}, (err, data) => {
            if (err) return res.json({success: false, msg: err});

            return res.json({success: true, data});
        });
    }
};
