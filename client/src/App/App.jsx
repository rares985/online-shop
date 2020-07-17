import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import StoreIcon from '@material-ui/icons/Store';

import { Router, navigate } from '@reach/router';
import { connect } from 'react-redux';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faSignInAlt,
  faShoppingCart,
  faUserPlus,
  faUser,
  faListAlt,
  faCogs,
  faTags,
} from '@fortawesome/free-solid-svg-icons';

import Login from '../pages/Login';
import Register from '../pages/Register';
import Catalog from '../pages/Catalog';
import ShoppingCart from '../pages/ShoppingCart';
import PersonalAccount from '../pages/PersonalAccount';
import ResponsiveDrawerWithSearchbar from '../components/ResponsiveDrawerWithSearchbar';

const mapStateToProps = (state) => ({
  user: state.login.user,
  finished: state.login.finished,
});

const links = [
  {
    text: 'Acasă',
    path: '/home',
    icon: <FontAwesomeIcon size="lg" icon={faHome} />,
    afterDivider: false,
  },
  {
    text: 'Înregistrare',
    path: '/register',
    icon: <FontAwesomeIcon size="lg" icon={faUserPlus} />,
    afterDivider: false,
  },
  {
    text: 'Contul Meu',
    path: '/account',
    icon: <FontAwesomeIcon size="lg" icon={faUser} />,
    afterDivider: true,
    nested: [
      {
        text: 'Date personale',
        path: '/personalinfo',
        icon: <FontAwesomeIcon size="lg" icon={faListAlt} />,
      },
      {
        text: 'Comenzile mele',
        path: '/orders',
        icon: <FontAwesomeIcon size="lg" icon={faTags} />,
      },
      {
        text: 'Setări cont',
        path: '/settings',
        icon: <FontAwesomeIcon size="lg" icon={faCogs} />,
      },
    ],
  },
  {
    text: 'Coș',
    path: '/cart',
    icon: <FontAwesomeIcon size="lg" icon={faShoppingCart} />,
    afterDivider: true,
  },
  {
    text: 'Autentificare',
    path: '/login',
    icon: <FontAwesomeIcon size="lg" icon={faSignInAlt} />,
    afterDivider: false,
  },
  {
    text: 'Catalog',
    path: '/catalog',
    icon: <StoreIcon />,
    afterDivider: true,
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    background: theme.palette.primary,
  },
}));

const App = (props) => {
  /* eslint-disable no-unused-vars */
  const { user, finished } = props;
  /* eslint-enable no-unused-vars */
  useEffect(() => {
    if (finished) {
      navigate('/home');
    }
  }, [finished]);

  // eslint-disable-next-line no-unused-vars
  const classes = useStyles();

  return (
    <>
      {/* <SearchAppBar /> */}
      <ResponsiveDrawerWithSearchbar title="Magazin online" links={links}>
        <CssBaseline>
          <Container fluid="true" maxWidth="lg">
            <Router>
              <Register path="/register" />
              <PersonalAccount path="/account" />

              {/* After divider */}

              <ShoppingCart path="/cart" />
              <Login path="/login" />
              <Catalog path="/catalog" />
            </Router>
          </Container>
        </CssBaseline>
      </ResponsiveDrawerWithSearchbar>
    </>
  );
};

App.propTypes = {
  user: PropTypes.string.isRequired,
  finished: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps)(App);
