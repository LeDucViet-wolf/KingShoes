import { GET_ALL_PRODUCT } from "./actionType"

const INIT_STATE = {
  products: []
}

const productReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case GET_ALL_PRODUCT:
      return {
        ...state,
        products: action.payload,
      }

    default:
      return state
  }
}

export default productReducer