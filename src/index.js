
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
  CmsActions:             CmsActions,
  CmsSaga:                CmsSaga,
  GetCmsAppSaga:          GetCmsAppSaga,
  GetCmsPageSaga:         GetCmsPageSaga,
  GetCmsMarkdownSaga:     GetCmsMarkdownSaga,
  getApp:                 CmsSelector.getApp,
  CmsApi:                 CmsApi,
  CmsAppReducer:          CmsAppReducer.default,
  CmsPageReducer:         CmsPageReducer.default,
  CmsMarkdownReducer:     CmsMarkdownReducer.default,
  CmsApp:                 CmsApp,
  CmsPage:                CmsPage,
  CmsRoutes:              CmsRoutes
}
