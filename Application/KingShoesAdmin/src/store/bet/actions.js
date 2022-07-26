import {
  GET_ALLBET,
  GET_ALLBET_SUCCESS,
  GET_ALLBET_FAIL
} from "./actionTypes"

export const getAllBet = () => ({
  type: GET_ALLBET,
})

export const getAllBetSuccess = allBets => ({
  type: GET_ALLBET_SUCCESS,
  payload: allBets,
})

export const getAllBetFail = error => ({
  type: GET_ALLBET_FAIL,
  payload: error,
})