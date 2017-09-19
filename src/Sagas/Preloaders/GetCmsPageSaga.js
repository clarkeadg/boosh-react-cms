import { fork, put } from 'redux-saga/effects'

import Actions from '../../Actions/Creators'
import CmsApi from '../../Services/CmsApi'
import GetCmsSaga from './../CmsSaga'

// create api
const api = CmsApi.create()

// start the daemons
export default function * getCmsPageSaga(meta) {
  yield [
    fork(GetCmsSaga(api).watchPage)
  ]
  yield put(Actions.getCmsPageAttempt(meta))
}
