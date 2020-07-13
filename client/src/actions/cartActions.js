/* eslint-disable no-unused-vars */
import {
  ADD_TO_CART_BEGIN,
  ADD_TO_CART_SUCCESS,
  ADD_TO_CART_FAILURE,
  REMOVE_FROM_CART_BEGIN,
  REMOVE_FROM_CART_SUCCESS,
  REMOVE_FROM_CART_FAILURE,
} from '../constants/action-types';

const AddToCartBegin = (product) => ({
  type: ADD_TO_CART_BEGIN,
  payload: {
    product,
  },
});

const AddToCartFailure = (error) => ({
  type: ADD_TO_CART_FAILURE,
  payload: {
    error,
  },
});
const AddToCartSuccess = () => ({
  type: ADD_TO_CART_SUCCESS,
});

export const AddItemToCart = (product) => {
  return (dispatch) => {
    dispatch(AddToCartBegin(product));
    dispatch(AddToCartSuccess());
  };
};

const RemoveFromCartBegin = (product) => ({
  type: REMOVE_FROM_CART_BEGIN,
  payload: {
    product,
  },
});

const RemoveFromCartFailure = (error) => ({
  type: REMOVE_FROM_CART_FAILURE,
  payload: {
    error,
  },
});
const RemoveFromCartSuccess = () => ({
  type: REMOVE_FROM_CART_SUCCESS,
});

export const RemoveItemFromCart = (product) => {
  return (dispatch) => {
    dispatch(RemoveFromCartBegin(product));
    dispatch(RemoveFromCartSuccess());
  };
};
