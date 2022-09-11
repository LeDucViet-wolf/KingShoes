import { call, put, takeEvery } from "redux-saga/effects"
// import jwt_decode from "jwt-decode";

import {
    getAllProductReviewSuccess,
    getAllProductReviewFail,
    addProductReviewSuccess,
    addProductReviewFail,
    updateProductReviewSuccess,
    updateProductReviewFail,
    deleteProductReviewSuccess,
    deleteProductReviewFail,
} from "./action"

import {
    getAllProductReviewHelper,
    insertProductReviewHelper,
    updateProductReviewHelper,
    deleteProductReviewHelper
} from '@/helpers'

import {
    GET_ALL_PRODUCT_REVIEW,
    ADD_PRODUCT_REVIEW,
    UPDATE_PRODUCT_REVIEW,
    DELETE_PRODUCT_REVIEW
} from "./actionType"

function* fetchProductReviewList() {
    try {
        const response = yield call(getAllProductReviewHelper)
        yield put(getAllProductReviewSuccess(response))
    } catch (error) {
        yield put(getAllProductReviewFail(error))
    }
}

function* onAddNewProductReview({ payload: productReview }) {
    try {
        const response = yield call(insertProductReviewHelper, productReview)
        yield put(addProductReviewSuccess(response))
    } catch (error) {
        yield put(addProductReviewFail(error))
    }
}

function* onUpdateProductReview({ payload: productReview }) {
    try {
        const response = yield call(updateProductReviewHelper, productReview)
        response != 0
            ? yield put(updateProductReviewSuccess(productReview))
            : yield put(updateProductReviewSuccess({}))

    } catch (error) {
        yield put(updateProductReviewFail(error))
    }
}

function* onDeleteProductReview({ payload: id }) {
    try {
        const response = yield call(deleteProductReviewHelper, id)
        yield put(deleteProductReviewSuccess(response))
    } catch (error) {
        yield put(deleteProductReviewFail(error))
    }
}

function* productReviewSaga() {
    yield takeEvery(GET_ALL_PRODUCT_REVIEW, fetchProductReviewList)
    yield takeEvery(ADD_PRODUCT_REVIEW, onAddNewProductReview)
    yield takeEvery(UPDATE_PRODUCT_REVIEW, onUpdateProductReview)
    yield takeEvery(DELETE_PRODUCT_REVIEW, onDeleteProductReview)
}

export default productReviewSaga