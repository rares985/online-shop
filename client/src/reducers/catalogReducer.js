import { PRODUCTS_BEGIN, PRODUCTS_FAILURE, PRODUCTS_SUCCESS } from '../constants/action-types';

const initialState = {
  products: [],
  loading: true,
  error: null,
};

const catalogReducer = (state = initialState, action) => {
  switch (action.type) {
    case PRODUCTS_BEGIN:
      return state;
    case PRODUCTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    case PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        products: action.payload.products,
      };
    default:
      return state;
  }
};

export default catalogReducer;
