/**
 * Example from Mocha's DOC
 */

const assert = require('assert');

describe('Array', function () {

    describe('#indexOf()', function () {
        it('should return -1 when the value is not present', function () {
            assert.equal(-1, [1, 2, 3].indexOf(4));
            assert.equal(-1, [1, 2, 3].indexOf(5));
        });
    });

    describe('#indexOf() 1', function () {
        it('should return 1 when the value is present', function () {

            /*
             * At the 2nd Array's pos the value is equals to 3? YEAP
             */

            assert.equal(2, [1, 2, 3].indexOf(3));

            /*
             * At the 1st Array's pos the value is equals to 1?  YEAP
             */

            assert.equal(0, [1, 2, 3].indexOf(1));

            /*
             * At the 3rd Array's pos the value is equals to 2?  NO
             */

            assert.equal(2, [1, 2, 3].indexOf(2));
        });
    });

});
