import {
    GET_ALL_CATEGORY,
    GET_ALL_CATEGORY_SUCCESS,
    GET_ALL_CATEGORY_FAIL
} from "./actionType"

export const getAllCategory = () => ({
    type: GET_ALL_CATEGORY,
})

export const getAllCategorySuccess = (categories) => ({
    type: GET_ALL_CATEGORY_SUCCESS,
    payload: categories
})

export const getAllCategoryFail = (error) => ({
    type: GET_ALL_CATEGORY_FAIL,
    payload: error
})