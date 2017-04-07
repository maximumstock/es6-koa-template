'use strict';

/**
 * @file Exports all routes at once
 */


const Router = require('koa-better-router');
const router = new Router();
router.loadMethods();

const controllers = require('../controllers');

/**
 * v1
 */
const v1 = controllers.v1;
router.get('/v1/objects', v1.objectController.find);

module.exports = router;

// module.exports = function(app) {
//   app.use(router.middleware());
// }
