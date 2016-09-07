/**
 * Action that returns a HTTP 200's response
 */

const Action = (err, data, res) => {
    if (err) {
        res.status(403).json({success: false, msg: err});
    }

    res.json({success: true, msg: data});
};

module.exports = Action;