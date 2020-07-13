import { PRODUCTS_BEGIN, PRODUCTS_FAILURE, PRODUCTS_SUCCESS } from '../constants/action-types';

const axios = require('axios').create({
  baseURL: 'http://schematic-ipsum.herokuapp.com/',
});

const ProductsBegin = () => ({
  type: PRODUCTS_BEGIN,
});

const ProductsFailure = (error) => ({
  type: PRODUCTS_FAILURE,
  payload: {
    error,
  },
});
const ProductsSuccess = (products) => ({
  type: PRODUCTS_SUCCESS,
  payload: {
    products,
  },
});

const FetchProducts = (request) => {
  const { howMany } = request;
  const schema = {
    type: 'object',
    properties: {
      id: {
        type: 'string',
        ipsum: 'id',
      },
      title: {
        type: 'string',
        ipsum: 'name',
      },
      description: {
        type: 'string',
        ipsum: 'bio',
      },

      image: {
        type: 'string',
        ipsum: 'small image',
      },
    },
  };

  return (dispatch) => {
    dispatch(ProductsBegin());

    axios
      .post(`?n=${howMany}`, schema)
      .then((res) => {
        dispatch(ProductsSuccess(res.data));
      })
      .catch((err) => {
        dispatch(ProductsFailure(err.error));
      });
  };
};

export default FetchProducts;
