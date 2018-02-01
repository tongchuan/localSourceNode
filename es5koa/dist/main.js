'use strict';

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

require('babel-polyfill');

require('babel-register');

var _koa = require('koa');

var _koa2 = _interopRequireDefault(_koa);

var _koaRouter = require('koa-router');

var _koaRouter2 = _interopRequireDefault(_koaRouter);

var _koaView = require('koa-view');

var _koaView2 = _interopRequireDefault(_koaView);

var _router = require('./router');

var _router2 = _interopRequireDefault(_router);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = new _koa2.default();
app.env = process.env.NODE_ENV || 'development';
// let router = new Router()

// router.all('/news', async(ctx,next)=>{
// 	ctx.body = 'news'
// })
// router.all('/api', async(ctx,next)=>{
// 	ctx.body = 'api'
// })
// 
console.log(app.env);
app.use((0, _koaView2.default)(__dirname + '/views'));
app.use(_router2.default.routes());
app.use(function () {
	var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(ctx, next) {
		return _regenerator2.default.wrap(function _callee$(_context) {
			while (1) {
				switch (_context.prev = _context.next) {
					case 0:
						ctx.body = 'Hello World!';

					case 1:
					case 'end':
						return _context.stop();
				}
			}
		}, _callee, undefined);
	}));

	return function (_x, _x2) {
		return _ref.apply(this, arguments);
	};
}());

app.listen(5000);

// export default class Main{
// 	constructor(name,age){
// 		this.name = name
// 		this.age = age
// 	}
// 	getName(){
// 		return this.name
// 	}
// 	getAge(){
// 		return this.age
// 	}
// }