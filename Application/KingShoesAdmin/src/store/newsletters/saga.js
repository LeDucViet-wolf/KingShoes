import { call, put, takeEvery } from "redux-saga/effects"

// Crypto Redux States
import {
  GET_NEWSLETTERS,
  DELETE_NEWSLETTER,
} from "./actionTypes"

import {
  getNewsletterSuccess,
  getNewsletterFail,
  deleteNewsletterSuccess,
  deleteNewsletterFail
} from "./actions"

//Include Both Helper File with needed methods
import {
  deleteNewsletters,
  getNewsletters,
} from "../../helpers/fakebackend_helper"

function* fetchNewsletters() {
  try {
    const response = yield call(getNewsletters)
    yield put(getNewsletterSuccess(response))
  } catch (error) {
    yield put(getNewsletterFail(error))
  }
}

function* onDeleteNewsletter({ payload: newsletter }) {
  try {
    const response = yield call(deleteNewsletters, newsletter)
    yield put(deleteNewsletterSuccess(response))
  } catch (error) {
    yield put(deleteNewsletterFail(error))
  }
}

function* contactsSaga() {
  yield takeEvery(GET_NEWSLETTERS, fetchNewsletters)
  yield takeEvery(DELETE_NEWSLETTER, onDeleteNewsletter)
}

export default contactsSaga
