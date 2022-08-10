import {
    GET_ALL_USER,
    GET_ALL_USER_SUCCESS,
    GET_ALL_USER_FAIL
} from "./actionType"

export const getAllUser = () => ({
    type: GET_ALL_USER,
})

export const getAllUserSuccess = (users) => ({
    type: GET_ALL_USER_SUCCESS,
    payload: users
})

export const getAllUserFail = (error) => ({
    type: GET_ALL_USER_FAIL,
    payload: error
})