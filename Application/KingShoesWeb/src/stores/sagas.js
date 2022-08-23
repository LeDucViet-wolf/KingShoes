import { all, fork } from "redux-saga/effects"

import productSaga from "./product/saga"
import productSizeSaga from "./product-size/saga"
import productReviewSaga from "./product-review/saga"
import productImageSaga from "./product-image/saga"
import userSaga from "./user/saga"
import customerSaga from "./customer/saga"
import categorySaga from "./category/saga"

export default function* rootSaga() {
    yield all([
        fork(productSaga),
        fork(productSizeSaga),
        fork(productReviewSaga),
        fork(productImageSaga),
        fork(userSaga),
        fork(customerSaga),
        fork(categorySaga)
    ])
}