import { all, fork } from "redux-saga/effects"

// Product
import productSaga from "./product/saga"

export default function* rootSaga() {
    yield all([
        fork(productSaga)
    ])
}