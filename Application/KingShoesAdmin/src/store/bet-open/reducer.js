import {
  GET_BETOPEN_SUCCESS,
  GET_BETOPEN_FAIL,
} from "./actionTypes"

const INIT_STATE = {
  allBets: [],
  error: {},
}

const Bet = (state = INIT_STATE, action) => {
  switch (action.type) {
    case GET_BETOPEN_SUCCESS:
      return {
        ...state,
        allBets: action.payload,
      }

    case GET_BETOPEN_FAIL:
      return {
        ...state,
        error: action.payload,
      }
    default:
      return state
  }
}

export default Bet
