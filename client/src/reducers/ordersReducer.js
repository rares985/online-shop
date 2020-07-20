import {
  PERSONAL_INFO_BEGIN,
  PERSONAL_INFO_SUCCESS,
  PERSONAL_INFO_FAILURE,
} from '../constants/action-types';

const initialState = {
  completed: [
    {
      products: [
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
      date: '10-15-2020',
      id: '123801312',
    },
    {
      products: [
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
      date: '10-14-2020',
      id: '1238013172',
    },
    {
      products: [
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
      date: '10-16-2020',
      id: '1238011312',
    },
  ],
  cancelled: [
    {
      products: [
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
      date: '10-13-2020',
      id: '1213801312',
    },
  ],
  ongoing: [
    {
      products: [
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
      date: '10-16-2020',
      id: '1238012312',
    },
  ],

  loading: true,
  error: null,
};

const ordersReducer = (state = initialState, action) => {
  switch (action.type) {
    case PERSONAL_INFO_BEGIN:
      return {
        ...state,
      };
    case PERSONAL_INFO_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case PERSONAL_INFO_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    default:
      return state;
  }
};

export default ordersReducer;
