import {
  GET_BETCHALLENGE,
  GET_BETCHALLENGE_SUCCESS,
  GET_BETCHALLENGE_FAIL
} from "./actionTypes"

export const getAllBet = () => ({
  type: GET_BETCHALLENGE,
})

export const getAllBetSuccess = allBets => ({
  type: GET_BETCHALLENGE_SUCCESS,
  payload: allBets,
})

export const getAllBetFail = error => ({
  type: GET_BETCHALLENGE_FAIL,
  payload: error,
})