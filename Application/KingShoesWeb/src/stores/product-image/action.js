import {
    GET_ALL_PRODUCT_IMAGE,
    GET_ALL_PRODUCT_IMAGE_SUCCESS,
    GET_ALL_PRODUCT_IMAGE_FAIL,

    GET_BY_ID_PRODUCT_IMAGE,
    GET_BY_ID_PRODUCT_IMAGE_SUCCESS,
    GET_BY_ID_PRODUCT_IMAGE_FAIL,
} from "./actionType"

export const getAllProductImage = () => ({
    type: GET_ALL_PRODUCT_IMAGE,
})

export const getAllProductImageSuccess = (productImages) => ({
    type: GET_ALL_PRODUCT_IMAGE_SUCCESS,
    payload: productImages
})

export const getAllProductImageFail = (error) => ({
    type: GET_ALL_PRODUCT_IMAGE_FAIL,
    payload: error
})

export const getByIdProductImage = (id) => ({
    type: GET_BY_ID_PRODUCT_IMAGE,
    payload: id
})

export const getByIdProductImageSuccess = (productImage) => ({
    type: GET_BY_ID_PRODUCT_IMAGE_SUCCESS,
    payload: productImage
})

export const getByIdProductImageFail = (error) => ({
    type: GET_BY_ID_PRODUCT_IMAGE_FAIL,
    payload: error
})