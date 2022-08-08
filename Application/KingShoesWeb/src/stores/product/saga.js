import { call, put, takeEvery } from "redux-saga/effects"
// import jwt_decode from "jwt-decode";

import {
    getAllProductSuccess,
    getAllProductFail
} from "./action"

import {
    getAllProductHelper
} from '../../helpers'

import { GET_ALL_PRODUCT } from "./actionType"

function* fetchProductList() {
    try {
        const response = yield call(getAllProductHelper)
        yield put(getAllProductSuccess(response))
    } catch (error) {
        yield put(getAllProductFail(error))
    }
}

function* productSaga() {
    yield takeEvery(GET_ALL_PRODUCT, fetchProductList)
}

export default productSaga