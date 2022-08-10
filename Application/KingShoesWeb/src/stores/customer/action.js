import {
    GET_ALL_CUSTOMER,
    GET_ALL_CUSTOMER_SUCCESS,
    GET_ALL_CUSTOMER_FAIL
} from "./actionType"

export const getAllCustomer = () => ({
    type: GET_ALL_CUSTOMER,
})

export const getAllCustomerSuccess = (customers) => ({
    type: GET_ALL_CUSTOMER_SUCCESS,
    payload: customers
})

export const getAllCustomerFail = (error) => ({
    type: GET_ALL_CUSTOMER_FAIL,
    payload: error
})