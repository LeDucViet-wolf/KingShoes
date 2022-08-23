import {
  GET_ALL_PRODUCT_REVIEW_SUCCESS,
  GET_ALL_PRODUCT_REVIEW_FAIL
} from "./actionType"

const INIT_STATE = {
  productReviews: [],
  productReview: {},
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
    default:
      return state
  }
}

export default productReviewReducer