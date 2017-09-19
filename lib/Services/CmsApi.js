'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _apisauce = require('apisauce');

var _apisauce2 = _interopRequireDefault(_apisauce);

var _es6Promise = require('es6-promise');

var _isomorphicFetch = require('isomorphic-fetch');

var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

if (typeof global !== 'undefined') {
  var self = global.self;
}

/* Config */
//import Config from '../config'

// a library to wrap and simplify api calls
var apiURL = 'http://local.cdn.boosh.io/cms/';

// our "constructor"
var create = function create() {
  var baseURL = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : apiURL;

  // ------
  // STEP 1
  // ------
  //
  // Create and configure an apisauce-based api object.
  //
  var CmsApi = _apisauce2.default.create({
    // base URL is read from the "constructor"
    baseURL: baseURL,
    // here are some default headers
    headers: {
      //'Cache-Control': 'no-cache'
    },
    // 10 second timeout...
    timeout: 10000
  });

  // Force OpenWeather API Key on all requests
  /*CmsApi.addRequestTransform(request => {
    request.params['APPID'] = '0e44183e8d1018fc92eb3307d885379c'
  })*/

  // Wrap api's addMonitor to allow the calling code to attach
  // additional monitors in the future.  But only in __DEV__ and only
  // if we've attached Reactotron to console (it isn't during unit tests).
  //if (__DEV__ && console.tron) {
  //  console.tron.log('Hello, I\'m an example of how to log via Reactotron.')
  //  iTunesApi.addMonitor(console.tron.apisauce)
  //}

  // ------
  // STEP 2
  // ------
  //
  // Define some functions that call the api.  The goal is to provide
  // a thin wrapper of the api layer providing nicer feeling functions
  // rather than "get", "post" and friends.
  //
  // I generally don't like wrapping the output at this level because
  // sometimes specific actions need to be take on `403` or `401`, etc.
  //
  // Since we can't hide from that, we embrace it by getting out of the
  // way at this level.
  //
  var getCmsAppData = function getCmsAppData(appId) {
    return CmsApi.get(appId + '/app.json');
  };

  var getCmsPageData = function getCmsPageData(appId, pageId) {
    return CmsApi.get(appId + '/pages/' + pageId + '/data.json');
  };

  var getCmsMarkdown = function getCmsMarkdown(appId, pageId) {
    return (0, _isomorphicFetch2.default)(apiURL + appId + '/pages/' + pageId + '/markdown.md').then(function (res) {
      return _promise2.default.resolve(res.text());
    });
  };

  // ------
  // STEP 3
  // ------
  //
  // Return back a collection of functions that we would consider our
  // interface.  Most of the time it'll be just the list of all the
  // methods in step 2.
  //
  // Notice we're not returning back the `api` created in step 1?  That's
  // because it is scoped privately.  This is one way to create truly
  // private scoped goodies in JavaScript.
  //
  return {
    // a list of the API functions from step 2
    getCmsAppData: getCmsAppData,
    getCmsPageData: getCmsPageData,
    getCmsMarkdown: getCmsMarkdown
  };
};

