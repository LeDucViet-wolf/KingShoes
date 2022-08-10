import {
  GET_ALL_USER_SUCCESS,
  GET_ALL_USER_FAIL
} from "./actionType"

const INIT_STATE = {
  users: [],
  user: {},
  error: {}
}

const userReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case GET_ALL_USER_SUCCESS:
      return {
        ...state,
        users: action.payload,
      }
    case GET_ALL_USER_FAIL:
      return {
        ...state,
        error: action.payload,
      }
    default:
      return state
  }
}

export default userReducer