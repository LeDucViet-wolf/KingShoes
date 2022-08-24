import { del, get, post, put } from "./api_helper"
import * as url from "./url_helper"

// Product
export const getAllProductHelper = () => get(url.URL_PRODUCT_GET_ALL)
export const getProductByIdHelper = id => get(url.URL_PRODUCT_GET_BY_ID, { params: { id } })
export const insertProductHelper = data => post(url.URL_PRODUCT_INSERT, data)
export const updateProductHelper = data => put(url.URL_PRODUCT_UPDATE, data)
export const deleteProductHelper = id => del(url.URL_PRODUCT_DELETE, { params: { id } })

// Product Size
export const getAllProductSizeHelper = () => get(url.URL_PRODUCT_SIZE_GET_ALL)
export const getProductSizeByIdHelper = id => get(url.URL_PRODUCT_SIZE_GET_BY_ID, { params: { id } })
export const insertProductSizeHelper = data => post(url.URL_PRODUCT_SIZE_INSERT, data)
export const updateProductSizeHelper = data => put(url.URL_PRODUCT_SIZE_UPDATE, data)
export const deleteProductSizeHelper = id => del(url.URL_PRODUCT_SIZE_DELETE, { params: { id } })

// Product Review
export const getAllProductReviewHelper = () => get(url.URL_PRODUCT_REVIEW_GET_ALL)
export const getProductReviewByIdHelper = id => get(`${url.URL_PRODUCT_REVIEW_GET_BY_ID}/${id}`)
export const insertProductReviewHelper = data => post(url.URL_PRODUCT_REVIEW_INSERT, data)
export const updateProductReviewHelper = data => put(url.URL_PRODUCT_REVIEW_UPDATE, data)
export const deleteProductReviewHelper = id => del(url.URL_PRODUCT_REVIEW_DELETE, { params: { id } })

// Product Image
export const getAllProductImageHelper = () => get(url.URL_PRODUCT_IMAGE_GET_ALL)
export const getProductImageByIdHelper = id => get(url.URL_PRODUCT_IMAGE_GET_BY_ID, { params: { id } })
export const insertProductImageHelper = data => post(url.URL_PRODUCT_IMAGE_INSERT, data)
export const updateProductImageHelper = data => put(url.URL_PRODUCT_IMAGE_UPDATE, data)
export const deleteProductImageHelper = id => del(url.URL_PRODUCT_IMAGE_DELETE, { params: { id } })

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

// Category
export const getAllCategoryHelper = () => get(url.URL_CATEGORY_GET_ALL)
export const getCategoryByIdHelper = id => get(url.URL_CATEGORY_GET_BY_ID, { params: { id } })
export const insertCategoryHelper = data => post(url.URL_CATEGORY_INSERT, data)
export const updateCategoryHelper = data => put(url.URL_CATEGORY_UPDATE, data)
export const deleteCategoryHelper = id => del(url.URL_CATEGORY_DELETE, { params: { id } })