import {
  ADD_TO_CART_BEGIN,
  ADD_TO_CART_SUCCESS,
  ADD_TO_CART_FAILURE,
  REMOVE_FROM_CART_BEGIN,
  REMOVE_FROM_CART_SUCCESS,
  REMOVE_FROM_CART_FAILURE,
} from '../constants/action-types';

const initialState = {
  productsInCart: [],
};

const UpdateAdd = (array, newProduct) => {
  const index = array.findIndex((elem) => elem.product.id === newProduct.id);

  if (index === -1) {
    return [...array, { product: newProduct, count: 1 }];
  }
  return [
    ...array.slice(0, index),
    {
      ...array[index],
      count: array[index].count + 1,
    },
    ...array.slice(index + 1),
  ];
};

const RemoveSubtract = (array, productToRemove) => {
  const index = array.findIndex((elem) => elem.product.id === productToRemove.id);

  if (index !== -1) {
    if (array[index].count === 1) {
      return [...array.slice(0, index), ...array.slice(index + 1)];
    }
    return [
      ...array.slice(0, index),
      {
        ...array[index],
        count: array[index].count - 1,
      },
      ...array.slice(index + 1),
    ];
  }
  return array;
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART_BEGIN:
      return {
        ...state,
        productsInCart: UpdateAdd(state.productsInCart, action.payload.product),
      };
    case ADD_TO_CART_SUCCESS:
      return {
        ...state,
      };
    case ADD_TO_CART_FAILURE:
      return {
        ...state,
      };
    case REMOVE_FROM_CART_BEGIN:
      return {
        ...state,
        productsInCart: RemoveSubtract(state.productsInCart, action.payload.product),
      };
    case REMOVE_FROM_CART_SUCCESS:
      return {
        ...state,
      };
    case REMOVE_FROM_CART_FAILURE:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default cartReducer;
