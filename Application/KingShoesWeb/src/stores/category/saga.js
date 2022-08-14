import { call, put, takeEvery } from "redux-saga/effects"
// import jwt_decode from "jwt-decode";

import {
    getAllCategorySuccess,
    getAllCategoryFail
} from "./action"

import {
    getAllCategoryHelper
} from '../../helpers'

import { GET_ALL_CATEGORY } from "./actionType"

function* fetchCategoryList() {
    try {
        const response = yield call(getAllCategoryHelper)
        yield put(getAllCategorySuccess(response))
    } catch (error) {
        yield put(getAllCategoryFail(error))
    }
}

function* categorySaga() {
    yield takeEvery(GET_ALL_CATEGORY, fetchCategoryList)
}

export default categorySaga