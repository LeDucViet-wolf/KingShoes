import { call, put, takeEvery } from "redux-saga/effects"
// import jwt_decode from "jwt-decode";

import { getProductList } from "./action"
import productReducer from "./reducer"
import { GET_ALL_PRODUCT } from "./actionType"

function* fetchProductList() {
    try {
        const response = yield call(getProductList)
        yield put(getUsersSuccess(response))
    } catch (error) {
        yield put(getUsersFail(error))
    }
}

function* productSaga() {
    yield takeEvery(GET_ALL_PRODUCT, fetchProductList)
}

export default productSaga