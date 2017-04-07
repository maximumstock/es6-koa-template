'use strict';

/**
 * @file Test specification for error handling middleware
 */

require('babel-core/register');

const expect = require('chai').expect;
const Koa = require('koa');
const request = require('supertest');

const middleware = require('../../../lib/middleware');
const errorHandler = middleware.errorHandler;

describe('Error Handler', function() {

  it('should return a thrown error as a json object', async () => {

    const app = new Koa();
    app.use(errorHandler);
    app.use(async (ctx, next) => {
      const err = new Error('lel');
      err.status = 401;
      throw err;
    });

    const result = await request(app.listen(3000)).get('/').expect(401);

    expect(result.body).to.be.an('object');
    expect(result.body).to.have.a.property('status');
    expect(result.body).to.have.a.property('msg');
    expect(result.body).to.have.a.property('err');
    expect(result.body.status).to.equal(401);

  });

  it('should not provide stacktrace information when not in development mode', async () => {

    process.env.NODE_ENV = 'production';

    const app = new Koa();
    app.use(errorHandler);
    app.use(async (ctx, next) => {
      const err = new Error('very important error');
      err.status = 401;
      throw err;
    });

    const result = await request(app.listen()).get('/');

    expect(result.body).to.be.an('object');
    expect(result.body).to.have.a.property('status');
    expect(result.body).to.have.a.property('msg');
    expect(result.body).to.not.have.a.property('err');
    expect(result.body.status).to.equal(401);

    process.env.NODE_ENV = null;

  });

});
