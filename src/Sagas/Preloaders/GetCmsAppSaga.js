import { fork, put } from 'redux-saga/effects'

import Actions from '../../Actions/Creators'
import CmsApi from '../../Services/CmsApi'
import GetCmsSaga from './../CmsSaga'

// create api
const api = CmsApi.create()

// start the daemons
export default function * getCmsAppSaga(meta) {
  yield [
    fork(GetCmsSaga(api).watchApp)
  ]
  yield put(Actions.getCmsAppAttempt(meta))
}
