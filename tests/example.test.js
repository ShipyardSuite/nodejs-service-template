'use strict';

const { exampleFunction } = require('./../src/utils/example');

const expect = require('chai').expect;

describe('Example', function () {
    describe('exampleFunction()', function () {
        it('output should equal "example-service"', function () {
            expect(exampleFunction()).to.equal("example-service");
        });
    });
});