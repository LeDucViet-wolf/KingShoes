import { combineReducers } from "redux"

import productReducer from "./product/reducer"
import productSizeReducer from "./product-size/reducer"
import productReviewReducer from "./product-review/reducer"
import productImageReducer from "./product-image/reducer"
import userReducer from "./user/reducer"
import customerReducer from "./customer/reducer"
import categoryReducer from "./category/reducer"

const rootReducer = combineReducers({
    productReducer,
    productSizeReducer,
    productReviewReducer,
    productImageReducer,
    userReducer,
    customerReducer,
    categoryReducer
})

export default rootReducer