'use strict';


const expect = require('chai').expect;
const app = require('../../lib');
const request = require('supertest').agent(app.listen());


describe('integration test', function() {

    it('should do something', function*() {

        expect(true);

    });

})
