"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPageMarkdown = exports.getPageData = exports.getPageKey = exports.getAppId = exports.getApp = undefined;

var _reselect = require("reselect");

/* Private */

var allApps = function allApps(state, props) {
  return state.cmsApps;
};

var allPages = function allPages(state, props) {
  return state.cmsPages;
};

var allMarkdowns = function allMarkdowns(state, props) {
  return state.cmsMarkdowns;
};

var pageKey = function pageKey(state, props) {
  return props.location.pathname.slice(1) || "home";
};

/* Export */

var getApp = exports.getApp = (0, _reselect.createSelector)([allApps], function (apps) {
  return apps.entities[apps.result];
});

var getAppId = exports.getAppId = (0, _reselect.createSelector)([allApps], function (apps) {
  return apps.result;
});

var getPageKey = exports.getPageKey = (0, _reselect.createSelector)([pageKey], function (key) {
  return key;
});

var getPageData = exports.getPageData = (0, _reselect.createSelector)([allPages, pageKey], function (pages, key) {
  return pages.entities[key];
});

var getPageMarkdown = exports.getPageMarkdown = (0, _reselect.createSelector)([allMarkdowns, pageKey], function (markdowns, key) {
  return markdowns.entities[key];
});