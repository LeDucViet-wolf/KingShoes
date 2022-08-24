import { call, put, takeEvery } from "redux-saga/effects"
// import jwt_decode from "jwt-decode";

import {
    getAllProductImageSuccess,
    getAllProductImageFail,
    getByIdProductImageSuccess,
    getByIdProductImageFail
} from "./action"

import {
    getAllProductImageHelper,
    getProductReviewByIdHelper
} from '@/helpers'

import {
    GET_ALL_PRODUCT_IMAGE,
    GET_BY_ID_PRODUCT_IMAGE
} from "./actionType"

function* fetchProductImageList() {
    try {
        const response = yield call(getAllProductImageHelper)
        yield put(getAllProductImageSuccess(response))
    } catch (error) {
        yield put(getAllProductImageFail(error))
    }
}

function* fetchByIdProductImageList({ payload: id }) {
    try {
        const response = yield call(getProductReviewByIdHelper, id)
        yield put(getByIdProductImageSuccess(response))
    } catch (error) {
        yield put(getByIdProductImageFail(error))
    }
}

function* productImageSaga() {
    yield takeEvery(GET_ALL_PRODUCT_IMAGE, fetchProductImageList)
    yield takeEvery(GET_BY_ID_PRODUCT_IMAGE, fetchByIdProductImageList)
}

export default productImageSaga