import {
  ADD_TO_CART_BEGIN,
  ADD_TO_CART_SUCCESS,
  ADD_TO_CART_FAILURE,
  REMOVE_FROM_CART_BEGIN,
  REMOVE_FROM_CART_SUCCESS,
  REMOVE_FROM_CART_FAILURE,
} from '../constants/action-types';

const initialState = {
  // productsInCart: [],
  productsInCart: [
    {
      product: {
        id: '8f06ee8c-4e88-493f-a2ee-830f43324694',
        title: 'Allan Davis',
        description: '3 Squadron.',
        image: 'http://hhhhold.com/s?7958290',
        price: 25,
      },
      count: 1,
    },
    {
      product: {
        id: '8f06ee8c-4e88-493f-a2ee-830f43324695',
        title: 'Allan Davis2',
        description: '3 Squadron.',
        image: 'http://hhhhold.com/s?7958290',
        price: 20,
      },
      count: 2,
    },
    {
      product: {
        id: '8f06ee8c-4e88-493f-a2ee-830f43324696',
        title: 'Allan Davis3',
        description: '3 Squadron.',
        image: 'http://hhhhold.com/s?7958290',
        price: 5,
      },
      count: 3,
    },
  ],
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
