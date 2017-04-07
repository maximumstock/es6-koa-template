'use strict';

/**
 * @file Entry file that starts the server
 */

require('babel-core/register');

const app = require('./lib');
const config = require('./config');

app.listen(config.port);
console.info(`Server is running at ${config.port}`);
