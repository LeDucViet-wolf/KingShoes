import {
  GET_NEWSLETTERS,
  GET_NEWSLETTERS_SUCCESS,
  GET_NEWSLETTERS_FAIL,
  DELETE_NEWSLETTER,
  DELETE_NEWSLETTER_SUCCESS,
  DELETE_NEWSLETTER_FAIL
} from "./actionTypes"

export const getNewsletters = () => ({
  type: GET_NEWSLETTERS,
})

export const getNewsletterSuccess = newsletters => ({
  type: GET_NEWSLETTERS_SUCCESS,
  payload: newsletters,
})

export const getNewsletterFail = error => ({
  type: GET_NEWSLETTERS_FAIL,
  payload: error,
})

export const deleteNewsletter = newsletter => ({
  type: DELETE_NEWSLETTER,
  payload: newsletter,
})

export const deleteNewsletterSuccess = newsletter => ({
  type: DELETE_NEWSLETTER_SUCCESS,
  payload: newsletter,
})

export const deleteNewsletterFail = error => ({
  type: DELETE_NEWSLETTER_FAIL,
  payload: error,
})