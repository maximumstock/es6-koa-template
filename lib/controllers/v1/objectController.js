'use strict';

/**
 * @file Route handler for `/v1/objects`
 */

module.exports = {

    find: function find(ctx, next) {
      ctx.body = 'lel';
      ctx.status = 200;
      return next();
    }

};
