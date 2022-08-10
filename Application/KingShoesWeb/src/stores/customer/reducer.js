import {
  GET_ALL_CUSTOMER_SUCCESS,
  GET_ALL_CUSTOMER_FAIL
} from "./actionType"

const INIT_STATE = {
  customers: [],
  customer: {},
  error: {}
}

const customerReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case GET_ALL_CUSTOMER_SUCCESS:
      return {
        ...state,
        customers: action.payload,
      }
    case GET_ALL_CUSTOMER_FAIL:
      return {
        ...state,
        error: action.payload,
      }
    default:
      return state
  }
}

export default customerReducer