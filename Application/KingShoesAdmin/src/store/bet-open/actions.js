import {
  GET_BETOPEN,
  GET_BETOPEN_SUCCESS,
  GET_BETOPEN_FAIL
} from "./actionTypes"

export const getAllBet = () => ({
  type: GET_BETOPEN,
})

export const getAllBetSuccess = allBets => ({
  type: GET_BETOPEN_SUCCESS,
  payload: allBets,
})

export const getAllBetFail = error => ({
  type: GET_BETOPEN_FAIL,
  payload: error,
})