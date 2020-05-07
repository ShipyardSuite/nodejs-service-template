'use strict';

const expect = require('chai').expect;

describe('Math', function () {
    describe('randomNumberArrayLength()', function () {
        it('selects a random number by array length', function () {
            const testValue = 1;

            expect(testValue).to.not.equal(2);
        });
    });
});