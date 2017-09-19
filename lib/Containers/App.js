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

var _redboxReact2 = require('redbox-react');

var _redboxReact3 = _interopRequireDefault(_redboxReact2);

var _react2 = require('react');

var _react3 = _interopRequireDefault(_react2);

var _reactTransformCatchErrors3 = require('react-transform-catch-errors');

var _reactTransformCatchErrors4 = _interopRequireDefault(_reactTransformCatchErrors3);

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

var _components = {
  App: {
    displayName: 'App'
  }
};

var _reactTransformCatchErrors2 = (0, _reactTransformCatchErrors4.default)({
  filename: 'src/Containers/App.js',
  components: _components,
  locals: [],
  imports: [_react3.default, _redboxReact3.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _reactTransformCatchErrors2(Component, id);
  };
}
/* React */


/* Config */
//import Config from '../../config'

/* Actions */


/* Selectors */

//import { getMe, AuthActions } from 'boosh-react-auth'

/* Sagas */


/* Components */


var App = _wrapComponent('App')(function (_React$Component) {
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
        return _react3.default.createElement(
          'div',
          null,
          _react3.default.createElement('img', { className: 'loading', src: "/cdn/img/loading.gif" })
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

      return _react3.default.createElement(
        _booshReactComponents.Layout,
        { app: app },
        _react3.default.createElement(_reactHelmet2.default, {
          htmlAttributes: { "lang": "en", "amp": undefined },
          title: meta.defaultTitle,
          titleTemplate: meta.title + ' - %s',
          defaultTitle: meta.defaultTitle,
          meta: [].concat((0, _toConsumableArray3.default)(meta.properties)) }),
        _react3.default.createElement('div', (0, _extends3.default)({ className: 'app' }, rest))
      );
    }
  }]);
  return App;
}(_react3.default.Component));

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
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9Db250YWluZXJzL0FwcC5qcyJdLCJuYW1lcyI6WyJhcHBJZCIsInByb3BzIiwiZGlzcGF0Y2giLCJnZXRDbXNBcHBBdHRlbXB0IiwiZ2V0RGF0YSIsIndpbmRvdyIsImFjY2Vzc1Rva2VuIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImFwcCIsIm1ldGEiLCJoaXN0b3J5IiwibG9jYXRpb24iLCJwYXJhbXMiLCJyb3V0ZSIsInJvdXRlcyIsInJvdXRlUGFyYW1zIiwicmVzdCIsInVuZGVmaW5lZCIsImRlZmF1bHRUaXRsZSIsInRpdGxlIiwicHJvcGVydGllcyIsIkNvbXBvbmVudCIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIiwicHJlbG9hZCIsInJlcSIsIkNvbmZpZyIsImNtc0lkIiwiQXBwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUdBOztBQUNBOzs7O0FBTUE7Ozs7QUFHQTs7QUFJQTs7OztBQUdBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBcEJBOzs7QUFLQTtBQUNBOztBQUVBOzs7QUFHQTs7QUFFQTs7QUFFQTs7O0FBR0E7Ozs7Ozs7Ozs7Ozs7NEJBTVVBLEssRUFBTztBQUNiLFdBQUtDLEtBQUwsQ0FBV0MsUUFBWCxDQUFvQixtQkFBUUMsZ0JBQVIsQ0FBeUIsRUFBRUgsT0FBT0EsS0FBVCxFQUF6QixDQUFwQjtBQUNEOzs7d0NBRW1COztBQUVsQjtBQUNBO0FBQ0EsV0FBS0ksT0FBTCxDQUFhLFNBQWI7O0FBRUE7QUFDQSxVQUFJLE9BQU9DLE1BQVAsSUFBaUIsV0FBckIsRUFBa0M7QUFDaEMsWUFBSUMsY0FBY0QsT0FBT0UsWUFBUCxDQUFvQkMsT0FBcEIsQ0FBNEIsYUFBNUIsS0FBOEMsSUFBaEU7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQSxZQUFJRixlQUFlQSxlQUFlLFdBQWxDLEVBQStDO0FBQzdDO0FBQ0Q7QUFDRjs7QUFFRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7QUFLRDs7OzZCQUVRO0FBQ1AsVUFBSSxDQUFDLEtBQUtMLEtBQUwsQ0FBV1EsR0FBaEIsRUFBcUI7QUFDbkIsZUFDRTtBQUFBO0FBQUE7QUFBSyxpREFBSyxXQUFVLFNBQWYsRUFBeUIsS0FBSyxzQkFBOUI7QUFBTCxTQURGO0FBR0Q7QUFDRCxVQUFJQyxPQUFPLEtBQUtULEtBQUwsQ0FBV1EsR0FBWCxDQUFlQyxJQUFmLElBQXVCLEVBQWxDO0FBQ0E7QUFQTyxtQkFRbUYsS0FBS1QsS0FSeEY7QUFBQSxVQVFDUSxHQVJELFVBUUNBLEdBUkQ7QUFBQSxVQVFNUCxRQVJOLFVBUU1BLFFBUk47QUFBQSxVQVFnQlMsT0FSaEIsVUFRZ0JBLE9BUmhCO0FBQUEsVUFReUJDLFFBUnpCLFVBUXlCQSxRQVJ6QjtBQUFBLFVBUW1DQyxNQVJuQyxVQVFtQ0EsTUFSbkM7QUFBQSxVQVEyQ0MsS0FSM0MsVUFRMkNBLEtBUjNDO0FBQUEsVUFRa0RDLE1BUmxELFVBUWtEQSxNQVJsRDtBQUFBLFVBUTBEQyxXQVIxRCxVQVEwREEsV0FSMUQ7QUFBQSxVQVEwRUMsSUFSMUU7O0FBU1AsYUFDRTtBQUFBO0FBQUEsVUFBUSxLQUFLUixHQUFiO0FBQ0U7QUFDRSwwQkFBZ0IsRUFBQyxRQUFRLElBQVQsRUFBZSxPQUFPUyxTQUF0QixFQURsQjtBQUVFLGlCQUFPUixLQUFLUyxZQUZkO0FBR0UseUJBQWVULEtBQUtVLEtBQUwsR0FBYSxPQUg5QjtBQUlFLHdCQUFjVixLQUFLUyxZQUpyQjtBQUtFLDJEQUFVVCxLQUFLVyxVQUFmLEVBTEYsR0FERjtBQU9FLHNFQUFLLFdBQVUsS0FBZixJQUF5QkosSUFBekI7QUFQRixPQURGO0FBV0Q7OztFQTVEZSxnQkFBTUssUzs7QUFnRXhCLElBQU1DLGtCQUFrQixTQUFsQkEsZUFBa0IsQ0FBQ0MsS0FBRCxFQUFRdkIsS0FBUixFQUFrQjtBQUN4QyxTQUFPO0FBQ0xRLFNBQUsseUJBQU9lLEtBQVAsRUFBY3ZCLEtBQWQ7QUFEQSxHQUFQO0FBR0QsQ0FKRDs7QUFNQSxTQUFTd0IsT0FBVCxDQUFpQlosTUFBakIsRUFBeUJhLEdBQXpCLEVBQThCO0FBQzVCLFNBQU8sQ0FDTCwwQkFBZ0IsRUFBRTFCLE9BQU8yQixPQUFPQyxLQUFoQixFQUFoQixDQURLLENBQVA7QUFHRDtBQUNEQyxJQUFJSixPQUFKLEdBQWNBLE9BQWQ7O2tCQUVlLHlCQUFRRixlQUFSLEVBQXlCTSxHQUF6QixDIiwiZmlsZSI6IkFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLyogUmVhY3QgKi9cbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCBIZWxtZXQgZnJvbSAncmVhY3QtaGVsbWV0J1xuXG4vKiBDb25maWcgKi9cbi8vaW1wb3J0IENvbmZpZyBmcm9tICcuLi8uLi9jb25maWcnXG5cbi8qIEFjdGlvbnMgKi9cbmltcG9ydCBBY3Rpb25zIGZyb20gJy4uL0FjdGlvbnMvQ3JlYXRvcnMnXG5cbi8qIFNlbGVjdG9ycyAqL1xuaW1wb3J0IHsgZ2V0QXBwIH0gZnJvbSAnLi4vU2VsZWN0b3JzL0Ntc1NlbGVjdG9yJ1xuLy9pbXBvcnQgeyBnZXRNZSwgQXV0aEFjdGlvbnMgfSBmcm9tICdib29zaC1yZWFjdC1hdXRoJ1xuXG4vKiBTYWdhcyAqL1xuaW1wb3J0IEdldENtc0FwcFNhZ2EgZnJvbSAnLi4vU2FnYXMvUHJlbG9hZGVycy9HZXRDbXNBcHBTYWdhJ1xuXG4vKiBDb21wb25lbnRzICovXG5pbXBvcnQgeyBSb3csIENvbHVtbiB9IGZyb20gJ3JlYWN0LWZvdW5kYXRpb24nXG5pbXBvcnQgeyBMYXlvdXQgfSBmcm9tICdib29zaC1yZWFjdC1jb21wb25lbnRzJ1xuXG5jbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIGdldERhdGEoYXBwSWQpIHtcbiAgICB0aGlzLnByb3BzLmRpc3BhdGNoKEFjdGlvbnMuZ2V0Q21zQXBwQXR0ZW1wdCh7IGFwcElkOiBhcHBJZCB9KSk7XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcblxuICAgIC8vIGdldCBjbXMgYXBwIGRhdGFcbiAgICAvL3RoaXMuZ2V0RGF0YShDb25maWcuY21zLmFwcElkKTtcbiAgICB0aGlzLmdldERhdGEoJ2V4YW1wbGUnKTtcblxuICAgIC8vIGF1dG8gbG9naW5cbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICBsZXQgYWNjZXNzVG9rZW4gPSB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FjY2Vzc1Rva2VuJykgfHwgbnVsbDtcblxuICAgICAgLy9hY2Nlc3NUb2tlbiA9IFwiZXlKMGVYQWlPaUpLVjFRaUxDSmhiR2NpT2lKU1V6STFOaUlzSW1wMGFTSTZJalZrWVdVM01ERm1NMlV6TUdGaU1EYzJOREZtTnpVMllXVTNPVEE0Wm1SbVpHRXdZVEZpWWpZelpEZzRaV1ExWm1Nek1HUXlZalEzTmpWbFpESTJOVFkzT1RSaVpUQm1NemM0TXpRME1tTmxJbjAuZXlKaGRXUWlPaUl5SWl3aWFuUnBJam9pTldSaFpUY3dNV1l6WlRNd1lXSXdOelkwTVdZM05UWmhaVGM1TURobVpHWmtZVEJoTVdKaU5qTmtPRGhsWkRWbVl6TXdaREppTkRjMk5XVmtNalkxTmpjNU5HSmxNR1l6Tnpnek5EUXlZMlVpTENKcFlYUWlPakUwT1RJNU1ERXlNVGtzSW01aVppSTZNVFE1TWprd01USXhPU3dpWlhod0lqb3hOVEkwTkRNM01qRTVMQ0p6ZFdJaU9pSXlJaXdpYzJOdmNHVnpJanBiSW1KaGMybGpJbDE5LlRBZ3NpV3MycEFzQTZ4OEFjVlpDMlRteUFLZ0lIa3g5b1BROWcyaTZDWXVRZ2UtSTlJTjc4cG9UVWVzM3ZhMHNwR1VMSEdMSXh1M2l5R3l3Mm1Hc3hTSmt6QlZvY0lma1ZpTnllS1Z0QlVVSmQ5aVhQalphYUdzSnJiUVNhTDBZODY0ZXMwNUV3MndTRTBYWHBuX2N1dVR4UGlfZF9YMjZDeUxDZXVmMGR2WFRTTkxuUS1EZGZxdldLYUF3cklBcGFReTNBa3JLbWpjS21JTVpCeFpTWjJscFJqU2VmLVp4a1FYeDRSeGhyMTA2R1BTTU1nWjhtU080ak9ETFBYeE10ajhxRDgySzZwWUJWV29zSE1JTnFnZUVaYVNxdkVTQVN4N0VaVkx0bXh3aTYzaXd2cV83akdrS3g3cWZBNGZMOW5mbldTYkhGYmszMWZ1bHpLQ3ZLZmttNkVTMDdYU0FIdTd3aWV6QlNaRXRCSExuYkJqakhaWDVWalplZTA2b3U0ajgxT09nT0FQcXZrTWJEWERPTUxfRkpIVXBVTE5qMVN3Y0l3dmR5ZERXcnZncDItTU9BQmNnZ00xSmNIZWZHRmgzSnVDT0VIMUhVV0ZQX3NVczlwaWM3T3hOWGxmWXM1am5iZXpWSml1ai1jckE5cC12ZU1HeWtfVTdzdE54eW1ScTFwYnJRNks0V3JSRG5KUXc5MmlXTy1QbUs3bXgzUjlYSnk5TWdFUEtVX2JOVXdTX084dEc4T2ZrWGNwbHBHWnBHOGRfRUc3cGZFNWJxTXZPcjd0cnNxcWx6NUFuZ0hrdVdpb0dveFZZSzB5UXA4NnZ5VmY1V0hEX3Y3VHJ5cTlHdlNEeHR2U2RGeWFCdGhmSVdmcFEtanNzd0xQRnhGTXN1am05YVdvXCJcblxuICAgICAgLy9sZXQgdXNlcm5hbWUgPSB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXJuYW1lJykgfHwgbnVsbDtcbiAgICAgIC8vY29uc29sZS5sb2coJ0FQUCBTVEFSVCcsdXNlcm5hbWUsIGFjY2Vzc1Rva2VuKVxuICAgICAgLyppZiAoYWNjZXNzVG9rZW4gJiYgYWNjZXNzVG9rZW4gIT0gXCJ1bmRlZmluZWRcIiAmJiB1c2VybmFtZSAmJiB1c2VybmFtZSAhPSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goQXV0aEFjdGlvbnMuZ2V0TWUoeyB1c2VybmFtZTogdXNlcm5hbWUsIGFjY2Vzc1Rva2VuOiBhY2Nlc3NUb2tlbiB9KSk7XG4gICAgICB9Ki9cbiAgICAgIGlmIChhY2Nlc3NUb2tlbiAmJiBhY2Nlc3NUb2tlbiAhPSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIC8vdGhpcy5wcm9wcy5kaXNwYXRjaChBdXRoQWN0aW9ucy5nZXRNZSh7IGFjY2Vzc1Rva2VuOiBhY2Nlc3NUb2tlbiB9KSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gdGVzdFxuICAgIC8vdGhpcy5wcm9wcy5kaXNwYXRjaChBY3Rpb25zLmdldEFjdGl2aXR5QXR0ZW1wdChudWxsLCBudWxsLCBudWxsKSk7XG4gICAgLy90aGlzLnByb3BzLmRpc3BhdGNoKEFjdGlvbnMuZ2V0Tm90aWZpY2F0aW9uc0F0dGVtcHQobnVsbCwgbnVsbCwgbnVsbCkpO1xuICAgIC8vdGhpcy5wcm9wcy5kaXNwYXRjaChBY3Rpb25zLmdldENubkF0dGVtcHQoJ1RvcFN0b3JpZXMnKSk7XG5cbiAgICAvKmNvbnN0IHRlbXAgPSB5aWVsZCBzZWxlY3QoKHN0YXRlKSA9PiBzdGF0ZS53ZWF0aGVyLnRlbXBlcmF0dXJlKVxuICAgIC8vIG9ubHkgZmV0Y2ggbmV3IHRlbXBzIHdoZW4gd2UgZG9uJ3QgaGF2ZSBvbmUgeWV0XG4gICAgaWYgKCFSLmlzKE51bWJlciwgdGVtcCkpIHtcbiAgICAgIHlpZWxkIHB1dChBY3Rpb25zLmdldFRlbXBlcmF0dXJlQXR0ZW1wdCgnTG9zIEFuZ2VsZXMnKSlcbiAgICB9Ki9cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBpZiAoIXRoaXMucHJvcHMuYXBwKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PjxpbWcgY2xhc3NOYW1lPVwibG9hZGluZ1wiIHNyYz17XCIvY2RuL2ltZy9sb2FkaW5nLmdpZlwifS8+PC9kaXY+XG4gICAgICApXG4gICAgfVxuICAgIGxldCBtZXRhID0gdGhpcy5wcm9wcy5hcHAubWV0YSB8fCB7fVxuICAgIC8vIHJlbW92ZSBVbmtub3duIHByb3BzIHRvIGF2b2lkIFJlYWN0IFdhcm5pbmdzXG4gICAgY29uc3QgeyBhcHAsIGRpc3BhdGNoLCBoaXN0b3J5LCBsb2NhdGlvbiwgcGFyYW1zLCByb3V0ZSwgcm91dGVzLCByb3V0ZVBhcmFtcywgLi4ucmVzdCB9ID0gdGhpcy5wcm9wc1xuICAgIHJldHVybiAoXG4gICAgICA8TGF5b3V0IGFwcD17YXBwfT5cbiAgICAgICAgPEhlbG1ldFxuICAgICAgICAgIGh0bWxBdHRyaWJ1dGVzPXt7XCJsYW5nXCI6IFwiZW5cIiwgXCJhbXBcIjogdW5kZWZpbmVkfX1cbiAgICAgICAgICB0aXRsZT17bWV0YS5kZWZhdWx0VGl0bGV9XG4gICAgICAgICAgdGl0bGVUZW1wbGF0ZT17bWV0YS50aXRsZSArICcgLSAlcyd9XG4gICAgICAgICAgZGVmYXVsdFRpdGxlPXttZXRhLmRlZmF1bHRUaXRsZX1cbiAgICAgICAgICBtZXRhPXtbLi4ubWV0YS5wcm9wZXJ0aWVzXX0gLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcHBcIiB7Li4ucmVzdH0vPlxuICAgICAgPC9MYXlvdXQ+XG4gICAgKTtcbiAgfVxuXG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSwgcHJvcHMpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBhcHA6IGdldEFwcChzdGF0ZSwgcHJvcHMpXG4gIH1cbn1cblxuZnVuY3Rpb24gcHJlbG9hZChwYXJhbXMsIHJlcSkge1xuICByZXR1cm4gW1xuICAgIFtHZXRDbXNBcHBTYWdhLCB7IGFwcElkOiBDb25maWcuY21zSWR9XVxuICBdXG59XG5BcHAucHJlbG9hZCA9IHByZWxvYWRcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKEFwcClcbiJdfQ==