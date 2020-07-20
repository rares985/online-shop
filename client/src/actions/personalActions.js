/* eslint-disable no-unused-vars */
import {
  PERSONAL_INFO_BEGIN,
  PERSONAL_INFO_SUCCESS,
  PERSONAL_INFO_FAILURE,
} from '../constants/action-types';

// const axios = require('axios').create({
//   baseURL: process.env.API_ENDPOINT,
// });

const FetchPersonalInfoBegin = () => ({
  type: PERSONAL_INFO_BEGIN,
});

const FetchPersonalInfoSuccess = (info) => ({
  type: PERSONAL_INFO_SUCCESS,
  payload: {
    info,
  },
});

const FetchPersonalInfoFailure = (error) => ({
  type: PERSONAL_INFO_FAILURE,
  payload: {
    error,
  },
});

const FetchPersonalInfo = (request) => {
  const info = {};

  return (dispatch) => {
    dispatch(FetchPersonalInfoBegin());

    dispatch(FetchPersonalInfoSuccess(info));
  };
};

export default FetchPersonalInfo;
