'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _Page = require('./Containers/Page');

var _Page2 = _interopRequireDefault(_Page);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  var routes = _react2.default.createElement(
    _reactRouter.Route,
    { path: '/' },
    _react2.default.createElement(_reactRouter.IndexRoute, { component: _Page2.default }),
    _react2.default.createElement(_reactRouter.Route, { path: '/pages/*', component: _Page2.default })
  );
  return routes;
};

module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yb3V0ZXMuanMiXSwibmFtZXMiOlsicm91dGVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQTs7OztBQUNBOztBQUVBOzs7Ozs7a0JBRWUsWUFBTTtBQUNuQixNQUFNQSxTQUNKO0FBQUE7QUFBQSxNQUFPLE1BQUssR0FBWjtBQUNFLDZEQUFZLHlCQUFaLEdBREY7QUFFRSx3REFBTyxNQUFLLFVBQVosRUFBdUIseUJBQXZCO0FBRkYsR0FERjtBQU1BLFNBQU9BLE1BQVA7QUFDRCxDIiwiZmlsZSI6InJvdXRlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgUm91dGUsIEluZGV4Um91dGUgfSBmcm9tICdyZWFjdC1yb3V0ZXInXG5cbmltcG9ydCBQYWdlIGZyb20gJy4vQ29udGFpbmVycy9QYWdlJ1xuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XG4gIGNvbnN0IHJvdXRlcyA9IChcbiAgICA8Um91dGUgcGF0aD1cIi9cIj5cbiAgICAgIDxJbmRleFJvdXRlIGNvbXBvbmVudD17UGFnZX0gLz5cbiAgICAgIDxSb3V0ZSBwYXRoPVwiL3BhZ2VzLypcIiBjb21wb25lbnQ9e1BhZ2V9IC8+XG4gICAgPC9Sb3V0ZT5cbiAgKTtcbiAgcmV0dXJuIHJvdXRlcztcbn07XG4iXX0=