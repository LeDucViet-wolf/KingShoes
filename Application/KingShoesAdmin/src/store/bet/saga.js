import { call, put, takeEvery } from "redux-saga/effects"

// Crypto Redux States
import {
  GET_ALLBET,
} from "./actionTypes"

import {
  getAllBetFail,
  getAllBetSuccess
} from "./actions"

//Include Both Helper File with needed methods
import {
  getAllBets,
} from "../../helpers/fakebackend_helper"

function* fetchBets() {
  try {
    const response = yield call(getAllBets)
    yield put(getAllBetSuccess(response))
  } catch (error) {
    yield put(getAllBetFail(error))
  }
}

function* betSaga() {
  yield takeEvery(GET_ALLBET, fetchBets)
}

export default betSaga
