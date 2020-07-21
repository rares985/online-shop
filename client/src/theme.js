import { roRO } from '@material-ui/core/locale';

import { createMuiTheme } from '@material-ui/core/styles';
/* eslint-disable no-unused-vars */
import grey from '@material-ui/core/colors/grey';
import blue from '@material-ui/core/colors/blue';
import lime from '@material-ui/core/colors/lime';
import green from '@material-ui/core/colors/green';
import red from '@material-ui/core/colors/red';

// const palette = {
//   primary: { main: '#004643', contrastText: '#abd1c6' },
//   secondary: { main: '#f9bc60', contrastText: '#000000' },
// };
// const themeName = 'Cyprus Saffron Mango Guanaco';

// const palette = {
//   primary: { main: '#2196f3', contrastText: '#000000' },
//   secondary: { main: '#f9ff48' },
// };
// const themeName = 'Dodger Blue Gorse Guinea Pigs';

// const palette = {
//   primary: { main: '#a8d8ea' },
//   secondary: { main: '#ffffd2' },
// };
// const themeName = 'Regent St Blue Cream Sea Urchin';

const palette = {
  primary: { main: blue[900], contrastText: '#FFFFFF' },
  secondary: { main: lime.A200 },
};
const themeName = 'Fiord Golden Dream Dolphin';

export default createMuiTheme({ palette, themeName, roRO });
