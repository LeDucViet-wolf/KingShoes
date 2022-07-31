import { combineReducers } from "redux"

// Product
import productReducer from "./product/reducer"

const rootReducer = combineReducers({
    productReducer
})

export default rootReducer