import { fork, put } from 'redux-saga/effects'

import Actions from '../../Actions/Creators'
import CmsApi from '../../Services/CmsApi'
import GetCmsSaga from './../CmsSaga'

// create api
const api = CmsApi.create()

// start the daemons
export default function * getCmsMarkdownSaga(meta) {
  yield [
    fork(GetCmsSaga(api).watchMarkdown)
  ]
  yield put(Actions.getCmsMarkdownAttempt(meta))
}
