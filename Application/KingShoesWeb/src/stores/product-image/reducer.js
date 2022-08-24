import {
  GET_ALL_PRODUCT_IMAGE_SUCCESS,
  GET_ALL_PRODUCT_IMAGE_FAIL,
  GET_BY_ID_PRODUCT_IMAGE_SUCCESS,
  GET_BY_ID_PRODUCT_IMAGE_FAIL
} from "./actionType"

const INIT_STATE = {
  productImages: [],
  productImage: {},
  error: {}
}

const productImageReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case GET_ALL_PRODUCT_IMAGE_SUCCESS:
      return {
        ...state,
        productImages: action.payload,
      }
    case GET_ALL_PRODUCT_IMAGE_FAIL:
      return {
        ...state,
        error: action.payload,
      }
    case GET_BY_ID_PRODUCT_IMAGE_SUCCESS:
      return {
        ...state,
        productImage: action.payload,
      }
    case GET_BY_ID_PRODUCT_IMAGE_FAIL:
      return {
        ...state,
        error: action.payload,
      }
    default:
      return state
  }
}

export default productImageReducer