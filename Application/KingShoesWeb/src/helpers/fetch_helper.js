import { del, get, post, put } from "./api_helper"
import * as url from "./url_helper"

// Product
export const getAllProductHelper = () => get(url.URL_PRODUCT_GET_ALL)