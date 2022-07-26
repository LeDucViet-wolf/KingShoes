import {
  GET_POLLS_SUCCESS,
  GET_POLLS_FAIL,
} from "./actionTypes"

const INIT_STATE = {
  polls: [],
  error: {},
}

const poll = (state = INIT_STATE, action) => {
  switch (action.type) {
    case GET_POLLS_SUCCESS:
      return {
        ...state,
        polls: action.payload,
      }

    case GET_POLLS_FAIL:
      return {
        ...state,
        error: action.payload,
      }
    default:
      return state
  }
}

export default poll
