import { call, put, takeEvery } from "redux-saga/effects"
// import jwt_decode from "jwt-decode";

import {
    getAllProductReviewSuccess,
    getAllProductReviewFail
} from "./action"

import {
    getAllProductReviewHelper
} from '@/helpers'

import { GET_ALL_PRODUCT_REVIEW } from "./actionType"

function* fetchProductReviewList() {
    try {
        const response = yield call(getAllProductReviewHelper)
        yield put(getAllProductReviewSuccess(response))
    } catch (error) {
        yield put(getAllProductReviewFail(error))
    }
}

function* productReviewSaga() {
    yield takeEvery(GET_ALL_PRODUCT_REVIEW, fetchProductReviewList)
}

export default productReviewSaga