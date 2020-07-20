import {
  PERSONAL_INFO_BEGIN,
  PERSONAL_INFO_SUCCESS,
  PERSONAL_INFO_FAILURE,
} from '../constants/action-types';

const initialState = {
  deliveryAddresses: ['380-6360 Parturient Av.', '804-9106 Enim Street', '8381 Magnis Street'],
  billingAddresses: ['P.O. Box 315, 8432 Scelerisque Rd.', 'P.O. Box 718, 4613 Eros. Ave'],
  loading: true,
  error: null,
};

const personalReducer = (state = initialState, action) => {
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

export default personalReducer;
