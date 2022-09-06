import {
  GET_ALL_PRODUCT_REVIEW_SUCCESS,
  GET_ALL_PRODUCT_REVIEW_FAIL,
  ADD_PRODUCT_REVIEW_SUCCESS,
  ADD_PRODUCT_REVIEW_FAIL,
  UPDATE_PRODUCT_REVIEW_SUCCESS,
  UPDATE_PRODUCT_REVIEW_FAIL,
  DELETE_PRODUCT_REVIEW_SUCCESS,
  DELETE_PRODUCT_REVIEW_FAIL,
} from "./actionType"

const INIT_STATE = {
  productReviews: [],
  productReview: {},
  result: 0,
  error: {}
}

const productReviewReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case GET_ALL_PRODUCT_REVIEW_SUCCESS:
      return {
        ...state,
        productReviews: action.payload,
      }
    case GET_ALL_PRODUCT_REVIEW_FAIL:
      return {
        ...state,
        error: action.payload,
      }
    case ADD_PRODUCT_REVIEW_SUCCESS:
      return {
        ...state,
        result: action.payload,
      }
    case ADD_PRODUCT_REVIEW_FAIL:
      return {
        ...state,
        error: action.payload,
      }
    case UPDATE_PRODUCT_REVIEW_SUCCESS:
      return {
        ...state,
        result: action.payload,
      }
    case UPDATE_PRODUCT_REVIEW_FAIL:
      return {
        ...state,
        error: action.payload,
      }
    case DELETE_PRODUCT_REVIEW_SUCCESS:
      return {
        ...state,
        result: action.payload,
      }
    case DELETE_PRODUCT_REVIEW_FAIL:
      return {
        ...state,
        error: action.payload,
      }
    default:
      return state
  }
}

export default productReviewReducer