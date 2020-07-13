import { roRO } from '@material-ui/core/locale';

import { createMuiTheme } from '@material-ui/core/styles';

const palette = {
  primary: { main: '#004643', contrastText: '#abd1c6' },
  secondary: { main: '#f9bc60', contrastText: '#000000' },
};
const themeName = 'Cyprus Saffron Mango Guanaco';

export default createMuiTheme({ palette, themeName, roRO });
