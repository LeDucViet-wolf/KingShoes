import { all, fork } from "redux-saga/effects"

import productSaga from "./product/saga"
import userSaga from "./user/saga"
import customerSaga from "./customer/saga"
import categorySaga from "./category/saga"

export default function* rootSaga() {
    yield all([
        fork(productSaga),
        fork(userSaga),
        fork(customerSaga),
        fork(categorySaga)
    ])
}