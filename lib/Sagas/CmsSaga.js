'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _effects = require('redux-saga/effects');

var _Types = require('../Actions/Types');

var _Types2 = _interopRequireDefault(_Types);

var _Creators = require('../Actions/Creators');

var _Creators2 = _interopRequireDefault(_Creators);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This style of Saga is a common pattern.  It has a
// worker and a watcher.
//
// The watcher listens for the signal, and the worker
// does the job.

// We use a factory function will close over the scope of
// our watcher saga.  This ensures the API is passed in
// (hurray objects being composed).
exports.default = function (api) {
  var _marked = /*#__PURE__*/_regenerator2.default.mark(workerApp),
      _marked2 = /*#__PURE__*/_regenerator2.default.mark(workerPage),
      _marked3 = /*#__PURE__*/_regenerator2.default.mark(workerMarkdown),
      _marked4 = /*#__PURE__*/_regenerator2.default.mark(watchApp),
      _marked5 = /*#__PURE__*/_regenerator2.default.mark(watchPage),
      _marked6 = /*#__PURE__*/_regenerator2.default.mark(watchPages),
      _marked7 = /*#__PURE__*/_regenerator2.default.mark(watchMarkdown),
      _marked8 = /*#__PURE__*/_regenerator2.default.mark(watchMarkdowns);

  // ----------
  // The Worker
  // ----------
  // This is our worker.  It does the job.  In this case, we
  // get the weather for the city.
  function workerApp(meta) {
    var response, payload;
    return _regenerator2.default.wrap(function workerApp$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0, _effects.call)(api.getCmsAppData, meta.appId);

          case 2:
            response = _context.sent;

            if (!(response && response.ok)) {
              _context.next = 11;
              break;
            }

            payload = {
              entities: {
                apps: {}
              },
              result: null
            };


            payload.entities.apps[meta.appId] = response.data;
            payload.result = meta.appId;
            //console.log('APP PAYLOAD', payload)

            _context.next = 9;
            return (0, _effects.put)(_Creators2.default.getCmsAppSuccess(payload));

          case 9:
            _context.next = 13;
            break;

          case 11:
            _context.next = 13;
            return (0, _effects.put)(_Creators2.default.getCmsAppFailure({ errorCode: response }));

          case 13:
          case 'end':
            return _context.stop();
        }
      }
    }, _marked, this);
  }

  function workerPage(meta) {
    var response, payload;
    return _regenerator2.default.wrap(function workerPage$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:

            meta.pageId = meta.pageId || "home";

            // make the call to the api
            _context2.next = 3;
            return (0, _effects.call)(api.getCmsPageData, meta.appId, meta.pageId);

          case 3:
            response = _context2.sent;

            if (!(response && response.ok)) {
              _context2.next = 12;
              break;
            }

            payload = {
              entities: {
                pages: {}
              },
              result: null
            };


            payload.entities.pages[meta.pageId] = response.data;
            payload.result = meta.pageId;
            //console.log('PAGE PAYLOAD', payload)

            //let payload = normalize(response.data, CmsPageSchema);
            //console.log('NORMALIZED DATA PAGE', payload)

            _context2.next = 10;
            return (0, _effects.put)(_Creators2.default.getCmsPageSuccess(payload));

          case 10:
            _context2.next = 14;
            break;

          case 12:
            _context2.next = 14;
            return (0, _effects.put)(_Creators2.default.getCmsPageFailure());

          case 14:
          case 'end':
            return _context2.stop();
        }
      }
    }, _marked2, this);
  }

  function workerMarkdown(meta) {
    var response, payload;
    return _regenerator2.default.wrap(function workerMarkdown$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:

            meta.pageId = meta.pageId || "home";

            // make the call to the api
            _context3.next = 3;
            return (0, _effects.call)(api.getCmsMarkdown, meta.appId, meta.pageId);

          case 3:
            response = _context3.sent;

            if (!response) {
              _context3.next = 12;
              break;
            }

            //console.log(response)

            payload = {
              entities: {
                markdowns: {}
              },
              result: null
            };


            payload.entities.markdowns[meta.pageId] = response;
            payload.result = meta.pageId;
            //console.log('PAGE MARKDOWN PAYLOAD', payload)

            _context3.next = 10;
            return (0, _effects.put)(_Creators2.default.getCmsMarkdownSuccess(payload));

          case 10:
            _context3.next = 14;
            break;

          case 12:
            _context3.next = 14;
            return (0, _effects.put)(_Creators2.default.getCmsMarkdownFailure());

          case 14:
          case 'end':
            return _context3.stop();
        }
      }
    }, _marked3, this);
  }

  // -----------
  // The Watcher
  // -----------
  // Make a watcher.  It's daemon.  It runs on startup and does
  // a few things:
  //
  // 1.  Goes into a loop to ensure it stays alive.
  // 2.  Listens for TEMPERATURE_REQUEST redux events
  // 3.  Unpacks the action.
  // 4.  Calls the worker (above) to do the job.
  function watchApp() {
    var action, meta;
    return _regenerator2.default.wrap(function watchApp$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return (0, _effects.take)(_Types2.default.GET_CMS_APP_REQUEST);

          case 2:
            action = _context4.sent;
            meta = action.meta;
            _context4.next = 6;
            return (0, _effects.call)(workerApp, meta);

          case 6:
          case 'end':
            return _context4.stop();
        }
      }
    }, _marked4, this);
  }

  function watchPage() {
    var action, meta;
    return _regenerator2.default.wrap(function watchPage$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return (0, _effects.take)(_Types2.default.GET_CMS_PAGE_REQUEST);

          case 2:
            action = _context5.sent;
            meta = action.meta;
            _context5.next = 6;
            return (0, _effects.call)(workerPage, meta);

          case 6:
          case 'end':
            return _context5.stop();
        }
      }
    }, _marked5, this);
  }

  function watchPages() {
    var action, meta;
    return _regenerator2.default.wrap(function watchPages$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            if (!true) {
              _context6.next = 9;
              break;
            }

            _context6.next = 3;
            return (0, _effects.take)(_Types2.default.GET_CMS_PAGE_REQUEST);

          case 3:
            action = _context6.sent;
            meta = action.meta;
            _context6.next = 7;
            return (0, _effects.call)(workerPage, meta);

          case 7:
            _context6.next = 0;
            break;

          case 9:
          case 'end':
            return _context6.stop();
        }
      }
    }, _marked6, this);
  }

  function watchMarkdown() {
    var action, meta;
    return _regenerator2.default.wrap(function watchMarkdown$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _context7.next = 2;
            return (0, _effects.take)(_Types2.default.GET_CMS_MARKDOWN_REQUEST);

          case 2:
            action = _context7.sent;
            meta = action.meta;
            _context7.next = 6;
            return (0, _effects.call)(workerMarkdown, meta);

          case 6:
          case 'end':
            return _context7.stop();
        }
      }
    }, _marked7, this);
  }

  function watchMarkdowns() {
    var action, meta;
    return _regenerator2.default.wrap(function watchMarkdowns$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            if (!true) {
              _context8.next = 9;
              break;
            }

            _context8.next = 3;
            return (0, _effects.take)(_Types2.default.GET_CMS_MARKDOWN_REQUEST);

          case 3:
            action = _context8.sent;
            meta = action.meta;
            _context8.next = 7;
            return (0, _effects.call)(workerMarkdown, meta);

          case 7:
            _context8.next = 0;
            break;

          case 9:
          case 'end':
            return _context8.stop();
        }
      }
    }, _marked8, this);
  }

  // Expose both functions.  Now, technically, we're only
  // needing to return the watcher.  If we return both, we
  // gain 2 important properties:
  //
  // 1.  We can test the worker directly without need to
  // mock the watcher taking.
  //
  // 2.  We can call the worker from other sagas which is
  // often required in some flow control cases.
  return {
    watchApp: watchApp,
    watchPage: watchPage,
    watchPages: watchPages,
    watchMarkdown: watchMarkdown,
    watchMarkdowns: watchMarkdowns,
    workerApp: workerApp,
    workerPage: workerPage,
    workerMarkdown: workerMarkdown
  };
};