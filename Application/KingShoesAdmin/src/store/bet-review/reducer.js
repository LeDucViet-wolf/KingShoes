import {
  GET_BETREVIEW_SUCCESS,
  GET_BETREVIEW_FAIL,
} from "./actionTypes"

const INIT_STATE = {
  allBets: [],
  error: {},
}

const Bet = (state = INIT_STATE, action) => {
  switch (action.type) {
    case GET_BETREVIEW_SUCCESS:
      return {
        ...state,
        allBets: action.payload,
      }

    case GET_BETREVIEW_FAIL:
      return {
        ...state,
        error: action.payload,
      }
    default:
      return state
  }
}

export default Bet
