import { del, get, post, put } from "./api_helper"
import * as url from "./url_helper"

// Product
export const getAllProductHelper = () => get(url.URL_PRODUCT_GET_ALL)
export const getProductByIdHelper = id => get(url.URL_PRODUCT_GET_BY_ID, { params: { id } })
export const insertProductHelper = data => post(url.URL_PRODUCT_INSERT, data)
export const updateProductHelper = data => put(url.URL_PRODUCT_UPDATE, data)
export const deleteProductHelper = id => del(url.URL_PRODUCT_DELETE, { params: { id } })

// User
export const getAllUserHelper = () => get(url.URL_USER_GET_ALL)
export const getUserByIdHelper = id => get(url.URL_USER_GET_BY_ID, { params: { id } })
export const insertUserHelper = data => post(url.URL_USER_INSERT, data)
export const updateUserHelper = data => put(url.URL_USER_UPDATE, data)
export const deleteUserHelper = id => del(url.URL_USER_DELETE, { params: { id } })

// Customer
export const getAllCustomerHelper = () => get(url.URL_CUSTOMER_GET_ALL)
export const getCustomerByIdHelper = id => get(url.URL_CUSTOMER_GET_BY_ID, { params: { id } })
export const insertCustomerHelper = data => post(url.URL_CUSTOMER_INSERT, data)
export const updateCustomerHelper = data => put(url.URL_CUSTOMER_UPDATE, data)
export const deleteCustomerHelper = id => del(url.URL_CUSTOMER_DELETE, { params: { id } })