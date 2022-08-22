import {
    GET_ALL_PRODUCT_SIZE,
    GET_ALL_PRODUCT_SIZE_SUCCESS,
    GET_ALL_PRODUCT_SIZE_FAIL
} from "./actionType"

export const getAllProductSize = () => ({
    type: GET_ALL_PRODUCT_SIZE,
})

export const getAllProductSizeSuccess = (productSizes) => ({
    type: GET_ALL_PRODUCT_SIZE_SUCCESS,
    payload: productSizes
})

export const getAllProductSizeFail = (error) => ({
    type: GET_ALL_PRODUCT_SIZE_FAIL,
    payload: error
})