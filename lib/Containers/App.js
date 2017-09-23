'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _reactHelmet = require('react-helmet');

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

var _Creators = require('../Actions/Creators');

var _Creators2 = _interopRequireDefault(_Creators);

var _CmsSelector = require('../Selectors/CmsSelector');

var _GetCmsAppSaga = require('../Sagas/Preloaders/GetCmsAppSaga');

var _GetCmsAppSaga2 = _interopRequireDefault(_GetCmsAppSaga);

var _reactFoundation = require('react-foundation');

var _booshReactComponents = require('boosh-react-components');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* Components */


/* Selectors */

/* React */
var App = function (_React$Component) {
  (0, _inherits3.default)(App, _React$Component);

  function App() {
    (0, _classCallCheck3.default)(this, App);
    return (0, _possibleConstructorReturn3.default)(this, (App.__proto__ || (0, _getPrototypeOf2.default)(App)).apply(this, arguments));
  }

  (0, _createClass3.default)(App, [{
    key: 'getData',
    value: function getData(appId) {
      this.props.dispatch(_Creators2.default.getCmsAppAttempt({ appId: appId }));
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {

      // get cms app data
      //this.getData(Config.cms.appId);
      this.getData('example');

      // auto login
      if (typeof window != "undefined") {
        var accessToken = window.localStorage.getItem('accessToken') || null;

        //accessToken = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjVkYWU3MDFmM2UzMGFiMDc2NDFmNzU2YWU3OTA4ZmRmZGEwYTFiYjYzZDg4ZWQ1ZmMzMGQyYjQ3NjVlZDI2NTY3OTRiZTBmMzc4MzQ0MmNlIn0.eyJhdWQiOiIyIiwianRpIjoiNWRhZTcwMWYzZTMwYWIwNzY0MWY3NTZhZTc5MDhmZGZkYTBhMWJiNjNkODhlZDVmYzMwZDJiNDc2NWVkMjY1Njc5NGJlMGYzNzgzNDQyY2UiLCJpYXQiOjE0OTI5MDEyMTksIm5iZiI6MTQ5MjkwMTIxOSwiZXhwIjoxNTI0NDM3MjE5LCJzdWIiOiIyIiwic2NvcGVzIjpbImJhc2ljIl19.TAgsiWs2pAsA6x8AcVZC2TmyAKgIHkx9oPQ9g2i6CYuQge-I9IN78poTUes3va0spGULHGLIxu3iyGyw2mGsxSJkzBVocIfkViNyeKVtBUUJd9iXPjZaaGsJrbQSaL0Y864es05Ew2wSE0XXpn_cuuTxPi_d_X26CyLCeuf0dvXTSNLnQ-DdfqvWKaAwrIApaQy3AkrKmjcKmIMZBxZSZ2lpRjSef-ZxkQXx4Rxhr106GPSMMgZ8mSO4jODLPXxMtj8qD82K6pYBVWosHMINqgeEZaSqvESASx7EZVLtmxwi63iwvq_7jGkKx7qfA4fL9nfnWSbHFbk31fulzKCvKfkm6ES07XSAHu7wiezBSZEtBHLnbBjjHZX5VjZee06ou4j81OOgOAPqvkMbDXDOML_FJHUpULNj1SwcIwvdydDWrvgp2-MOABcggM1JcHefGFh3JuCOEH1HUWFP_sUs9pic7OxNXlfYs5jnbezVJiuj-crA9p-veMGyk_U7stNxymRq1pbrQ6K4WrRDnJQw92iWO-PmK7mx3R9XJy9MgEPKU_bNUwS_O8tG8OfkXcplpGZpG8d_EG7pfE5bqMvOr7trsqqlz5AngHkuWioGoxVYK0yQp86vyVf5WHD_v7Tryq9GvSDxtvSdFyaBthfIWfpQ-jsswLPFxFMsujm9aWo"

        //let username = window.localStorage.getItem('username') || null;
        //console.log('APP START',username, accessToken)
        /*if (accessToken && accessToken != "undefined" && username && username != "undefined") {
          this.props.dispatch(AuthActions.getMe({ username: username, accessToken: accessToken }));
        }*/
        if (accessToken && accessToken != "undefined") {
          //this.props.dispatch(AuthActions.getMe({ accessToken: accessToken }));
        }
      }

      // test
      //this.props.dispatch(Actions.getActivityAttempt(null, null, null));
      //this.props.dispatch(Actions.getNotificationsAttempt(null, null, null));
      //this.props.dispatch(Actions.getCnnAttempt('TopStories'));

      /*const temp = yield select((state) => state.weather.temperature)
      // only fetch new temps when we don't have one yet
      if (!R.is(Number, temp)) {
        yield put(Actions.getTemperatureAttempt('Los Angeles'))
      }*/
    }
  }, {
    key: 'render',
    value: function render() {
      if (!this.props.app) {
        return _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement('img', { className: 'loading', src: "/cdn/img/loading.gif" })
        );
      }
      var meta = this.props.app.meta || {};
      // remove Unknown props to avoid React Warnings
      var _props = this.props,
          app = _props.app,
          dispatch = _props.dispatch,
          history = _props.history,
          location = _props.location,
          params = _props.params,
          route = _props.route,
          routes = _props.routes,
          routeParams = _props.routeParams,
          rest = (0, _objectWithoutProperties3.default)(_props, ['app', 'dispatch', 'history', 'location', 'params', 'route', 'routes', 'routeParams']);

      return _react2.default.createElement(
        _booshReactComponents.Layout,
        { app: app },
        _react2.default.createElement(_reactHelmet2.default, {
          htmlAttributes: { "lang": "en", "amp": undefined },
          title: meta.defaultTitle,
          titleTemplate: meta.title + ' - %s',
          defaultTitle: meta.defaultTitle,
          meta: [].concat((0, _toConsumableArray3.default)(meta.properties)) }),
        _react2.default.createElement('div', (0, _extends3.default)({ className: 'app' }, rest))
      );
    }
  }]);
  return App;
}(_react2.default.Component);
//import { getMe, AuthActions } from 'boosh-react-auth'

/* Sagas */


/* Config */
//import Config from '../../config'

/* Actions */


var mapStateToProps = function mapStateToProps(state, props) {
  return {
    app: (0, _CmsSelector.getApp)(state, props)
  };
};

function preload(params, req) {
  return [[_GetCmsAppSaga2.default, { appId: Config.cmsId }]];
}
App.preload = preload;

exports.default = (0, _reactRedux.connect)(mapStateToProps)(App);