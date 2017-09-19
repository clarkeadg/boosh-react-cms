// A list of all actions in the system.
import { createTypes } from 'reduxsauce'

export default createTypes(`

  GET_CMS_APP_REQUEST
  GET_CMS_APP_SUCCESS
  GET_CMS_APP_FAILURE

  GET_CMS_PAGE_REQUEST
  GET_CMS_PAGE_SUCCESS
  GET_CMS_PAGE_FAILURE

  GET_CMS_MARKDOWN_REQUEST
  GET_CMS_MARKDOWN_SUCCESS
  GET_CMS_MARKDOWN_FAILURE

`)
