import { createSelector } from 'reselect'

/* Private */

const allApps = (state, props) => state.cmsApps

const allPages = (state, props) => state.cmsPages

const allMarkdowns = (state, props) => state.cmsMarkdowns

const pageKey = (state, props) => props.location.pathname.slice(1) || "home"

/* Export */

export const getApp = createSelector(
  [ allApps ],
  ( apps ) => {
    return apps.entities[apps.result]
  }
)

export const getAppId = createSelector(
  [ allApps ],
  ( apps ) => {
    return apps.result
  }
)

export const getPageKey = createSelector(
  [ pageKey ],
  ( key ) => {
    return key
  }
)

export const getPageData = createSelector(
  [ allPages, pageKey ],
  ( pages, key ) => {
    return pages.entities[key]
  }
)

export const getPageMarkdown = createSelector(
  [ allMarkdowns, pageKey ],
  ( markdowns, key ) => {
    return markdowns.entities[key]
  }
)
