import { call, put, takeEvery } from "redux-saga/effects"
// import jwt_decode from "jwt-decode";

import {
    getAllCustomerSuccess,
    getAllCustomerFail
} from "./action"

import {
    getAllCustomerHelper
} from '../../helpers'

import { GET_ALL_CUSTOMER } from "./actionType"

function* fetchCustomerList() {
    try {
        const response = yield call(getAllCustomerHelper)
        yield put(getAllCustomerSuccess(response))
    } catch (error) {
        yield put(getAllCustomerFail(error))
    }
}

function* customerSaga() {
    yield takeEvery(GET_ALL_CUSTOMER, fetchCustomerList)
}

export default customerSaga