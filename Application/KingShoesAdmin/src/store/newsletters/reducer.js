import {
  GET_NEWSLETTERS_SUCCESS,
  GET_NEWSLETTERS_FAIL,
  DELETE_NEWSLETTER_SUCCESS,
  DELETE_NEWSLETTER_FAIL,
} from "./actionTypes"

const INIT_STATE = {
  newsletters: [],
  error: {},
}

const nsl = (state = INIT_STATE, action) => {
  switch (action.type) {
    case GET_NEWSLETTERS_SUCCESS:
      return {
        ...state,
        newsletters: action.payload,
      }

    case GET_NEWSLETTERS_FAIL:
      return {
        ...state,
        error: action.payload,
      }
    case DELETE_NEWSLETTER_SUCCESS:
      return {
        ...state,
        newsletters: state.newsletters.filter(
          newsletter => newsletter.id.toString() !== action.payload.id.toString()
        ),
      }

    case DELETE_NEWSLETTER_FAIL:
      return {
        ...state,
        error: action.payload,
      }
    default:
      return state
  }
}

export default nsl
