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
    var action, _meta;

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
            _meta = action.meta;
            _context8.next = 7;
            return (0, _effects.call)(workerMarkdown, _meta);

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

module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9TYWdhcy9DbXNTYWdhLmpzIl0sIm5hbWVzIjpbImFwaSIsIndvcmtlckFwcCIsIndvcmtlclBhZ2UiLCJ3b3JrZXJNYXJrZG93biIsIndhdGNoQXBwIiwid2F0Y2hQYWdlIiwid2F0Y2hQYWdlcyIsIndhdGNoTWFya2Rvd24iLCJ3YXRjaE1hcmtkb3ducyIsIm1ldGEiLCJnZXRDbXNBcHBEYXRhIiwiYXBwSWQiLCJyZXNwb25zZSIsIm9rIiwicGF5bG9hZCIsImVudGl0aWVzIiwiYXBwcyIsInJlc3VsdCIsImRhdGEiLCJnZXRDbXNBcHBTdWNjZXNzIiwiZ2V0Q21zQXBwRmFpbHVyZSIsImVycm9yQ29kZSIsInBhZ2VJZCIsImdldENtc1BhZ2VEYXRhIiwicGFnZXMiLCJnZXRDbXNQYWdlU3VjY2VzcyIsImdldENtc1BhZ2VGYWlsdXJlIiwiZ2V0Q21zTWFya2Rvd24iLCJtYXJrZG93bnMiLCJnZXRDbXNNYXJrZG93blN1Y2Nlc3MiLCJnZXRDbXNNYXJrZG93bkZhaWx1cmUiLCJHRVRfQ01TX0FQUF9SRVFVRVNUIiwiYWN0aW9uIiwiR0VUX0NNU19QQUdFX1JFUVVFU1QiLCJHRVRfQ01TX01BUktET1dOX1JFUVVFU1QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtrQkFDZSxVQUFDQSxHQUFELEVBQVM7QUFBQSx3REFNWEMsU0FOVztBQUFBLHlEQWlDWEMsVUFqQ1c7QUFBQSx5REErRFhDLGNBL0RXO0FBQUEseURBc0dYQyxRQXRHVztBQUFBLHlEQThHWEMsU0E5R1c7QUFBQSx5REFzSFhDLFVBdEhXO0FBQUEseURBOEhYQyxhQTlIVztBQUFBLHlEQXNJWEMsY0F0SVc7O0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXUCxTQUFYLENBQXNCUSxJQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtB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QUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBUUEsV0FBV0QsY0FBWDtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQ1MsSUFEVDtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBLG1CQUV5QixtQkFBSyxnQkFBTTBCLHdCQUFYLENBRnpCOztBQUFBO0FBRVVGLGtCQUZWO0FBR1l2QixpQkFIWixHQUdxQnVCLE1BSHJCLENBR1l2QixJQUhaO0FBQUE7QUFBQSxtQkFJVSxtQkFBS04sY0FBTCxFQUFxQk0sS0FBckIsQ0FKVjs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBTztBQUNMTCxzQkFESztBQUVMQyx3QkFGSztBQUdMQywwQkFISztBQUlMQyxnQ0FKSztBQUtMQyxrQ0FMSztBQU1MUCx3QkFOSztBQU9MQywwQkFQSztBQVFMQztBQVJLLEdBQVA7QUFVRCxDIiwiZmlsZSI6IkNtc1NhZ2EuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3Rha2UsIGNhbGwsIHB1dH0gZnJvbSAncmVkdXgtc2FnYS9lZmZlY3RzJ1xuaW1wb3J0IFR5cGVzIGZyb20gJy4uL0FjdGlvbnMvVHlwZXMnXG5pbXBvcnQgQWN0aW9ucyBmcm9tICcuLi9BY3Rpb25zL0NyZWF0b3JzJ1xuXG4vLyBUaGlzIHN0eWxlIG9mIFNhZ2EgaXMgYSBjb21tb24gcGF0dGVybi4gIEl0IGhhcyBhXG4vLyB3b3JrZXIgYW5kIGEgd2F0Y2hlci5cbi8vXG4vLyBUaGUgd2F0Y2hlciBsaXN0ZW5zIGZvciB0aGUgc2lnbmFsLCBhbmQgdGhlIHdvcmtlclxuLy8gZG9lcyB0aGUgam9iLlxuXG4vLyBXZSB1c2UgYSBmYWN0b3J5IGZ1bmN0aW9uIHdpbGwgY2xvc2Ugb3ZlciB0aGUgc2NvcGUgb2Zcbi8vIG91ciB3YXRjaGVyIHNhZ2EuICBUaGlzIGVuc3VyZXMgdGhlIEFQSSBpcyBwYXNzZWQgaW5cbi8vIChodXJyYXkgb2JqZWN0cyBiZWluZyBjb21wb3NlZCkuXG5leHBvcnQgZGVmYXVsdCAoYXBpKSA9PiB7XG4gIC8vIC0tLS0tLS0tLS1cbiAgLy8gVGhlIFdvcmtlclxuICAvLyAtLS0tLS0tLS0tXG4gIC8vIFRoaXMgaXMgb3VyIHdvcmtlci4gIEl0IGRvZXMgdGhlIGpvYi4gIEluIHRoaXMgY2FzZSwgd2VcbiAgLy8gZ2V0IHRoZSB3ZWF0aGVyIGZvciB0aGUgY2l0eS5cbiAgZnVuY3Rpb24gKiB3b3JrZXJBcHAgKG1ldGEpIHtcblxuICAgIC8vIG1ha2UgdGhlIGNhbGwgdG8gdGhlIGFwaVxuICAgIGNvbnN0IHJlc3BvbnNlID0geWllbGQgY2FsbChhcGkuZ2V0Q21zQXBwRGF0YSwgbWV0YS5hcHBJZClcblxuICAgIC8vY29uc29sZS5sb2cocmVzcG9uc2UpXG5cbiAgICAvLyBzdWNjZXNzP1xuICAgIGlmIChyZXNwb25zZSAmJiByZXNwb25zZS5vaykge1xuXG4gICAgICBsZXQgcGF5bG9hZCA9IHtcbiAgICAgICAgZW50aXRpZXM6IHtcbiAgICAgICAgICBhcHBzOiB7fVxuICAgICAgICB9LFxuICAgICAgICByZXN1bHQ6IG51bGxcbiAgICAgIH1cblxuICAgICAgcGF5bG9hZC5lbnRpdGllcy5hcHBzW21ldGEuYXBwSWRdID0gcmVzcG9uc2UuZGF0YTtcbiAgICAgIHBheWxvYWQucmVzdWx0ID0gbWV0YS5hcHBJZDtcbiAgICAgIC8vY29uc29sZS5sb2coJ0FQUCBQQVlMT0FEJywgcGF5bG9hZClcblxuICAgICAgeWllbGQgcHV0KEFjdGlvbnMuZ2V0Q21zQXBwU3VjY2VzcyhwYXlsb2FkKSlcbiAgICB9IGVsc2Uge1xuICAgICAgeWllbGQgcHV0KEFjdGlvbnMuZ2V0Q21zQXBwRmFpbHVyZSh7ZXJyb3JDb2RlOnJlc3BvbnNlfSkpXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gKiB3b3JrZXJQYWdlIChtZXRhKSB7XG5cbiAgICBtZXRhLnBhZ2VJZCA9IG1ldGEucGFnZUlkIHx8IFwiaG9tZVwiXG5cbiAgICAvLyBtYWtlIHRoZSBjYWxsIHRvIHRoZSBhcGlcbiAgICBjb25zdCByZXNwb25zZSA9IHlpZWxkIGNhbGwoYXBpLmdldENtc1BhZ2VEYXRhLCBtZXRhLmFwcElkLCBtZXRhLnBhZ2VJZClcblxuICAgIC8vIHN1Y2Nlc3M/XG4gICAgaWYgKHJlc3BvbnNlICYmIHJlc3BvbnNlLm9rKSB7XG5cbiAgICAgIGxldCBwYXlsb2FkID0ge1xuICAgICAgICBlbnRpdGllczoge1xuICAgICAgICAgIHBhZ2VzOiB7fVxuICAgICAgICB9LFxuICAgICAgICByZXN1bHQ6IG51bGxcbiAgICAgIH1cblxuICAgICAgcGF5bG9hZC5lbnRpdGllcy5wYWdlc1ttZXRhLnBhZ2VJZF0gPSByZXNwb25zZS5kYXRhO1xuICAgICAgcGF5bG9hZC5yZXN1bHQgPSBtZXRhLnBhZ2VJZDtcbiAgICAgIC8vY29uc29sZS5sb2coJ1BBR0UgUEFZTE9BRCcsIHBheWxvYWQpXG5cbiAgICAgIC8vbGV0IHBheWxvYWQgPSBub3JtYWxpemUocmVzcG9uc2UuZGF0YSwgQ21zUGFnZVNjaGVtYSk7XG4gICAgICAvL2NvbnNvbGUubG9nKCdOT1JNQUxJWkVEIERBVEEgUEFHRScsIHBheWxvYWQpXG5cbiAgICAgIHlpZWxkIHB1dChBY3Rpb25zLmdldENtc1BhZ2VTdWNjZXNzKHBheWxvYWQpKVxuICAgIH0gZWxzZSB7XG4gICAgICB5aWVsZCBwdXQoQWN0aW9ucy5nZXRDbXNQYWdlRmFpbHVyZSgpKVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uICogd29ya2VyTWFya2Rvd24gKG1ldGEpIHtcblxuICAgIG1ldGEucGFnZUlkID0gbWV0YS5wYWdlSWQgfHwgXCJob21lXCJcblxuICAgIC8vIG1ha2UgdGhlIGNhbGwgdG8gdGhlIGFwaVxuICAgIGNvbnN0IHJlc3BvbnNlID0geWllbGQgY2FsbChhcGkuZ2V0Q21zTWFya2Rvd24sIG1ldGEuYXBwSWQsIG1ldGEucGFnZUlkKVxuXG4gICAgLy8gc3VjY2Vzcz9cbiAgICBpZiAocmVzcG9uc2UpIHtcblxuICAgICAgLy9jb25zb2xlLmxvZyhyZXNwb25zZSlcblxuICAgICAgbGV0IHBheWxvYWQgPSB7XG4gICAgICAgIGVudGl0aWVzOiB7XG4gICAgICAgICAgbWFya2Rvd25zOiB7fVxuICAgICAgICB9LFxuICAgICAgICByZXN1bHQ6IG51bGxcbiAgICAgIH1cblxuICAgICAgcGF5bG9hZC5lbnRpdGllcy5tYXJrZG93bnNbbWV0YS5wYWdlSWRdID0gcmVzcG9uc2U7XG4gICAgICBwYXlsb2FkLnJlc3VsdCA9IG1ldGEucGFnZUlkO1xuICAgICAgLy9jb25zb2xlLmxvZygnUEFHRSBNQVJLRE9XTiBQQVlMT0FEJywgcGF5bG9hZClcblxuICAgICAgeWllbGQgcHV0KEFjdGlvbnMuZ2V0Q21zTWFya2Rvd25TdWNjZXNzKHBheWxvYWQpKVxuICAgIH0gZWxzZSB7XG4gICAgICB5aWVsZCBwdXQoQWN0aW9ucy5nZXRDbXNNYXJrZG93bkZhaWx1cmUoKSlcbiAgICB9XG4gIH1cblxuICAvLyAtLS0tLS0tLS0tLVxuICAvLyBUaGUgV2F0Y2hlclxuICAvLyAtLS0tLS0tLS0tLVxuICAvLyBNYWtlIGEgd2F0Y2hlci4gIEl0J3MgZGFlbW9uLiAgSXQgcnVucyBvbiBzdGFydHVwIGFuZCBkb2VzXG4gIC8vIGEgZmV3IHRoaW5nczpcbiAgLy9cbiAgLy8gMS4gIEdvZXMgaW50byBhIGxvb3AgdG8gZW5zdXJlIGl0IHN0YXlzIGFsaXZlLlxuICAvLyAyLiAgTGlzdGVucyBmb3IgVEVNUEVSQVRVUkVfUkVRVUVTVCByZWR1eCBldmVudHNcbiAgLy8gMy4gIFVucGFja3MgdGhlIGFjdGlvbi5cbiAgLy8gNC4gIENhbGxzIHRoZSB3b3JrZXIgKGFib3ZlKSB0byBkbyB0aGUgam9iLlxuICBmdW5jdGlvbiAqIHdhdGNoQXBwICgpIHtcbiAgICAvL3doaWxlICh0cnVlKSB7XG4gICAgICBjb25zdCBhY3Rpb24gPSB5aWVsZCB0YWtlKFR5cGVzLkdFVF9DTVNfQVBQX1JFUVVFU1QpXG4gICAgICBjb25zdCB7IG1ldGEgfSA9IGFjdGlvblxuICAgICAgeWllbGQgY2FsbCh3b3JrZXJBcHAsIG1ldGEpXG4gICAgLy99XG4gIH1cblxuICBmdW5jdGlvbiAqIHdhdGNoUGFnZSAoKSB7XG4gICAgLy93aGlsZSAodHJ1ZSkge1xuICAgICAgY29uc3QgYWN0aW9uID0geWllbGQgdGFrZShUeXBlcy5HRVRfQ01TX1BBR0VfUkVRVUVTVClcbiAgICAgIGNvbnN0IHsgbWV0YSB9ID0gYWN0aW9uXG4gICAgICB5aWVsZCBjYWxsKHdvcmtlclBhZ2UsIG1ldGEpXG4gICAgLy99XG4gIH1cblxuICBmdW5jdGlvbiAqIHdhdGNoUGFnZXMgKCkge1xuICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICBjb25zdCBhY3Rpb24gPSB5aWVsZCB0YWtlKFR5cGVzLkdFVF9DTVNfUEFHRV9SRVFVRVNUKVxuICAgICAgY29uc3QgeyBtZXRhIH0gPSBhY3Rpb25cbiAgICAgIHlpZWxkIGNhbGwod29ya2VyUGFnZSwgbWV0YSlcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiAqIHdhdGNoTWFya2Rvd24gKCkge1xuICAgIC8vd2hpbGUgKHRydWUpIHtcbiAgICAgIGNvbnN0IGFjdGlvbiA9IHlpZWxkIHRha2UoVHlwZXMuR0VUX0NNU19NQVJLRE9XTl9SRVFVRVNUKVxuICAgICAgY29uc3QgeyBtZXRhIH0gPSBhY3Rpb25cbiAgICAgIHlpZWxkIGNhbGwod29ya2VyTWFya2Rvd24sIG1ldGEpXG4gICAgLy99XG4gIH1cblxuICBmdW5jdGlvbiAqIHdhdGNoTWFya2Rvd25zICgpIHtcbiAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgY29uc3QgYWN0aW9uID0geWllbGQgdGFrZShUeXBlcy5HRVRfQ01TX01BUktET1dOX1JFUVVFU1QpXG4gICAgICBjb25zdCB7IG1ldGEgfSA9IGFjdGlvblxuICAgICAgeWllbGQgY2FsbCh3b3JrZXJNYXJrZG93biwgbWV0YSlcbiAgICB9XG4gIH1cblxuICAvLyBFeHBvc2UgYm90aCBmdW5jdGlvbnMuICBOb3csIHRlY2huaWNhbGx5LCB3ZSdyZSBvbmx5XG4gIC8vIG5lZWRpbmcgdG8gcmV0dXJuIHRoZSB3YXRjaGVyLiAgSWYgd2UgcmV0dXJuIGJvdGgsIHdlXG4gIC8vIGdhaW4gMiBpbXBvcnRhbnQgcHJvcGVydGllczpcbiAgLy9cbiAgLy8gMS4gIFdlIGNhbiB0ZXN0IHRoZSB3b3JrZXIgZGlyZWN0bHkgd2l0aG91dCBuZWVkIHRvXG4gIC8vIG1vY2sgdGhlIHdhdGNoZXIgdGFraW5nLlxuICAvL1xuICAvLyAyLiAgV2UgY2FuIGNhbGwgdGhlIHdvcmtlciBmcm9tIG90aGVyIHNhZ2FzIHdoaWNoIGlzXG4gIC8vIG9mdGVuIHJlcXVpcmVkIGluIHNvbWUgZmxvdyBjb250cm9sIGNhc2VzLlxuICByZXR1cm4ge1xuICAgIHdhdGNoQXBwLFxuICAgIHdhdGNoUGFnZSxcbiAgICB3YXRjaFBhZ2VzLFxuICAgIHdhdGNoTWFya2Rvd24sXG4gICAgd2F0Y2hNYXJrZG93bnMsXG4gICAgd29ya2VyQXBwLFxuICAgIHdvcmtlclBhZ2UsXG4gICAgd29ya2VyTWFya2Rvd25cbiAgfVxufVxuIl19