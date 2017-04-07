'use strict';

/**
 * @file Exports the application
 */

const Koa = require('koa');

const logger = require('koa-logger');
const body = require('koa-bodyparser');

const middleware = require('./middleware');
const errorHandler = middleware.errorHandler;
const routes = require('./routes');

const app = new Koa();

app.use(logger());
app.use(body());
app.use(errorHandler);
app.use(routes.middleware());

module.exports = app;
