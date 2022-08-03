import {
    GET_ALL_PRODUCT,
    GET_ALL_PRODUCT_SUCCESS,
    GET_ALL_PRODUCT_FAIL
} from "./actionType"

export const getAllProduct = () => ({
    type: GET_ALL_PRODUCT,
})

export const getAllProductSuccess = (products) => ({
    type: GET_ALL_PRODUCT_SUCCESS,
    payload: products
})

export const getAllProductFail = (error) => ({
    type: GET_ALL_PRODUCT_FAIL,
    payload: error
})