import {
  GET_ALL_PRODUCT_SIZE_SUCCESS,
  GET_ALL_PRODUCT_SIZE_FAIL
} from "./actionType"

const INIT_STATE = {
  productSizes: [],
  productSize: {},
  error: {}
}

const productSizeReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case GET_ALL_PRODUCT_SIZE_SUCCESS:
      return {
        ...state,
        productSizes: action.payload,
      }
    case GET_ALL_PRODUCT_SIZE_FAIL:
      return {
        ...state,
        error: action.payload,
      }
    default:
      return state
  }
}

export default productSizeReducer