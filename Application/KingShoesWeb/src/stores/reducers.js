import { combineReducers } from "redux"

import productReducer from "./product/reducer"
import userReducer from "./user/reducer"
import customerReducer from "./customer/reducer"
import categoryReducer from "./category/reducer"

const rootReducer = combineReducers({
    productReducer,
    userReducer,
    customerReducer,
    categoryReducer
})

export default rootReducer