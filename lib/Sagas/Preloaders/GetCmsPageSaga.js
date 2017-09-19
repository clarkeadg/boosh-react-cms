'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

exports.default = getCmsPageSaga;

var _effects = require('redux-saga/effects');

var _Creators = require('../../Actions/Creators');

var _Creators2 = _interopRequireDefault(_Creators);

var _CmsApi = require('../../Services/CmsApi');

var _CmsApi2 = _interopRequireDefault(_CmsApi);

var _CmsSaga = require('./../CmsSaga');

var _CmsSaga2 = _interopRequireDefault(_CmsSaga);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _marked = /*#__PURE__*/_regenerator2.default.mark(getCmsPageSaga);

// create api
var api = _CmsApi2.default.create();

// start the daemons
function getCmsPageSaga(meta) {
  return _regenerator2.default.wrap(function getCmsPageSaga$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return [(0, _effects.fork)((0, _CmsSaga2.default)(api).watchPage)];

        case 2:
          _context.next = 4;
          return (0, _effects.put)(_Creators2.default.getCmsPageAttempt(meta));

        case 4:
        case 'end':
          return _context.stop();
      }
    }
  }, _marked, this);
}
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9TYWdhcy9QcmVsb2FkZXJzL0dldENtc1BhZ2VTYWdhLmpzIl0sIm5hbWVzIjpbImdldENtc1BhZ2VTYWdhIiwiYXBpIiwiY3JlYXRlIiwibWV0YSIsIndhdGNoUGFnZSIsImdldENtc1BhZ2VBdHRlbXB0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O2tCQVUwQkEsYzs7QUFWMUI7O0FBRUE7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7c0RBTTBCQSxjOztBQUoxQjtBQUNBLElBQU1DLE1BQU0saUJBQU9DLE1BQVAsRUFBWjs7QUFFQTtBQUNlLFNBQVdGLGNBQVgsQ0FBMEJHLElBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUNQLENBQ0osbUJBQUssdUJBQVdGLEdBQVgsRUFBZ0JHLFNBQXJCLENBREksQ0FETzs7QUFBQTtBQUFBO0FBQUEsaUJBSVAsa0JBQUksbUJBQVFDLGlCQUFSLENBQTBCRixJQUExQixDQUFKLENBSk87O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoiR2V0Q21zUGFnZVNhZ2EuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBmb3JrLCBwdXQgfSBmcm9tICdyZWR1eC1zYWdhL2VmZmVjdHMnXG5cbmltcG9ydCBBY3Rpb25zIGZyb20gJy4uLy4uL0FjdGlvbnMvQ3JlYXRvcnMnXG5pbXBvcnQgQ21zQXBpIGZyb20gJy4uLy4uL1NlcnZpY2VzL0Ntc0FwaSdcbmltcG9ydCBHZXRDbXNTYWdhIGZyb20gJy4vLi4vQ21zU2FnYSdcblxuLy8gY3JlYXRlIGFwaVxuY29uc3QgYXBpID0gQ21zQXBpLmNyZWF0ZSgpXG5cbi8vIHN0YXJ0IHRoZSBkYWVtb25zXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAqIGdldENtc1BhZ2VTYWdhKG1ldGEpIHtcbiAgeWllbGQgW1xuICAgIGZvcmsoR2V0Q21zU2FnYShhcGkpLndhdGNoUGFnZSlcbiAgXVxuICB5aWVsZCBwdXQoQWN0aW9ucy5nZXRDbXNQYWdlQXR0ZW1wdChtZXRhKSlcbn1cbiJdfQ==