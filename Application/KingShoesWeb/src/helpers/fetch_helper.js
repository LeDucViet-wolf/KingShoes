import { del, get, post, put } from "./api_helper"
import * as url from "./url_helper"

// Product
export const getAllProductHelper = () => get(url.URL_PRODUCT_GET_ALL)
export const getProductByIdHelper = id => get(url.URL_PRODUCT_GET_BY_ID, { params: { id } })
export const insertProductHelper = data => post(url.URL_PRODUCT_INSERT, data)
export const updateProductHelper = data => put(url.URL_PRODUCT_UPDATE, data)
export const deleteProductHelper = id => del(url.URL_PRODUCT_DELETE, { params: { id } })