import {
  GET_ALL_PRODUCT_SUCCESS,
  GET_ALL_PRODUCT_FAIL
} from "./actionType"

const INIT_STATE = {
  products: [],
  product: {},
  error: {}
}

const productReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case GET_ALL_PRODUCT_SUCCESS:
      return {
        ...state,
        products: action.payload,
      }
    case GET_ALL_PRODUCT_FAIL:
      return {
        ...state,
        error: action.payload,
      }
    default:
      return state
  }
}

export default productReducer