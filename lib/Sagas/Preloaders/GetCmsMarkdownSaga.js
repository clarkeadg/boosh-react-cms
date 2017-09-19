'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

exports.default = getCmsMarkdownSaga;

var _effects = require('redux-saga/effects');

var _Creators = require('../../Actions/Creators');

var _Creators2 = _interopRequireDefault(_Creators);

var _CmsApi = require('../../Services/CmsApi');

var _CmsApi2 = _interopRequireDefault(_CmsApi);

var _CmsSaga = require('./../CmsSaga');

var _CmsSaga2 = _interopRequireDefault(_CmsSaga);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _marked = /*#__PURE__*/_regenerator2.default.mark(getCmsMarkdownSaga);

// create api
var api = _CmsApi2.default.create();

// start the daemons
function getCmsMarkdownSaga(meta) {
  return _regenerator2.default.wrap(function getCmsMarkdownSaga$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return [(0, _effects.fork)((0, _CmsSaga2.default)(api).watchMarkdown)];

        case 2:
          _context.next = 4;
          return (0, _effects.put)(_Creators2.default.getCmsMarkdownAttempt(meta));

        case 4:
        case 'end':
          return _context.stop();
      }
    }
  }, _marked, this);
}
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9TYWdhcy9QcmVsb2FkZXJzL0dldENtc01hcmtkb3duU2FnYS5qcyJdLCJuYW1lcyI6WyJnZXRDbXNNYXJrZG93blNhZ2EiLCJhcGkiLCJjcmVhdGUiLCJtZXRhIiwid2F0Y2hNYXJrZG93biIsImdldENtc01hcmtkb3duQXR0ZW1wdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztrQkFVMEJBLGtCOztBQVYxQjs7QUFFQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztzREFNMEJBLGtCOztBQUoxQjtBQUNBLElBQU1DLE1BQU0saUJBQU9DLE1BQVAsRUFBWjs7QUFFQTtBQUNlLFNBQVdGLGtCQUFYLENBQThCRyxJQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFDUCxDQUNKLG1CQUFLLHVCQUFXRixHQUFYLEVBQWdCRyxhQUFyQixDQURJLENBRE87O0FBQUE7QUFBQTtBQUFBLGlCQUlQLGtCQUFJLG1CQUFRQyxxQkFBUixDQUE4QkYsSUFBOUIsQ0FBSixDQUpPOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBIiwiZmlsZSI6IkdldENtc01hcmtkb3duU2FnYS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGZvcmssIHB1dCB9IGZyb20gJ3JlZHV4LXNhZ2EvZWZmZWN0cydcblxuaW1wb3J0IEFjdGlvbnMgZnJvbSAnLi4vLi4vQWN0aW9ucy9DcmVhdG9ycydcbmltcG9ydCBDbXNBcGkgZnJvbSAnLi4vLi4vU2VydmljZXMvQ21zQXBpJ1xuaW1wb3J0IEdldENtc1NhZ2EgZnJvbSAnLi8uLi9DbXNTYWdhJ1xuXG4vLyBjcmVhdGUgYXBpXG5jb25zdCBhcGkgPSBDbXNBcGkuY3JlYXRlKClcblxuLy8gc3RhcnQgdGhlIGRhZW1vbnNcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICogZ2V0Q21zTWFya2Rvd25TYWdhKG1ldGEpIHtcbiAgeWllbGQgW1xuICAgIGZvcmsoR2V0Q21zU2FnYShhcGkpLndhdGNoTWFya2Rvd24pXG4gIF1cbiAgeWllbGQgcHV0KEFjdGlvbnMuZ2V0Q21zTWFya2Rvd25BdHRlbXB0KG1ldGEpKVxufVxuIl19