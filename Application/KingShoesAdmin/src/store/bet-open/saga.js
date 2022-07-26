import { call, put, takeEvery } from "redux-saga/effects"

// Crypto Redux States
import {
  GET_BETOPEN,
} from "./actionTypes"

import {
  getAllBetFail,
  getAllBetSuccess
} from "./actions"

//Include Both Helper File with needed methods
import {
  getAllBetsOpen,
} from "../../helpers/fakebackend_helper"

function* fetchBets() {
  try {
    const response = yield call(getAllBetsOpen)
    yield put(getAllBetSuccess(response))
  } catch (error) {
    yield put(getAllBetFail(error))
  }
}

function* betSaga() {
  yield takeEvery(GET_BETOPEN, fetchBets)
}

export default betSaga
