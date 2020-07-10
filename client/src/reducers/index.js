import { combineReducers } from 'redux';

import headerReducer from './headerReducer';
import loginReducer from './loginReducer';
import footerReducer from './footerReducer';
import commonReducer from './commonReducer';
import productReducer from './productReducer';
import catalogReducer from './catalogReducer';
import paymentReducer from './paymentReducer';

export default combineReducers({
  header: headerReducer,
  login: loginReducer,
  footer: footerReducer,
  common: commonReducer,
  product: productReducer,
  catalog: catalogReducer,
  payment: paymentReducer,
});
