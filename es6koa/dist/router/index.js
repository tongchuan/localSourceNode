'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _koaRouter = require('koa-router');

var _koaRouter2 = _interopRequireDefault(_koaRouter);

var _newsRouter = require('./newsRouter');

var _newsRouter2 = _interopRequireDefault(_newsRouter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = new _koaRouter2.default();

router.use('/news', _newsRouter2.default.routes());

exports.default = router;