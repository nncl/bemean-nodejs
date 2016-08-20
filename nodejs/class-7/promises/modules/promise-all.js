
/**
 *
 * For each item in array - map - concat using reduce into another
 * array.
 *
 * OBS: REUSABLE
 * OBS2: This one formats the data into json file, instead of 1st used
 *  method in app.js.
 *
 * @param {Array} arr
 * @returns {Object}
 */

function promiseAll(arr) {
    return Promise.all(arr)
        .then(function success(res) {
            return res.map(a => JSON.parse(a))
            .reduce((init,actual)=> {
                init = init.concat(actual);
                return init;
            }, []);
        })
        .catch(function error(err) {
            throw err;
        });
}

module.exports = promiseAll;
