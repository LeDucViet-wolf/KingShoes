import {
    GET_ALL_PRODUCT_REVIEW,
    GET_ALL_PRODUCT_REVIEW_SUCCESS,
    GET_ALL_PRODUCT_REVIEW_FAIL
} from "./actionType"

export const getAllProductReview = () => ({
    type: GET_ALL_PRODUCT_REVIEW,
})

export const getAllProductReviewSuccess = (productReviews) => ({
    type: GET_ALL_PRODUCT_REVIEW_SUCCESS,
    payload: productReviews
})

export const getAllProductReviewFail = (error) => ({
    type: GET_ALL_PRODUCT_REVIEW_FAIL,
    payload: error
})