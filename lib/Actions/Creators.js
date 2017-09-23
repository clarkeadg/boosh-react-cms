'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Types = require('./Types');

var _Types2 = _interopRequireDefault(_Types);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* CMS */
var getCmsAppAttempt = function getCmsAppAttempt(meta) {
  return { type: _Types2.default.GET_CMS_APP_REQUEST, meta: meta };
};
var getCmsAppSuccess = function getCmsAppSuccess(payload) {
  return { type: _Types2.default.GET_CMS_APP_SUCCESS, payload: payload };
};
var getCmsAppFailure = function getCmsAppFailure(errorCode) {
  return { type: _Types2.default.GET_CMS_APP_FAILURE, errorCode: errorCode };
};

var getCmsPageAttempt = function getCmsPageAttempt(meta) {
  return { type: _Types2.default.GET_CMS_PAGE_REQUEST, meta: meta };
};
var getCmsPageSuccess = function getCmsPageSuccess(payload) {
  return { type: _Types2.default.GET_CMS_PAGE_SUCCESS, payload: payload };
};
var getCmsPageFailure = function getCmsPageFailure(errorCode) {
  return { type: _Types2.default.GET_CMS_PAGE_FAILURE, errorCode: errorCode };
};

var getCmsMarkdownAttempt = function getCmsMarkdownAttempt(meta) {
  return { type: _Types2.default.GET_CMS_MARKDOWN_REQUEST, meta: meta };
};
var getCmsMarkdownSuccess = function getCmsMarkdownSuccess(payload) {
  return { type: _Types2.default.GET_CMS_MARKDOWN_SUCCESS, payload: payload };
};
var getCmsMarkdownFailure = function getCmsMarkdownFailure(errorCode) {
  return { type: _Types2.default.GET_CMS_MARKDOWN_FAILURE, errorCode: errorCode };
};

/**
 Makes available all the action creators we've created.
 */
exports.default = {

  getCmsAppAttempt: getCmsAppAttempt,
  getCmsAppSuccess: getCmsAppSuccess,
  getCmsAppFailure: getCmsAppFailure,

  getCmsPageAttempt: getCmsPageAttempt,
  getCmsPageSuccess: getCmsPageSuccess,
  getCmsPageFailure: getCmsPageFailure,

  getCmsMarkdownAttempt: getCmsMarkdownAttempt,
  getCmsMarkdownSuccess: getCmsMarkdownSuccess,
  getCmsMarkdownFailure: getCmsMarkdownFailure

};