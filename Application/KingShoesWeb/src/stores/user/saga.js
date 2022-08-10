import { call, put, takeEvery } from "redux-saga/effects"
// import jwt_decode from "jwt-decode";

import {
    getAllUserSuccess,
    getAllUserFail
} from "./action"

import {
    getAllUserHelper
} from '../../helpers'

import { GET_ALL_USER } from "./actionType"

function* fetchUserList() {
    try {
        const response = yield call(getAllUserHelper)
        yield put(getAllUserSuccess(response))
    } catch (error) {
        yield put(getAllUserFail(error))
    }
}

function* userSaga() {
    yield takeEvery(GET_ALL_USER, fetchUserList)
}

export default userSaga