// let's return back our create method as the default.
exports.default = {
  create: create
};
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9TZXJ2aWNlcy9DbXNBcGkuanMiXSwibmFtZXMiOlsiZ2xvYmFsIiwic2VsZiIsImFwaVVSTCIsImNyZWF0ZSIsImJhc2VVUkwiLCJDbXNBcGkiLCJoZWFkZXJzIiwidGltZW91dCIsImdldENtc0FwcERhdGEiLCJhcHBJZCIsImdldCIsImdldENtc1BhZ2VEYXRhIiwicGFnZUlkIiwiZ2V0Q21zTWFya2Rvd24iLCJ0aGVuIiwicmVzb2x2ZSIsInJlcyIsInRleHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7Ozs7QUFFQSxJQUFJLE9BQU9BLE1BQVAsS0FBa0IsV0FBdEIsRUFBbUM7QUFDakMsTUFBSUMsT0FBT0QsT0FBT0MsSUFBbEI7QUFDRDs7QUFFRDtBQUNBOztBQVZBO0FBWUEsSUFBTUMsU0FBUyxnQ0FBZjs7QUFFQTtBQUNBLElBQU1DLFNBQVMsU0FBVEEsTUFBUyxHQUFzQjtBQUFBLE1BQXJCQyxPQUFxQix1RUFBWEYsTUFBVzs7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTUcsU0FBUyxtQkFBU0YsTUFBVCxDQUFnQjtBQUM3QjtBQUNBQyxvQkFGNkI7QUFHN0I7QUFDQUUsYUFBUztBQUNQO0FBRE8sS0FKb0I7QUFPN0I7QUFDQUMsYUFBUztBQVJvQixHQUFoQixDQUFmOztBQVdBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTUMsZ0JBQWdCLFNBQWhCQSxhQUFnQixDQUFDQyxLQUFELEVBQVc7QUFDL0IsV0FBT0osT0FBT0ssR0FBUCxDQUFXRCxRQUFNLFdBQWpCLENBQVA7QUFDRCxHQUZEOztBQUlBLE1BQU1FLGlCQUFpQixTQUFqQkEsY0FBaUIsQ0FBQ0YsS0FBRCxFQUFRRyxNQUFSLEVBQW1CO0FBQ3hDLFdBQU9QLE9BQU9LLEdBQVAsQ0FBV0QsUUFBTSxTQUFOLEdBQWdCRyxNQUFoQixHQUF1QixZQUFsQyxDQUFQO0FBQ0QsR0FGRDs7QUFJQSxNQUFNQyxpQkFBaUIsU0FBakJBLGNBQWlCLENBQUNKLEtBQUQsRUFBUUcsTUFBUixFQUFtQjtBQUN4QyxXQUFPLCtCQUFNVixTQUFPTyxLQUFQLEdBQWEsU0FBYixHQUF1QkcsTUFBdkIsR0FBOEIsY0FBcEMsRUFDSkUsSUFESSxDQUNDO0FBQUEsYUFBTyxrQkFBUUMsT0FBUixDQUFnQkMsSUFBSUMsSUFBSixFQUFoQixDQUFQO0FBQUEsS0FERCxDQUFQO0FBRUQsR0FIRDs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFPO0FBQ0w7QUFDQVQsZ0NBRks7QUFHTEcsa0NBSEs7QUFJTEU7QUFKSyxHQUFQO0FBTUQsQ0E1RUQ7O0FBOEVBO2tCQUNlO0FBQ2JWO0FBRGEsQyIsImZpbGUiOiJDbXNBcGkuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBhIGxpYnJhcnkgdG8gd3JhcCBhbmQgc2ltcGxpZnkgYXBpIGNhbGxzXG5pbXBvcnQgYXBpc2F1Y2UgZnJvbSAnYXBpc2F1Y2UnXG5pbXBvcnQgeyBwb2x5ZmlsbCB9IGZyb20gJ2VzNi1wcm9taXNlJ1xuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtZmV0Y2gnXG5cbmlmICh0eXBlb2YgZ2xvYmFsICE9PSAndW5kZWZpbmVkJykge1xuICB2YXIgc2VsZiA9IGdsb2JhbC5zZWxmO1xufVxuXG4vKiBDb25maWcgKi9cbi8vaW1wb3J0IENvbmZpZyBmcm9tICcuLi9jb25maWcnXG5cbmNvbnN0IGFwaVVSTCA9ICdodHRwOi8vbG9jYWwuY2RuLmJvb3NoLmlvL2Ntcy8nXG5cbi8vIG91ciBcImNvbnN0cnVjdG9yXCJcbmNvbnN0IGNyZWF0ZSA9IChiYXNlVVJMID0gYXBpVVJMKSA9PiB7XG4gIC8vIC0tLS0tLVxuICAvLyBTVEVQIDFcbiAgLy8gLS0tLS0tXG4gIC8vXG4gIC8vIENyZWF0ZSBhbmQgY29uZmlndXJlIGFuIGFwaXNhdWNlLWJhc2VkIGFwaSBvYmplY3QuXG4gIC8vXG4gIGNvbnN0IENtc0FwaSA9IGFwaXNhdWNlLmNyZWF0ZSh7XG4gICAgLy8gYmFzZSBVUkwgaXMgcmVhZCBmcm9tIHRoZSBcImNvbnN0cnVjdG9yXCJcbiAgICBiYXNlVVJMLFxuICAgIC8vIGhlcmUgYXJlIHNvbWUgZGVmYXVsdCBoZWFkZXJzXG4gICAgaGVhZGVyczoge1xuICAgICAgLy8nQ2FjaGUtQ29udHJvbCc6ICduby1jYWNoZSdcbiAgICB9LFxuICAgIC8vIDEwIHNlY29uZCB0aW1lb3V0Li4uXG4gICAgdGltZW91dDogMTAwMDBcbiAgfSlcblxuICAvLyBGb3JjZSBPcGVuV2VhdGhlciBBUEkgS2V5IG9uIGFsbCByZXF1ZXN0c1xuICAvKkNtc0FwaS5hZGRSZXF1ZXN0VHJhbnNmb3JtKHJlcXVlc3QgPT4ge1xuICAgIHJlcXVlc3QucGFyYW1zWydBUFBJRCddID0gJzBlNDQxODNlOGQxMDE4ZmM5MmViMzMwN2Q4ODUzNzljJ1xuICB9KSovXG5cbiAgLy8gV3JhcCBhcGkncyBhZGRNb25pdG9yIHRvIGFsbG93IHRoZSBjYWxsaW5nIGNvZGUgdG8gYXR0YWNoXG4gIC8vIGFkZGl0aW9uYWwgbW9uaXRvcnMgaW4gdGhlIGZ1dHVyZS4gIEJ1dCBvbmx5IGluIF9fREVWX18gYW5kIG9ubHlcbiAgLy8gaWYgd2UndmUgYXR0YWNoZWQgUmVhY3RvdHJvbiB0byBjb25zb2xlIChpdCBpc24ndCBkdXJpbmcgdW5pdCB0ZXN0cykuXG4gIC8vaWYgKF9fREVWX18gJiYgY29uc29sZS50cm9uKSB7XG4gIC8vICBjb25zb2xlLnRyb24ubG9nKCdIZWxsbywgSVxcJ20gYW4gZXhhbXBsZSBvZiBob3cgdG8gbG9nIHZpYSBSZWFjdG90cm9uLicpXG4gIC8vICBpVHVuZXNBcGkuYWRkTW9uaXRvcihjb25zb2xlLnRyb24uYXBpc2F1Y2UpXG4gIC8vfVxuXG4gIC8vIC0tLS0tLVxuICAvLyBTVEVQIDJcbiAgLy8gLS0tLS0tXG4gIC8vXG4gIC8vIERlZmluZSBzb21lIGZ1bmN0aW9ucyB0aGF0IGNhbGwgdGhlIGFwaS4gIFRoZSBnb2FsIGlzIHRvIHByb3ZpZGVcbiAgLy8gYSB0aGluIHdyYXBwZXIgb2YgdGhlIGFwaSBsYXllciBwcm92aWRpbmcgbmljZXIgZmVlbGluZyBmdW5jdGlvbnNcbiAgLy8gcmF0aGVyIHRoYW4gXCJnZXRcIiwgXCJwb3N0XCIgYW5kIGZyaWVuZHMuXG4gIC8vXG4gIC8vIEkgZ2VuZXJhbGx5IGRvbid0IGxpa2Ugd3JhcHBpbmcgdGhlIG91dHB1dCBhdCB0aGlzIGxldmVsIGJlY2F1c2VcbiAgLy8gc29tZXRpbWVzIHNwZWNpZmljIGFjdGlvbnMgbmVlZCB0byBiZSB0YWtlIG9uIGA0MDNgIG9yIGA0MDFgLCBldGMuXG4gIC8vXG4gIC8vIFNpbmNlIHdlIGNhbid0IGhpZGUgZnJvbSB0aGF0LCB3ZSBlbWJyYWNlIGl0IGJ5IGdldHRpbmcgb3V0IG9mIHRoZVxuICAvLyB3YXkgYXQgdGhpcyBsZXZlbC5cbiAgLy9cbiAgY29uc3QgZ2V0Q21zQXBwRGF0YSA9IChhcHBJZCkgPT4ge1xuICAgIHJldHVybiBDbXNBcGkuZ2V0KGFwcElkKycvYXBwLmpzb24nKVxuICB9XG5cbiAgY29uc3QgZ2V0Q21zUGFnZURhdGEgPSAoYXBwSWQsIHBhZ2VJZCkgPT4ge1xuICAgIHJldHVybiBDbXNBcGkuZ2V0KGFwcElkKycvcGFnZXMvJytwYWdlSWQrJy9kYXRhLmpzb24nKVxuICB9XG5cbiAgY29uc3QgZ2V0Q21zTWFya2Rvd24gPSAoYXBwSWQsIHBhZ2VJZCkgPT4ge1xuICAgIHJldHVybiBmZXRjaChhcGlVUkwrYXBwSWQrJy9wYWdlcy8nK3BhZ2VJZCsnL21hcmtkb3duLm1kJylcbiAgICAgIC50aGVuKHJlcyA9PiBQcm9taXNlLnJlc29sdmUocmVzLnRleHQoKSkpXG4gIH1cblxuICAvLyAtLS0tLS1cbiAgLy8gU1RFUCAzXG4gIC8vIC0tLS0tLVxuICAvL1xuICAvLyBSZXR1cm4gYmFjayBhIGNvbGxlY3Rpb24gb2YgZnVuY3Rpb25zIHRoYXQgd2Ugd291bGQgY29uc2lkZXIgb3VyXG4gIC8vIGludGVyZmFjZS4gIE1vc3Qgb2YgdGhlIHRpbWUgaXQnbGwgYmUganVzdCB0aGUgbGlzdCBvZiBhbGwgdGhlXG4gIC8vIG1ldGhvZHMgaW4gc3RlcCAyLlxuICAvL1xuICAvLyBOb3RpY2Ugd2UncmUgbm90IHJldHVybmluZyBiYWNrIHRoZSBgYXBpYCBjcmVhdGVkIGluIHN0ZXAgMT8gIFRoYXQnc1xuICAvLyBiZWNhdXNlIGl0IGlzIHNjb3BlZCBwcml2YXRlbHkuICBUaGlzIGlzIG9uZSB3YXkgdG8gY3JlYXRlIHRydWx5XG4gIC8vIHByaXZhdGUgc2NvcGVkIGdvb2RpZXMgaW4gSmF2YVNjcmlwdC5cbiAgLy9cbiAgcmV0dXJuIHtcbiAgICAvLyBhIGxpc3Qgb2YgdGhlIEFQSSBmdW5jdGlvbnMgZnJvbSBzdGVwIDJcbiAgICBnZXRDbXNBcHBEYXRhLFxuICAgIGdldENtc1BhZ2VEYXRhLFxuICAgIGdldENtc01hcmtkb3duXG4gIH1cbn1cblxuLy8gbGV0J3MgcmV0dXJuIGJhY2sgb3VyIGNyZWF0ZSBtZXRob2QgYXMgdGhlIGRlZmF1bHQuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGNyZWF0ZVxufVxuIl19