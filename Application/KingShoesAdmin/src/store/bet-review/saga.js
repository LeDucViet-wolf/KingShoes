import { call, put, takeEvery } from "redux-saga/effects"

// Crypto Redux States
import {
  GET_BETREVIEW,
} from "./actionTypes"

import {
  getAllBetFail,
  getAllBetSuccess
} from "./actions"

//Include Both Helper File with needed methods
import {
  getAllBetsReview,
} from "../../helpers/fakebackend_helper"

function* fetchBets() {
  try {
    const response = yield call(getAllBetsReview)
    yield put(getAllBetSuccess(response))
  } catch (error) {
    yield put(getAllBetFail(error))
  }
}

function* betSaga() {
  yield takeEvery(GET_BETREVIEW, fetchBets)
}

export default betSaga
