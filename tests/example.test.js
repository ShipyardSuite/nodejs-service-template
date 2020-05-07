'use strict';

const expect = require('chai').expect;

describe('Test Example', function () {
    describe('example', function () {
        it('tries to prove that 1 is not 2', function () {
            const testValue = 1;

            expect(testValue).to.not.equal(2);
        });
    });
});