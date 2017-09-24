
const CmsActions          = require('./Actions/Creators');
const CmsSaga             = require('./Sagas/CmsSaga');
const GetCmsAppSaga       = require('./Sagas/Preloaders/GetCmsAppSaga');
const GetCmsPageSaga      = require('./Sagas/Preloaders/GetCmsPageSaga');
const GetCmsMarkdownSaga  = require('./Sagas/Preloaders/GetCmsMarkdownSaga');
const CmsSelector         = require('./Selectors/CmsSelector');
const CmsApi              = require('./Services/CmsApi');
const CmsAppReducer       = require('./Reducers/CmsAppReducer');
const CmsPageReducer      = require('./Reducers/CmsPageReducer');
const CmsMarkdownReducer  = require('./Reducers/CmsMarkdownReducer');
const CmsApp              = require('./Containers/App');
const CmsPage             = require('./Containers/Page');
const CmsRoutes           = require('./routes');

module.exports = {
  CmsActions:             CmsActions.default,
  CmsSaga:                CmsSaga.default,
  GetCmsAppSaga:          GetCmsAppSaga.default,
  GetCmsPageSaga:         GetCmsPageSaga.default,
  GetCmsMarkdownSaga:     GetCmsMarkdownSaga,
  getApp:                 CmsSelector.getApp,
  getAppId:               CmsSelector.getAppId,
  getPageKey:             CmsSelector.getPageKey,
  getPageData:            CmsSelector.getPageData,
  getPageMarkdown:        CmsSelector.getPageMarkdown,
  CmsApi:                 CmsApi.default,
  CmsAppReducer:          CmsAppReducer.default,
  CmsPageReducer:         CmsPageReducer.default,
  CmsMarkdownReducer:     CmsMarkdownReducer.default,
  CmsApp:                 CmsApp.default,
  CmsPage:                CmsPage.default,
  CmsRoutes:              CmsRoutes.default
}
