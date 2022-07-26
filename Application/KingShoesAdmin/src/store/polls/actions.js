import {
  GET_POLLS,
  GET_POLLS_SUCCESS,
  GET_POLLS_FAIL,
} from "./actionTypes"

export const getPolls = () => ({
  type: GET_POLLS,
})

export const getPollSuccess = newsletters => ({
  type: GET_POLLS_SUCCESS,
  payload: newsletters,
})

export const getPollFail = error => ({
  type: GET_POLLS_FAIL,
  payload: error,
})