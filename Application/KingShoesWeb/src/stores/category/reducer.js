import {
  GET_ALL_CATEGORY_SUCCESS,
  GET_ALL_CATEGORY_FAIL
} from "./actionType"

const INIT_STATE = {
  categories: [],
  category: {},
  error: {}
}

const categoryReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case GET_ALL_CATEGORY_SUCCESS:
      return {
        ...state,
        categories: action.payload,
      }
    case GET_ALL_CATEGORY_FAIL:
      return {
        ...state,
        error: action.payload,
      }
    default:
      return state
  }
}

export default categoryReducer