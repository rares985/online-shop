import { combineReducers } from 'redux';

import headerReducer from './headerReducer';
import loginReducer from './loginReducer';
import footerReducer from './footerReducer';
import commonReducer from './commonReducer';
import productReducer from './productReducer';
import catalogReducer from './catalogReducer';
import cartReducer from './cartReducer';
import paymentReducer from './paymentReducer';
import registerReducer from './registerReducer';
import personalReducer from './personalReducer';
import ordersReducer from './ordersReducer';

export default combineReducers({
  header: headerReducer,
  login: loginReducer,
  footer: footerReducer,
  common: commonReducer,
  product: productReducer,
  catalog: catalogReducer,
  register: registerReducer,
  account: personalReducer,
  orders: ordersReducer,
  cart: cartReducer,
  payment: paymentReducer,
});
