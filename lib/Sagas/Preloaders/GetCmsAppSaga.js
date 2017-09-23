'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

exports.default = getCmsAppSaga;

var _effects = require('redux-saga/effects');

var _Creators = require('../../Actions/Creators');

var _Creators2 = _interopRequireDefault(_Creators);

var _CmsApi = require('../../Services/CmsApi');

var _CmsApi2 = _interopRequireDefault(_CmsApi);

var _CmsSaga = require('./../CmsSaga');

var _CmsSaga2 = _interopRequireDefault(_CmsSaga);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _marked = /*#__PURE__*/_regenerator2.default.mark(getCmsAppSaga);

// create api
var api = _CmsApi2.default.create();

// start the daemons
function getCmsAppSaga(meta) {
  return _regenerator2.default.wrap(function getCmsAppSaga$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return [(0, _effects.fork)((0, _CmsSaga2.default)(api).watchApp)];

        case 2:
          _context.next = 4;
          return (0, _effects.put)(_Creators2.default.getCmsAppAttempt(meta));

        case 4:
        case 'end':
          return _context.stop();
      }
    }
  }, _marked, this);
}