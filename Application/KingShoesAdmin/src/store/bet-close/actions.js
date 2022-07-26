import {
  GET_BETCLOSE,
  GET_BETCLOSE_SUCCESS,
  GET_BETCLOSE_FAIL
} from "./actionTypes"

export const getAllBet = () => ({
  type: GET_BETCLOSE,
})

export const getAllBetSuccess = allBets => ({
  type: GET_BETCLOSE_SUCCESS,
  payload: allBets,
})

export const getAllBetFail = error => ({
  type: GET_BETCLOSE_FAIL,
  payload: error,
})