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

var _GetCmsPageSaga = require('../Sagas/Preloaders/GetCmsPageSaga');

var _GetCmsPageSaga2 = _interopRequireDefault(_GetCmsPageSaga);

var _GetCmsMarkdownSaga = require('../Sagas/Preloaders/GetCmsMarkdownSaga');

var _GetCmsMarkdownSaga2 = _interopRequireDefault(_GetCmsMarkdownSaga);

var _reactFoundation = require('react-foundation');

var _reactRemarkable = require('react-remarkable');

var _reactRemarkable2 = _interopRequireDefault(_reactRemarkable);

var _booshReactComponents = require('boosh-react-components');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _components = {
  Page: {
    displayName: 'Page'
  }
};

var _reactTransformCatchErrors2 = (0, _reactTransformCatchErrors4.default)({
  filename: 'src/Containers/Page.js',
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


/* Actions */


/* Selectors */


/* Sagas */


/* Components */


var Page = _wrapComponent('Page')(function (_React$Component) {
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
        return _react3.default.createElement(_booshReactComponents.Portlet, { className: className, title: data.title || '', cont: cont });
      }

      switch (cont.component) {
        case 'markdown':
          var html = _this.props.markdown;
          return _react3.default.createElement(_booshReactComponents.Portlet, { className: className, title: data.title || '', items: _react3.default.createElement(_reactRemarkable2.default, { source: html }) });
          break;
        /*case 'datagrid':
          return (
            <Portlet className={className} title={data.title || ''} items={
              <DataGrid/>
            } />
          )
        break;*/
        case 'blockgrid':
          return _react3.default.createElement(_booshReactComponents.Portlet, { className: className, title: data.title || '', items: _react3.default.createElement(_booshReactComponents.BlockGrid, { data: cont.data }) });
          break;
        case 'list':
          return _react3.default.createElement(_booshReactComponents.Portlet, { className: className, title: data.title || '', items: _react3.default.createElement(_booshReactComponents.List, { itemType: cont.itemType, data: cont.data }) });
          break;
        case 'carousel':
          return _react3.default.createElement(_booshReactComponents.Portlet, { className: className, title: data.title || '', items: _react3.default.createElement(_booshReactComponents.Carousel, { slides: cont.slides || '' }) });
          break;
        case 'nav':
          if (!cont.data) return false;
          if (!cont.data.items) return false;
          return _react3.default.createElement(_booshReactComponents.Portlet, { className: className, title: data.title || '', items: _react3.default.createElement(_booshReactComponents.Nav, { isVertical: cont.data.isVertical, items: cont.data.items }) });
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
      return _react3.default.createElement(
        _reactFoundation.Row,
        { className: 'display' },
        _react3.default.createElement(
          _reactFoundation.Column,
          { small: 12 },
          data.portlets.map(function (item, id) {
            return _react3.default.createElement(
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
        return _react3.default.createElement(
          _reactFoundation.Row,
          { className: 'display' },
          _react3.default.createElement(
            _reactFoundation.Column,
            { small: 12 },
            dataLeft.portlets.map(function (item, id) {
              return _react3.default.createElement(
                'div',
                { key: id },
                z.renderPortlet(item)
              );
            })
          )
        );
      }

      if (dataLeft.portlets && dataCenter.portlets && !dataRight.portlets) {
        return _react3.default.createElement(
          _reactFoundation.Row,
          { className: 'display' },
          _react3.default.createElement(
            _reactFoundation.Column,
            { small: 4 },
            dataLeft.portlets.map(function (item, id) {
              return _react3.default.createElement(
                'div',
                { key: id },
                z.renderPortlet(item)
              );
            })
          ),
          _react3.default.createElement(
            _reactFoundation.Column,
            { small: 8 },
            dataCenter.portlets.map(function (item, id) {
              return _react3.default.createElement(
                'div',
                { key: id },
                z.renderPortlet(item)
              );
            })
          )
        );
      }

      if (dataLeft.portlets && !dataCenter.portlets && dataRight.portlets) {
        return _react3.default.createElement(
          _reactFoundation.Row,
          { className: 'display' },
          _react3.default.createElement(
            _reactFoundation.Column,
            { small: 6 },
            dataLeft.portlets.map(function (item, id) {
              return _react3.default.createElement(
                'div',
                { key: id },
                z.renderPortlet(item)
              );
            })
          ),
          _react3.default.createElement(
            _reactFoundation.Column,
            { small: 6 },
            dataRight.portlets.map(function (item, id) {
              return _react3.default.createElement(
                'div',
                { key: id },
                z.renderPortlet(item)
              );
            })
          )
        );
      }

      if (dataLeft.portlets && dataCenter.portlets && dataRight.portlets) {
        return _react3.default.createElement(
          _reactFoundation.Row,
          { className: 'display' },
          _react3.default.createElement(
            _reactFoundation.Column,
            { small: 3 },
            dataLeft.portlets.map(function (item, id) {
              return _react3.default.createElement(
                'div',
                { key: id },
                z.renderPortlet(item)
              );
            })
          ),
          _react3.default.createElement(
            _reactFoundation.Column,
            { small: 6 },
            dataCenter.portlets.map(function (item, id) {
              return _react3.default.createElement(
                'div',
                { key: id },
                z.renderPortlet(item)
              );
            })
          ),
          _react3.default.createElement(
            _reactFoundation.Column,
            { small: 3 },
            dataRight.portlets.map(function (item, id) {
              return _react3.default.createElement(
                'div',
                { key: id },
                z.renderPortlet(item)
              );
            })
          )
        );
      }

      if (!dataLeft.portlets && dataCenter.portlets && !dataRight.portlets) {
        return _react3.default.createElement(
          _reactFoundation.Row,
          { className: 'display' },
          _react3.default.createElement(
            _reactFoundation.Column,
            { small: 12 },
            dataCenter.portlets.map(function (item, id) {
              return _react3.default.createElement(
                'div',
                { key: id },
                z.renderPortlet(item)
              );
            })
          )
        );
      }

      if (!dataLeft.portlets && dataCenter.portlets && dataRight.portlets) {
        return _react3.default.createElement(
          _reactFoundation.Row,
          { className: 'display' },
          _react3.default.createElement(
            _reactFoundation.Column,
            { small: 8 },
            dataCenter.portlets.map(function (item, id) {
              return _react3.default.createElement(
                'div',
                { key: id },
                z.renderPortlet(item)
              );
            })
          ),
          _react3.default.createElement(
            _reactFoundation.Column,
            { small: 4 },
            dataRight.portlets.map(function (item, id) {
              return _react3.default.createElement(
                'div',
                { key: id },
                z.renderPortlet(item)
              );
            })
          )
        );
      }

      if (!dataLeft.portlets && !dataCenter.portlets && dataRight.portlets) {
        return _react3.default.createElement(
          _reactFoundation.Row,
          { className: 'display' },
          _react3.default.createElement(
            _reactFoundation.Column,
            { small: 12 },
            dataRight.portlets.map(function (item, id) {
              return _react3.default.createElement(
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

      return _react3.default.createElement(
        'div',
        { className: 'page' },
        _react3.default.createElement(_reactHelmet2.default, { title: title }),
        this.renderRow(data.top),
        this.renderColumns(data.left, data.center, data.right),
        this.renderRow(data.bottom)
      );
    }
  }]);
  return Page;
}(_react3.default.Component));

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
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9Db250YWluZXJzL1BhZ2UuanMiXSwibmFtZXMiOlsicmVuZGVyUG9ydGxldCIsImRhdGEiLCJjb250IiwiaXRlbXMiLCJjbGFzc05hbWUiLCJjb21wb25lbnQiLCJ0aXRsZSIsImh0bWwiLCJwcm9wcyIsIm1hcmtkb3duIiwiaXRlbVR5cGUiLCJzbGlkZXMiLCJpc1ZlcnRpY2FsIiwicmVuZGVyUm93IiwicG9ydGxldHMiLCJ6IiwibWFwIiwiaXRlbSIsImlkIiwicmVuZGVyQ29sdW1ucyIsImRhdGFMZWZ0IiwiZGF0YUNlbnRlciIsImRhdGFSaWdodCIsImFwcElkIiwicGFnZUtleSIsIk1ldGEiLCJwYWdlSWQiLCJkaXNwYXRjaCIsImdldENtc1BhZ2VBdHRlbXB0IiwiZ2V0Q21zTWFya2Rvd25BdHRlbXB0IiwiY29uc29sZSIsImxvZyIsImdldERhdGEiLCJuZXdQcm9wcyIsIm1ldGEiLCJ0b3AiLCJsZWZ0IiwiY2VudGVyIiwicmlnaHQiLCJib3R0b20iLCJDb21wb25lbnQiLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsInByZWxvYWQiLCJwYXJhbXMiLCJyZXEiLCJvcmlnaW5hbFVybCIsInNsaWNlIiwiUGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHQTs7QUFDQTs7OztBQUdBOzs7O0FBR0E7O0FBR0E7Ozs7QUFDQTs7OztBQUdBOztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFsQkE7OztBQUtBOzs7QUFHQTs7O0FBR0E7OztBQUlBOzs7Ozs7Ozs7Ozs7Ozs7Ozt3TUF1Q0VBLGEsR0FBZ0IsVUFBQ0MsSUFBRCxFQUFVO0FBQ3hCLFVBQUlDLE9BQU9ELEtBQUtFLEtBQUwsSUFBYyxFQUF6QjtBQUNBLFVBQUlDLFlBQVlILEtBQUtHLFNBQUwsSUFBa0IsRUFBbEM7O0FBRUEsVUFBSSxDQUFDRixLQUFLRyxTQUFWLEVBQXFCO0FBQ25CLGVBQ0UsK0RB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VCxDQUFpQkMsTUFBakIsRUFBeUJDLEdBQXpCLEVBQThCO0FBQzVCLE1BQU1YLE9BQU8sRUFBRVgsT0FBTyxTQUFULEVBQW9CRyxRQUFRbUIsSUFBSUMsV0FBSixDQUFnQkMsS0FBaEIsQ0FBc0IsQ0FBdEIsQ0FBNUIsRUFBYjtBQUNBLFNBQU8sQ0FDTCwyQkFBaUJiLElBQWpCLENBREssRUFFTCwrQkFBcUJBLElBQXJCLENBRkssQ0FBUDtBQUlBO0FBQ0ZjLEtBQUtMLE9BQUwsR0FBZUEsT0FBZjs7a0JBRWUseUJBQVFGLGVBQVIsRUFBeUJPLElBQXpCLEMiLCJmaWxlIjoiUGFnZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLyogUmVhY3QgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCBIZWxtZXQgZnJvbSAncmVhY3QtaGVsbWV0J1xuXG4vKiBBY3Rpb25zICovXG5pbXBvcnQgQWN0aW9ucyBmcm9tICcuLi9BY3Rpb25zL0NyZWF0b3JzJ1xuXG4vKiBTZWxlY3RvcnMgKi9cbmltcG9ydCB7IGdldEFwcElkLCBnZXRQYWdlS2V5LCBnZXRQYWdlRGF0YSwgZ2V0UGFnZU1hcmtkb3duIH0gZnJvbSAnLi4vU2VsZWN0b3JzL0Ntc1NlbGVjdG9yJ1xuXG4vKiBTYWdhcyAqL1xuaW1wb3J0IEdldENtc1BhZ2VTYWdhIGZyb20gJy4uL1NhZ2FzL1ByZWxvYWRlcnMvR2V0Q21zUGFnZVNhZ2EnXG5pbXBvcnQgR2V0Q21zTWFya2Rvd25TYWdhIGZyb20gJy4uL1NhZ2FzL1ByZWxvYWRlcnMvR2V0Q21zTWFya2Rvd25TYWdhJ1xuXG4vKiBDb21wb25lbnRzICovXG5pbXBvcnQgeyBSb3csIENvbHVtbiB9IGZyb20gJ3JlYWN0LWZvdW5kYXRpb24nXG5pbXBvcnQgTWFya2Rvd24gZnJvbSAncmVhY3QtcmVtYXJrYWJsZSdcbmltcG9ydCB7XG4gIFBvcnRsZXQsXG4gIEJsb2NrR3JpZCxcbiAgTGlzdCxcbiAgLy9EYXRhR3JpZCxcbiAgQ2Fyb3VzZWwsXG4gIC8vSnNvbkZvcm0sXG4gIE5hdixcbiAgLy9HYWxsZXJ5XG59IGZyb20gJ2Jvb3NoLXJlYWN0LWNvbXBvbmVudHMnXG5cbmNsYXNzIFBhZ2UgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIGdldERhdGEoYXBwSWQsIHBhZ2VLZXkpIHtcbiAgICBpZiAoIWFwcElkIHx8ICFwYWdlS2V5KSByZXR1cm4gZmFsc2U7XG5cbiAgICBsZXQgTWV0YSA9IHtcbiAgICAgIGFwcElkOiBhcHBJZCxcbiAgICAgIHBhZ2VJZDogcGFnZUtleVxuICAgIH1cbiAgICB0aGlzLnByb3BzLmRpc3BhdGNoKEFjdGlvbnMuZ2V0Q21zUGFnZUF0dGVtcHQoTWV0YSkpO1xuICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goQWN0aW9ucy5nZXRDbXNNYXJrZG93bkF0dGVtcHQoTWV0YSkpO1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgbGV0IHsgYXBwSWQsIHBhZ2VLZXkgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc29sZS5sb2coJ3BhZ2VLZXknLHBhZ2VLZXkpO1xuICAgIHRoaXMuZ2V0RGF0YShhcHBJZCwgcGFnZUtleSlcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMgKG5ld1Byb3BzKSB7XG4gICAgaWYgKG5ld1Byb3BzLnBhZ2VLZXkgIT09IHRoaXMucHJvcHMucGFnZUtleSkge1xuICAgICAgdGhpcy5nZXREYXRhKG5ld1Byb3BzLmFwcElkLCBuZXdQcm9wcy5wYWdlS2V5KVxuICAgIH1cbiAgfVxuXG4gIHJlbmRlclBvcnRsZXQgPSAoZGF0YSkgPT4ge1xuICAgIGxldCBjb250ID0gZGF0YS5pdGVtcyB8fCAnJztcbiAgICBsZXQgY2xhc3NOYW1lID0gZGF0YS5jbGFzc05hbWUgfHwgJyc7XG5cbiAgICBpZiAoIWNvbnQuY29tcG9uZW50KSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8UG9ydGxldCBjbGFzc05hbWU9e2NsYXNzTmFtZX0gdGl0bGU9e2RhdGEudGl0bGUgfHwgJyd9IGNvbnQ9e2NvbnR9IC8+XG4gICAgICApXG4gICAgfVxuXG4gICAgc3dpdGNoKGNvbnQuY29tcG9uZW50KSB7XG4gICAgICBjYXNlICdtYXJrZG93bic6XG4gICAgICAgIGxldCBodG1sID0gdGhpcy5wcm9wcy5tYXJrZG93bjtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8UG9ydGxldCBjbGFzc05hbWU9e2NsYXNzTmFtZX0gdGl0bGU9e2RhdGEudGl0bGUgfHwgJyd9IGl0ZW1zPXtcbiAgICAgICAgICAgIDxNYXJrZG93biBzb3VyY2U9e2h0bWx9IC8+XG4gICAgICAgICAgfSAvPlxuICAgICAgICApXG4gICAgICBicmVhaztcbiAgICAgIC8qY2FzZSAnZGF0YWdyaWQnOlxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxQb3J0bGV0IGNsYXNzTmFtZT17Y2xhc3NOYW1lfSB0aXRsZT17ZGF0YS50aXRsZSB8fCAnJ30gaXRlbXM9e1xuICAgICAgICAgICAgPERhdGFHcmlkLz5cbiAgICAgICAgICB9IC8+XG4gICAgICAgIClcbiAgICAgIGJyZWFrOyovXG4gICAgICBjYXNlICdibG9ja2dyaWQnOlxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxQb3J0bGV0IGNsYXNzTmFtZT17Y2xhc3NOYW1lfSB0aXRsZT17ZGF0YS50aXRsZSB8fCAnJ30gaXRlbXM9e1xuICAgICAgICAgICAgPEJsb2NrR3JpZCBkYXRhPXtjb250LmRhdGF9IC8+XG4gICAgICAgICAgfSAvPlxuICAgICAgICApXG4gICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2xpc3QnOlxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxQb3J0bGV0IGNsYXNzTmFtZT17Y2xhc3NOYW1lfSB0aXRsZT17ZGF0YS50aXRsZSB8fCAnJ30gaXRlbXM9e1xuICAgICAgICAgICAgPExpc3QgaXRlbVR5cGU9e2NvbnQuaXRlbVR5cGV9IGRhdGE9e2NvbnQuZGF0YX0vPlxuICAgICAgICAgIH0gLz5cbiAgICAgICAgKVxuICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdjYXJvdXNlbCc6XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPFBvcnRsZXQgY2xhc3NOYW1lPXtjbGFzc05hbWV9IHRpdGxlPXtkYXRhLnRpdGxlIHx8ICcnfSBpdGVtcz17XG4gICAgICAgICAgICA8Q2Fyb3VzZWwgc2xpZGVzPXtjb250LnNsaWRlcyB8fCAnJ30vPlxuICAgICAgICAgIH0gLz5cbiAgICAgICAgKVxuICAgICAgYnJlYWs7XG4gICAgICBjYXNlICduYXYnOlxuICAgICAgICBpZiAoIWNvbnQuZGF0YSkgcmV0dXJuIGZhbHNlO1xuICAgICAgICBpZiAoIWNvbnQuZGF0YS5pdGVtcykgcmV0dXJuIGZhbHNlO1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxQb3J0bGV0IGNsYXNzTmFtZT17Y2xhc3NOYW1lfSB0aXRsZT17ZGF0YS50aXRsZSB8fCAnJ30gaXRlbXM9e1xuICAgICAgICAgICAgPE5hdiBpc1ZlcnRpY2FsPXtjb250LmRhdGEuaXNWZXJ0aWNhbH0gaXRlbXM9e2NvbnQuZGF0YS5pdGVtc30gLz5cbiAgICAgICAgICB9IC8+XG4gICAgICAgIClcbiAgICAgIGJyZWFrO1xuICAgICAgLypjYXNlICdmb3JtJzpcbiAgICAgICAgaWYgKCFjb250LmRhdGEpIHJldHVybiBmYWxzZTtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8UG9ydGxldCBjbGFzc05hbWU9e2NsYXNzTmFtZX0gdGl0bGU9e2RhdGEudGl0bGUgfHwgJyd9IGl0ZW1zPXtcbiAgICAgICAgICAgIDxKc29uRm9ybVxuICAgICAgICAgICAgICBzY2hlbWE9e2NvbnQuZGF0YS5zY2hlbWF9XG4gICAgICAgICAgICAgIHVpU2NoZW1hPXtjb250LmRhdGEudWlTY2hlbWF9XG4gICAgICAgICAgICAgIGZvcm1EYXRhPXtjb250LmRhdGEuZm9ybURhdGF9XG4gICAgICAgICAgICAgIGJ1dHRvbnMgPSB7Y29udC5idXR0b25zfSAvPlxuICAgICAgICAgIH0gLz5cbiAgICAgICAgKVxuICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdnYWxsZXJ5JzpcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8UG9ydGxldCBjbGFzc05hbWU9e2NsYXNzTmFtZX0gdGl0bGU9e2RhdGEudGl0bGUgfHwgJyd9IGl0ZW1zPXtcbiAgICAgICAgICAgIDxHYWxsZXJ5IGl0ZW1zPXtjb250Lml0ZW1zIHx8ICcnfS8+XG4gICAgICAgICAgfSAvPlxuICAgICAgICApXG4gICAgICBicmVhazsqL1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyUm93ID0gKGRhdGEpID0+IHtcbiAgICBpZiAoIWRhdGEpIHJldHVybiBmYWxzZTtcbiAgICBpZiAoIWRhdGEucG9ydGxldHMpIHJldHVybiBmYWxzZTtcbiAgICBjb25zdCB6ID0gdGhpcztcbiAgICByZXR1cm4gKFxuICAgICAgPFJvdyBjbGFzc05hbWU9XCJkaXNwbGF5XCI+XG4gICAgICAgIDxDb2x1bW4gc21hbGw9ezEyfT57XG4gICAgICAgICAgZGF0YS5wb3J0bGV0cy5tYXAoKGl0ZW0saWQpID0+IHtcbiAgICAgICAgICAgIHJldHVybiAoPGRpdiBrZXk9e2lkfT57IHoucmVuZGVyUG9ydGxldChpdGVtKSB9PC9kaXY+KVxuICAgICAgICAgIH0pXG4gICAgICAgIH08L0NvbHVtbj5cbiAgICAgIDwvUm93PlxuICAgIClcbiAgfVxuXG4gIHJlbmRlckNvbHVtbnMgPSAoZGF0YUxlZnQsIGRhdGFDZW50ZXIsIGRhdGFSaWdodCkgPT4ge1xuICAgIGNvbnN0IHogPSB0aGlzO1xuXG4gICAgLy8gZXJyb3IgY2hlY2tpbmdcbiAgICBkYXRhTGVmdCA9IGRhdGFMZWZ0ICYmIGRhdGFMZWZ0LnBvcnRsZXRzID8gIGRhdGFMZWZ0IDogeyBwb3J0bGV0czogbnVsbCB9XG4gICAgZGF0YUNlbnRlciA9IGRhdGFDZW50ZXIgJiYgZGF0YUNlbnRlci5wb3J0bGV0cyA/ICBkYXRhQ2VudGVyIDogeyBwb3J0bGV0czogbnVsbCB9XG4gICAgZGF0YVJpZ2h0ID0gZGF0YVJpZ2h0ICYmIGRhdGFSaWdodC5wb3J0bGV0cyA/ICBkYXRhUmlnaHQgOiB7IHBvcnRsZXRzOiBudWxsIH1cblxuICAgIC8qIGNhc2VzXG4gICAgICAwMDBcbiAgICAgIDEwMFxuICAgICAgMTEwXG4gICAgICAxMDFcbiAgICAgIDExMVxuICAgICAgMDEwXG4gICAgICAwMTFcbiAgICAgIDAwMVxuICAgICovXG5cbiAgICBpZiAoIWRhdGFMZWZ0ICYmICFkYXRhQ2VudGVyICYmICFkYXRhUmlnaHQpIHJldHVybiBmYWxzZTtcblxuICAgIGlmIChkYXRhTGVmdC5wb3J0bGV0cyAmJiAhZGF0YUNlbnRlci5wb3J0bGV0cyAmJiAhZGF0YVJpZ2h0LnBvcnRsZXRzKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8Um93IGNsYXNzTmFtZT1cImRpc3BsYXlcIj5cbiAgICAgICAgICA8Q29sdW1uIHNtYWxsPXsxMn0+e1xuICAgICAgICAgICAgZGF0YUxlZnQucG9ydGxldHMubWFwKChpdGVtLGlkKSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiAoPGRpdiBrZXk9e2lkfT57IHoucmVuZGVyUG9ydGxldChpdGVtKSB9PC9kaXY+KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9PC9Db2x1bW4+XG4gICAgICAgIDwvUm93PlxuICAgICAgKVxuICAgIH1cblxuICAgIGlmIChkYXRhTGVmdC5wb3J0bGV0cyAmJiBkYXRhQ2VudGVyLnBvcnRsZXRzICYmICFkYXRhUmlnaHQucG9ydGxldHMpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxSb3cgY2xhc3NOYW1lPVwiZGlzcGxheVwiPlxuICAgICAgICAgIDxDb2x1bW4gc21hbGw9ezR9PntcbiAgICAgICAgICAgIGRhdGFMZWZ0LnBvcnRsZXRzLm1hcCgoaXRlbSxpZCkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gKDxkaXYga2V5PXtpZH0+eyB6LnJlbmRlclBvcnRsZXQoaXRlbSkgfTwvZGl2PilcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfTwvQ29sdW1uPlxuICAgICAgICAgIDxDb2x1bW4gc21hbGw9ezh9PntcbiAgICAgICAgICAgIGRhdGFDZW50ZXIucG9ydGxldHMubWFwKChpdGVtLGlkKSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiAoPGRpdiBrZXk9e2lkfT57IHoucmVuZGVyUG9ydGxldChpdGVtKSB9PC9kaXY+KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9PC9Db2x1bW4+XG4gICAgICAgIDwvUm93PlxuICAgICAgKVxuICAgIH1cblxuICAgIGlmIChkYXRhTGVmdC5wb3J0bGV0cyAmJiAhZGF0YUNlbnRlci5wb3J0bGV0cyAmJiBkYXRhUmlnaHQucG9ydGxldHMpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxSb3cgY2xhc3NOYW1lPVwiZGlzcGxheVwiPlxuICAgICAgICAgIDxDb2x1bW4gc21hbGw9ezZ9PntcbiAgICAgICAgICAgIGRhdGFMZWZ0LnBvcnRsZXRzLm1hcCgoaXRlbSxpZCkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gKDxkaXYga2V5PXtpZH0+eyB6LnJlbmRlclBvcnRsZXQoaXRlbSkgfTwvZGl2PilcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfTwvQ29sdW1uPlxuICAgICAgICAgIDxDb2x1bW4gc21hbGw9ezZ9PntcbiAgICAgICAgICAgIGRhdGFSaWdodC5wb3J0bGV0cy5tYXAoKGl0ZW0saWQpID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuICg8ZGl2IGtleT17aWR9Pnsgei5yZW5kZXJQb3J0bGV0KGl0ZW0pIH08L2Rpdj4pXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH08L0NvbHVtbj5cbiAgICAgICAgPC9Sb3c+XG4gICAgICApXG4gICAgfVxuXG4gICAgaWYgKGRhdGFMZWZ0LnBvcnRsZXRzICYmIGRhdGFDZW50ZXIucG9ydGxldHMgJiYgZGF0YVJpZ2h0LnBvcnRsZXRzKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8Um93IGNsYXNzTmFtZT1cImRpc3BsYXlcIj5cbiAgICAgICAgICA8Q29sdW1uIHNtYWxsPXszfT57XG4gICAgICAgICAgICBkYXRhTGVmdC5wb3J0bGV0cy5tYXAoKGl0ZW0saWQpID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuICg8ZGl2IGtleT17aWR9Pnsgei5yZW5kZXJQb3J0bGV0KGl0ZW0pIH08L2Rpdj4pXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH08L0NvbHVtbj5cbiAgICAgICAgICA8Q29sdW1uIHNtYWxsPXs2fT57XG4gICAgICAgICAgICBkYXRhQ2VudGVyLnBvcnRsZXRzLm1hcCgoaXRlbSxpZCkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gKDxkaXYga2V5PXtpZH0+eyB6LnJlbmRlclBvcnRsZXQoaXRlbSkgfTwvZGl2PilcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfTwvQ29sdW1uPlxuICAgICAgICAgIDxDb2x1bW4gc21hbGw9ezN9PntcbiAgICAgICAgICAgIGRhdGFSaWdodC5wb3J0bGV0cy5tYXAoKGl0ZW0saWQpID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuICg8ZGl2IGtleT17aWR9Pnsgei5yZW5kZXJQb3J0bGV0KGl0ZW0pIH08L2Rpdj4pXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH08L0NvbHVtbj5cbiAgICAgICAgPC9Sb3c+XG4gICAgICApXG4gICAgfVxuXG4gICAgaWYgKCFkYXRhTGVmdC5wb3J0bGV0cyAmJiBkYXRhQ2VudGVyLnBvcnRsZXRzICYmICFkYXRhUmlnaHQucG9ydGxldHMpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxSb3cgY2xhc3NOYW1lPVwiZGlzcGxheVwiPlxuICAgICAgICAgIDxDb2x1bW4gc21hbGw9ezEyfT57XG4gICAgICAgICAgICBkYXRhQ2VudGVyLnBvcnRsZXRzLm1hcCgoaXRlbSxpZCkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gKDxkaXYga2V5PXtpZH0+eyB6LnJlbmRlclBvcnRsZXQoaXRlbSkgfTwvZGl2PilcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfTwvQ29sdW1uPlxuICAgICAgICA8L1Jvdz5cbiAgICAgIClcbiAgICB9XG5cbiAgICBpZiAoIWRhdGFMZWZ0LnBvcnRsZXRzICYmIGRhdGFDZW50ZXIucG9ydGxldHMgJiYgZGF0YVJpZ2h0LnBvcnRsZXRzKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8Um93IGNsYXNzTmFtZT1cImRpc3BsYXlcIj5cbiAgICAgICAgICA8Q29sdW1uIHNtYWxsPXs4fT57XG4gICAgICAgICAgICBkYXRhQ2VudGVyLnBvcnRsZXRzLm1hcCgoaXRlbSxpZCkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gKDxkaXYga2V5PXtpZH0+eyB6LnJlbmRlclBvcnRsZXQoaXRlbSkgfTwvZGl2PilcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfTwvQ29sdW1uPlxuICAgICAgICAgIDxDb2x1bW4gc21hbGw9ezR9PntcbiAgICAgICAgICAgIGRhdGFSaWdodC5wb3J0bGV0cy5tYXAoKGl0ZW0saWQpID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuICg8ZGl2IGtleT17aWR9Pnsgei5yZW5kZXJQb3J0bGV0KGl0ZW0pIH08L2Rpdj4pXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH08L0NvbHVtbj5cbiAgICAgICAgPC9Sb3c+XG4gICAgICApXG4gICAgfVxuXG4gICAgaWYgKCFkYXRhTGVmdC5wb3J0bGV0cyAmJiAhZGF0YUNlbnRlci5wb3J0bGV0cyAmJiBkYXRhUmlnaHQucG9ydGxldHMpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxSb3cgY2xhc3NOYW1lPVwiZGlzcGxheVwiPlxuICAgICAgICAgIDxDb2x1bW4gc21hbGw9ezEyfT57XG4gICAgICAgICAgICBkYXRhUmlnaHQucG9ydGxldHMubWFwKChpdGVtLGlkKSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiAoPGRpdiBrZXk9e2lkfT57IHoucmVuZGVyUG9ydGxldChpdGVtKSB9PC9kaXY+KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9PC9Db2x1bW4+XG4gICAgICAgIDwvUm93PlxuICAgICAgKVxuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcblxuICAgIGxldCB7IGRhdGEgfSA9IHRoaXMucHJvcHM7XG4gICAgaWYgKCFkYXRhKSByZXR1cm4gZmFsc2U7XG5cbiAgICBsZXQgdGl0bGUgPSAoZGF0YS5tZXRhKSA/IGRhdGEubWV0YS50aXRsZSA6IFwiXCI7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYWdlXCI+XG4gICAgICAgIDxIZWxtZXQgdGl0bGU9e3RpdGxlfS8+XG4gICAgICAgIHsgdGhpcy5yZW5kZXJSb3coZGF0YS50b3ApIH1cbiAgICAgICAgeyB0aGlzLnJlbmRlckNvbHVtbnMoZGF0YS5sZWZ0LCBkYXRhLmNlbnRlciwgIGRhdGEucmlnaHQpIH1cbiAgICAgICAgeyB0aGlzLnJlbmRlclJvdyhkYXRhLmJvdHRvbSkgfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSwgcHJvcHMpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBhcHBJZDogZ2V0QXBwSWQoc3RhdGUsIHByb3BzKSxcbiAgICBwYWdlS2V5OiBnZXRQYWdlS2V5KHN0YXRlLCBwcm9wcyksXG4gICAgZGF0YTogZ2V0UGFnZURhdGEoc3RhdGUsIHByb3BzKSxcbiAgICBtYXJrZG93bjogZ2V0UGFnZU1hcmtkb3duKHN0YXRlLCBwcm9wcylcbiAgfVxufVxuXG5mdW5jdGlvbiBwcmVsb2FkKHBhcmFtcywgcmVxKSB7XG4gIGNvbnN0IG1ldGEgPSB7IGFwcElkOiAnZXhhbXBsZScsIHBhZ2VJZDogcmVxLm9yaWdpbmFsVXJsLnNsaWNlKDEpIH1cbiAgcmV0dXJuIFtcbiAgICBbR2V0Q21zUGFnZVNhZ2EsIG1ldGFdLFxuICAgIFtHZXRDbXNNYXJrZG93blNhZ2EsIG1ldGFdXG4gIF07XG4gfVxuUGFnZS5wcmVsb2FkID0gcHJlbG9hZDtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKFBhZ2UpXG5cblxuXG4iXX0=