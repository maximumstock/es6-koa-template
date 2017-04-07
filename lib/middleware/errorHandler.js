'use strict';

/**
 * @file Exports a basic error handler middleware for koa
 */

const logger = require('../logger');

module.exports = async (ctx, next) => {

	try {
		await next();
	} catch (err) {

		if(process.env.NODE_ENV !== 'development' || !process.env.NODE_ENV) {
			logger.error(err);
		}

		ctx.status = err.status || 500;
		ctx.body = {
			status: ctx.status,
			msg: err.message
		};

		// include error with stacktrace; similiar to express error handler
		if (process.env.NODE_ENV === 'development' || !process.env.NODE_ENV) {
			ctx.body.err = err;
		}

	}
}
