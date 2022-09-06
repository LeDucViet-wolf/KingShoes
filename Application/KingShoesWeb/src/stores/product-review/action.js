import {
    GET_ALL_PRODUCT_REVIEW,
    GET_ALL_PRODUCT_REVIEW_SUCCESS,
    GET_ALL_PRODUCT_REVIEW_FAIL,
    ADD_PRODUCT_REVIEW,
    ADD_PRODUCT_REVIEW_SUCCESS,
    ADD_PRODUCT_REVIEW_FAIL,
    UPDATE_PRODUCT_REVIEW,
    UPDATE_PRODUCT_REVIEW_SUCCESS,
    UPDATE_PRODUCT_REVIEW_FAIL,
    DELETE_PRODUCT_REVIEW,
    DELETE_PRODUCT_REVIEW_SUCCESS,
    DELETE_PRODUCT_REVIEW_FAIL,
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

export const addProductReview = (productReview) => ({
    type: ADD_PRODUCT_REVIEW,
    payload: productReview
})

export const addProductReviewSuccess = (result) => ({
    type: ADD_PRODUCT_REVIEW_SUCCESS,
    payload: result
})

export const addProductReviewFail = (error) => ({
    type: ADD_PRODUCT_REVIEW_FAIL,
    payload: error
})

export const updateProductReview = (productReview) => ({
    type: UPDATE_PRODUCT_REVIEW,
    payload: productReview
})

export const updateProductReviewSuccess = (result) => ({
    type: UPDATE_PRODUCT_REVIEW_SUCCESS,
    payload: result
})

export const updateProductReviewFail = (error) => ({
    type: UPDATE_PRODUCT_REVIEW_FAIL,
    payload: error
})

export const deleteProductReview = (id) => ({
    type: DELETE_PRODUCT_REVIEW,
    payload: id
})

export const deleteProductReviewSuccess = (result) => ({
    type: DELETE_PRODUCT_REVIEW_SUCCESS,
    payload: result
})

export const deleteProductReviewFail = (error) => ({
    type: DELETE_PRODUCT_REVIEW_FAIL,
    payload: error
})