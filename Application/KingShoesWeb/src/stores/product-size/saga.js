import { call, put, takeEvery } from "redux-saga/effects"
// import jwt_decode from "jwt-decode";

import {
    getAllProductSizeSuccess,
    getAllProductSizeFail
} from "./action"

import {
    getAllProductSizeHelper
} from '@/helpers'

import { GET_ALL_PRODUCT_SIZE } from "./actionType"

function* fetchProductSizeList() {
    try {
        const response = yield call(getAllProductSizeHelper)
        yield put(getAllProductSizeSuccess(response))
    } catch (error) {
        yield put(getAllProductSizeFail(error))
    }
}

function* productSizeSaga() {
    yield takeEvery(GET_ALL_PRODUCT_SIZE, fetchProductSizeList)
}

export default productSizeSaga