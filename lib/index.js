'use strict';

var CmsActions = require('./Actions/Creators');
var CmsSaga = require('./Sagas/CmsSaga');
var GetCmsAppSaga = require('./Sagas/Preloaders/GetCmsAppSaga');
var GetCmsPageSaga = require('./Sagas/Preloaders/GetCmsPageSaga');
var GetCmsMarkdownSaga = require('./Sagas/Preloaders/GetCmsMarkdownSaga');
var CmsSelector = require('./Selectors/CmsSelector');
var CmsApi = require('./Services/CmsApi');
var CmsAppReducer = require('./Reducers/CmsAppReducer');
var CmsPageReducer = require('./Reducers/CmsPageReducer');
var CmsMarkdownReducer = require('./Reducers/CmsMarkdownReducer');
var CmsApp = require('./Containers/App');
var CmsPage = require('./Containers/Page');
var CmsRoutes = require('./routes');

module.exports = {
  CmsActions: CmsActions.default,
  CmsSaga: CmsSaga.default,
  GetCmsAppSaga: GetCmsAppSaga.default,
  GetCmsPageSaga: GetCmsPageSaga.default,
  GetCmsMarkdownSaga: GetCmsMarkdownSaga,
  getApp: CmsSelector.getApp,
  CmsApi: CmsApi.default,
  CmsAppReducer: CmsAppReducer.default,
  CmsPageReducer: CmsPageReducer.default,
  CmsMarkdownReducer: CmsMarkdownReducer.default,
  CmsApp: CmsApp.default,
  CmsPage: CmsPage.default,
  CmsRoutes: CmsRoutes.default
};