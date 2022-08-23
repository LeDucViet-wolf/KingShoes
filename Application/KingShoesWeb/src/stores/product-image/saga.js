import { call, put, takeEvery } from "redux-saga/effects"
// import jwt_decode from "jwt-decode";

import {
    getAllProductImageSuccess,
    getAllProductImageFail
} from "./action"

import {
    getAllProductImageHelper
} from '@/helpers'

import { GET_ALL_PRODUCT_IMAGE } from "./actionType"

function* fetchProductImageList() {
    try {
        const response = yield call(getAllProductImageHelper)
        yield put(getAllProductImageSuccess(response))
    } catch (error) {
        yield put(getAllProductImageFail(error))
    }
}

function* productImageSaga() {
    yield takeEvery(GET_ALL_PRODUCT_IMAGE, fetchProductImageList)
}

export default productImageSaga