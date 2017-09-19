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
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9TYWdhcy9QcmVsb2FkZXJzL0dldENtc0FwcFNhZ2EuanMiXSwibmFtZXMiOlsiZ2V0Q21zQXBwU2FnYSIsImFwaSIsImNyZWF0ZSIsIm1ldGEiLCJ3YXRjaEFwcCIsImdldENtc0FwcEF0dGVtcHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7a0JBVTBCQSxhOztBQVYxQjs7QUFFQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztzREFNMEJBLGE7O0FBSjFCO0FBQ0EsSUFBTUMsTUFBTSxpQkFBT0MsTUFBUCxFQUFaOztBQUVBO0FBQ2UsU0FBV0YsYUFBWCxDQUF5QkcsSUFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQ1AsQ0FDSixtQkFBSyx1QkFBV0YsR0FBWCxFQUFnQkcsUUFBckIsQ0FESSxDQURPOztBQUFBO0FBQUE7QUFBQSxpQkFJUCxrQkFBSSxtQkFBUUMsZ0JBQVIsQ0FBeUJGLElBQXpCLENBQUosQ0FKTzs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiJHZXRDbXNBcHBTYWdhLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZm9yaywgcHV0IH0gZnJvbSAncmVkdXgtc2FnYS9lZmZlY3RzJ1xuXG5pbXBvcnQgQWN0aW9ucyBmcm9tICcuLi8uLi9BY3Rpb25zL0NyZWF0b3JzJ1xuaW1wb3J0IENtc0FwaSBmcm9tICcuLi8uLi9TZXJ2aWNlcy9DbXNBcGknXG5pbXBvcnQgR2V0Q21zU2FnYSBmcm9tICcuLy4uL0Ntc1NhZ2EnXG5cbi8vIGNyZWF0ZSBhcGlcbmNvbnN0IGFwaSA9IENtc0FwaS5jcmVhdGUoKVxuXG4vLyBzdGFydCB0aGUgZGFlbW9uc1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKiBnZXRDbXNBcHBTYWdhKG1ldGEpIHtcbiAgeWllbGQgW1xuICAgIGZvcmsoR2V0Q21zU2FnYShhcGkpLndhdGNoQXBwKVxuICBdXG4gIHlpZWxkIHB1dChBY3Rpb25zLmdldENtc0FwcEF0dGVtcHQobWV0YSkpXG59XG4iXX0=