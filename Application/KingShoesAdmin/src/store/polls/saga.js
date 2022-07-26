import { call, put, takeEvery } from "redux-saga/effects"

// Crypto Redux States
import {
  GET_POLLS,
  DELETE_POLL,
} from "./actionTypes"

import {
  getPollSuccess,
  getPollFail,
} from "./actions"

//Include Both Helper File with needed methods
import {
  getPolls,
} from "../../helpers/fakebackend_helper"

function* fetchPolls() {
  try {
    const response = yield call(getPolls)
    yield put(getPollSuccess(response))
  } catch (error) {
    yield put(getPollFail(error))
  }
}

function* pollSaga() {
  yield takeEvery(GET_POLLS, fetchPolls)
}

export default pollSaga
