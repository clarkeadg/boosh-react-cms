import {take, call, put} from 'redux-saga/effects'
import Types from '../Actions/Types'
import Actions from '../Actions/Creators'

// This style of Saga is a common pattern.  It has a
// worker and a watcher.
//
// The watcher listens for the signal, and the worker
// does the job.

// We use a factory function will close over the scope of
// our watcher saga.  This ensures the API is passed in
// (hurray objects being composed).
export default (api) => {
  // ----------
  // The Worker
  // ----------
  // This is our worker.  It does the job.  In this case, we
  // get the weather for the city.
  function * workerApp (meta) {

    // make the call to the api
    const response = yield call(api.getCmsAppData, meta.appId)

    //console.log(response)

    // success?
    if (response && response.ok) {

      let payload = {
        entities: {
          apps: {}
        },
        result: null
      }

      payload.entities.apps[meta.appId] = response.data;
      payload.result = meta.appId;
      //console.log('APP PAYLOAD', payload)

      yield put(Actions.getCmsAppSuccess(payload))
    } else {
      yield put(Actions.getCmsAppFailure({errorCode:response}))
    }
  }

  function * workerPage (meta) {

    meta.pageId = meta.pageId || "home"

    // make the call to the api
    const response = yield call(api.getCmsPageData, meta.appId, meta.pageId)

    // success?
    if (response && response.ok) {

      let payload = {
        entities: {
          pages: {}
        },
        result: null
      }

      payload.entities.pages[meta.pageId] = response.data;
      payload.result = meta.pageId;
      //console.log('PAGE PAYLOAD', payload)

      //let payload = normalize(response.data, CmsPageSchema);
      //console.log('NORMALIZED DATA PAGE', payload)

      yield put(Actions.getCmsPageSuccess(payload))
    } else {
      yield put(Actions.getCmsPageFailure())
    }
  }

  function * workerMarkdown (meta) {

    meta.pageId = meta.pageId || "home"

    // make the call to the api
    const response = yield call(api.getCmsMarkdown, meta.appId, meta.pageId)

    // success?
    if (response) {

      //console.log(response)

      let payload = {
        entities: {
          markdowns: {}
        },
        result: null
      }

      payload.entities.markdowns[meta.pageId] = response;
      payload.result = meta.pageId;
      //console.log('PAGE MARKDOWN PAYLOAD', payload)

      yield put(Actions.getCmsMarkdownSuccess(payload))
    } else {
      yield put(Actions.getCmsMarkdownFailure())
    }
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
  function * watchApp () {
    //while (true) {
      const action = yield take(Types.GET_CMS_APP_REQUEST)
      const { meta } = action
      yield call(workerApp, meta)
    //}
  }

  function * watchPage () {
    //while (true) {
      const action = yield take(Types.GET_CMS_PAGE_REQUEST)
      const { meta } = action
      yield call(workerPage, meta)
    //}
  }

  function * watchPages () {
    while (true) {
      const action = yield take(Types.GET_CMS_PAGE_REQUEST)
      const { meta } = action
      yield call(workerPage, meta)
    }
  }

  function * watchMarkdown () {
    //while (true) {
      const action = yield take(Types.GET_CMS_MARKDOWN_REQUEST)
      const { meta } = action
      yield call(workerMarkdown, meta)
    //}
  }

  function * watchMarkdowns () {
    while (true) {
      const action = yield take(Types.GET_CMS_MARKDOWN_REQUEST)
      const { meta } = action
      yield call(workerMarkdown, meta)
    }
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
    watchApp,
    watchPage,
    watchPages,
    watchMarkdown,
    watchMarkdowns,
    workerApp,
    workerPage,
    workerMarkdown
  }
}
