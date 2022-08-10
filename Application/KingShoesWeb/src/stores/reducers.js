import { combineReducers } from "redux"

import productReducer from "./product/reducer"
import userReducer from "./user/reducer"
import customerReducer from "./customer/reducer"

const rootReducer = combineReducers({
    productReducer,
    userReducer,
    customerReducer
})

export default rootReducer