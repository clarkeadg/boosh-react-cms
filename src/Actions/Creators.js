import Types from './Types'

/* CMS */
const getCmsAppAttempt = (meta) => ({ type: Types.GET_CMS_APP_REQUEST, meta })
const getCmsAppSuccess = (payload) => ({ type: Types.GET_CMS_APP_SUCCESS, payload })
const getCmsAppFailure = (errorCode) => ({ type: Types.GET_CMS_APP_FAILURE, errorCode })

const getCmsPageAttempt = (meta) => ({ type: Types.GET_CMS_PAGE_REQUEST, meta })
const getCmsPageSuccess = (payload) => ({ type: Types.GET_CMS_PAGE_SUCCESS, payload })
const getCmsPageFailure = (errorCode) => ({ type: Types.GET_CMS_PAGE_FAILURE, errorCode })

const getCmsMarkdownAttempt = (meta) => ({ type: Types.GET_CMS_MARKDOWN_REQUEST, meta })
const getCmsMarkdownSuccess = (payload) => ({ type: Types.GET_CMS_MARKDOWN_SUCCESS, payload })
const getCmsMarkdownFailure = (errorCode) => ({ type: Types.GET_CMS_MARKDOWN_FAILURE, errorCode })

/**
 Makes available all the action creators we've created.
 */
export default {

  getCmsAppAttempt,
  getCmsAppSuccess,
  getCmsAppFailure,

  getCmsPageAttempt,
  getCmsPageSuccess,
  getCmsPageFailure,

  getCmsMarkdownAttempt,
  getCmsMarkdownSuccess,
  getCmsMarkdownFailure

}
