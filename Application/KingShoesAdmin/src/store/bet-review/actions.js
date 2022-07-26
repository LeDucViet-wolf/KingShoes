import {
  GET_BETREVIEW,
  GET_BETREVIEW_SUCCESS,
  GET_BETREVIEW_FAIL
} from "./actionTypes"

export const getAllBet = () => ({
  type: GET_BETREVIEW,
})

export const getAllBetSuccess = allBets => ({
  type: GET_BETREVIEW_SUCCESS,
  payload: allBets,
})

export const getAllBetFail = error => ({
  type: GET_BETREVIEW_FAIL,
  payload: error,
})