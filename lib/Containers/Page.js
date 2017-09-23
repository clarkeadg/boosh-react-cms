'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var _GetCmsPageSaga = require('../Sagas/Preloaders/GetCmsPageSaga');

var _GetCmsPageSaga2 = _interopRequireDefault(_GetCmsPageSaga);

var _GetCmsMarkdownSaga = require('../Sagas/Preloaders/GetCmsMarkdownSaga');

var _GetCmsMarkdownSaga2 = _interopRequireDefault(_GetCmsMarkdownSaga);

var _reactFoundation = require('react-foundation');

var _reactRemarkable = require('react-remarkable');

var _reactRemarkable2 = _interopRequireDefault(_reactRemarkable);

var _booshReactComponents = require('boosh-react-components');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* Selectors */

/* React */
var Page = function (_React$Component) {
  (0, _inherits3.default)(Page, _React$Component);

  function Page() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Page);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Page.__proto__ || (0, _getPrototypeOf2.default)(Page)).call.apply(_ref, [this].concat(args))), _this), _this.renderPortlet = function (data) {
      var cont = data.items || '';
      var className = data.className || '';

      if (!cont.component) {
        return _react2.default.createElement(_booshReactComponents.Portlet, { className: className, title: data.title || '', cont: cont });
      }

      switch (cont.component) {
        case 'markdown':
          var html = _this.props.markdown;
          return _react2.default.createElement(_booshReactComponents.Portlet, { className: className, title: data.title || '', items: _react2.default.createElement(_reactRemarkable2.default, { source: html }) });
          break;
        /*case 'datagrid':
          return (
            <Portlet className={className} title={data.title || ''} items={
              <DataGrid/>
            } />
          )
        break;*/
        case 'blockgrid':
          return _react2.default.createElement(_booshReactComponents.Portlet, { className: className, title: data.title || '', items: _react2.default.createElement(_booshReactComponents.BlockGrid, { data: cont.data }) });
          break;
        case 'list':
          return _react2.default.createElement(_booshReactComponents.Portlet, { className: className, title: data.title || '', items: _react2.default.createElement(_booshReactComponents.List, { itemType: cont.itemType, data: cont.data }) });
          break;
        case 'carousel':
          return _react2.default.createElement(_booshReactComponents.Portlet, { className: className, title: data.title || '', items: _react2.default.createElement(_booshReactComponents.Carousel, { slides: cont.slides || '' }) });
          break;
        case 'nav':
          if (!cont.data) return false;
          if (!cont.data.items) return false;
          return _react2.default.createElement(_booshReactComponents.Portlet, { className: className, title: data.title || '', items: _react2.default.createElement(_booshReactComponents.Nav, { isVertical: cont.data.isVertical, items: cont.data.items }) });
          break;
        /*case 'form':
          if (!cont.data) return false;
          return (
            <Portlet className={className} title={data.title || ''} items={
              <JsonForm
                schema={cont.data.schema}
                uiSchema={cont.data.uiSchema}
                formData={cont.data.formData}
                buttons = {cont.buttons} />
            } />
          )
        break;
        case 'gallery':
          return (
            <Portlet className={className} title={data.title || ''} items={
              <Gallery items={cont.items || ''}/>
            } />
          )
        break;*/
        default:
          return false;
          break;
      }
    }, _this.renderRow = function (data) {
      if (!data) return false;
      if (!data.portlets) return false;
      var z = _this;
      return _react2.default.createElement(
        _reactFoundation.Row,
        { className: 'display' },
        _react2.default.createElement(
          _reactFoundation.Column,
          { small: 12 },
          data.portlets.map(function (item, id) {
            return _react2.default.createElement(
              'div',
              { key: id },
              z.renderPortlet(item)
            );
          })
        )
      );
    }, _this.renderColumns = function (dataLeft, dataCenter, dataRight) {
      var z = _this;

      // error checking
      dataLeft = dataLeft && dataLeft.portlets ? dataLeft : { portlets: null };
      dataCenter = dataCenter && dataCenter.portlets ? dataCenter : { portlets: null };
      dataRight = dataRight && dataRight.portlets ? dataRight : { portlets: null

        /* cases
          000
          100
          110
          101
          111
          010
          011
          001
        */

      };if (!dataLeft && !dataCenter && !dataRight) return false;

      if (dataLeft.portlets && !dataCenter.portlets && !dataRight.portlets) {
        return _react2.default.createElement(
          _reactFoundation.Row,
          { className: 'display' },
          _react2.default.createElement(
            _reactFoundation.Column,
            { small: 12 },
            dataLeft.portlets.map(function (item, id) {
              return _react2.default.createElement(
                'div',
                { key: id },
                z.renderPortlet(item)
              );
            })
          )
        );
      }

      if (dataLeft.portlets && dataCenter.portlets && !dataRight.portlets) {
        return _react2.default.createElement(
          _reactFoundation.Row,
          { className: 'display' },
          _react2.default.createElement(
            _reactFoundation.Column,
            { small: 4 },
            dataLeft.portlets.map(function (item, id) {
              return _react2.default.createElement(
                'div',
                { key: id },
                z.renderPortlet(item)
              );
            })
          ),
          _react2.default.createElement(
            _reactFoundation.Column,
            { small: 8 },
            dataCenter.portlets.map(function (item, id) {
              return _react2.default.createElement(
                'div',
                { key: id },
                z.renderPortlet(item)
              );
            })
          )
        );
      }

      if (dataLeft.portlets && !dataCenter.portlets && dataRight.portlets) {
        return _react2.default.createElement(
          _reactFoundation.Row,
          { className: 'display' },
          _react2.default.createElement(
            _reactFoundation.Column,
            { small: 6 },
            dataLeft.portlets.map(function (item, id) {
              return _react2.default.createElement(
                'div',
                { key: id },
                z.renderPortlet(item)
              );
            })
          ),
          _react2.default.createElement(
            _reactFoundation.Column,
            { small: 6 },
            dataRight.portlets.map(function (item, id) {
              return _react2.default.createElement(
                'div',
                { key: id },
                z.renderPortlet(item)
              );
            })
          )
        );
      }

      if (dataLeft.portlets && dataCenter.portlets && dataRight.portlets) {
        return _react2.default.createElement(
          _reactFoundation.Row,
          { className: 'display' },
          _react2.default.createElement(
            _reactFoundation.Column,
            { small: 3 },
            dataLeft.portlets.map(function (item, id) {
              return _react2.default.createElement(
                'div',
                { key: id },
                z.renderPortlet(item)
              );
            })
          ),
          _react2.default.createElement(
            _reactFoundation.Column,
            { small: 6 },
            dataCenter.portlets.map(function (item, id) {
              return _react2.default.createElement(
                'div',
                { key: id },
                z.renderPortlet(item)
              );
            })
          ),
          _react2.default.createElement(
            _reactFoundation.Column,
            { small: 3 },
            dataRight.portlets.map(function (item, id) {
              return _react2.default.createElement(
                'div',
                { key: id },
                z.renderPortlet(item)
              );
            })
          )
        );
      }

      if (!dataLeft.portlets && dataCenter.portlets && !dataRight.portlets) {
        return _react2.default.createElement(
          _reactFoundation.Row,
          { className: 'display' },
          _react2.default.createElement(
            _reactFoundation.Column,
            { small: 12 },
            dataCenter.portlets.map(function (item, id) {
              return _react2.default.createElement(
                'div',
                { key: id },
                z.renderPortlet(item)
              );
            })
          )
        );
      }

      if (!dataLeft.portlets && dataCenter.portlets && dataRight.portlets) {
        return _react2.default.createElement(
          _reactFoundation.Row,
          { className: 'display' },
          _react2.default.createElement(
            _reactFoundation.Column,
            { small: 8 },
            dataCenter.portlets.map(function (item, id) {
              return _react2.default.createElement(
                'div',
                { key: id },
                z.renderPortlet(item)
              );
            })
          ),
          _react2.default.createElement(
            _reactFoundation.Column,
            { small: 4 },
            dataRight.portlets.map(function (item, id) {
              return _react2.default.createElement(
                'div',
                { key: id },
                z.renderPortlet(item)
              );
            })
          )
        );
      }

      if (!dataLeft.portlets && !dataCenter.portlets && dataRight.portlets) {
        return _react2.default.createElement(
          _reactFoundation.Row,
          { className: 'display' },
          _react2.default.createElement(
            _reactFoundation.Column,
            { small: 12 },
            dataRight.portlets.map(function (item, id) {
              return _react2.default.createElement(
                'div',
                { key: id },
                z.renderPortlet(item)
              );
            })
          )
        );
      }

      return false;
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Page, [{
    key: 'getData',
    value: function getData(appId, pageKey) {
      if (!appId || !pageKey) return false;

      var Meta = {
        appId: appId,
        pageId: pageKey
      };
      this.props.dispatch(_Creators2.default.getCmsPageAttempt(Meta));
      this.props.dispatch(_Creators2.default.getCmsMarkdownAttempt(Meta));
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _props = this.props,
          appId = _props.appId,
          pageKey = _props.pageKey;

      console.log('pageKey', pageKey);
      this.getData(appId, pageKey);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(newProps) {
      if (newProps.pageKey !== this.props.pageKey) {
        this.getData(newProps.appId, newProps.pageKey);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var data = this.props.data;

      if (!data) return false;

      var title = data.meta ? data.meta.title : "";

      return _react2.default.createElement(
        'div',
        { className: 'page' },
        _react2.default.createElement(_reactHelmet2.default, { title: title }),
        this.renderRow(data.top),
        this.renderColumns(data.left, data.center, data.right),
        this.renderRow(data.bottom)
      );
    }
  }]);
  return Page;
}(_react2.default.Component);

/* Components */


/* Sagas */


/* Actions */


var mapStateToProps = function mapStateToProps(state, props) {
  return {
    appId: (0, _CmsSelector.getAppId)(state, props),
    pageKey: (0, _CmsSelector.getPageKey)(state, props),
    data: (0, _CmsSelector.getPageData)(state, props),
    markdown: (0, _CmsSelector.getPageMarkdown)(state, props)
  };
};

function preload(params, req) {
  var meta = { appId: 'example', pageId: req.originalUrl.slice(1) };
  return [[_GetCmsPageSaga2.default, meta], [_GetCmsMarkdownSaga2.default, meta]];
}
Page.preload = preload;

exports.default = (0, _reactRedux.connect)(mapStateToProps)(Page);