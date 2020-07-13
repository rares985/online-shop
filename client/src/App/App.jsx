import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import HomeIcon from '@material-ui/icons/Home';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import StoreIcon from '@material-ui/icons/Store';
import LockOpenIcon from '@material-ui/icons/LockOpen';

import { Router, navigate } from '@reach/router';
import { connect } from 'react-redux';

import Login from '../pages/Login';
import Catalog from '../pages/Catalog';
import ShoppingCart from '../pages/ShoppingCart';
import ResponsiveDrawerWithSearchbar from '../components/ResponsiveDrawerWithSearchbar';

const mapStateToProps = (state) => ({
  user: state.login.user,
  finished: state.login.finished,
});

const links = [
  {
    text: 'Acasă',
    path: '/',
    icon: <HomeIcon />,
    afterDivider: false,
  },
  {
    text: 'Coș',
    path: '/cart',
    icon: <ShoppingCartIcon />,
    afterDivider: true,
  },
  {
    text: 'Autentificare',
    path: '/login',
    icon: <LockOpenIcon />,
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
          <Container fluid maxWidth="lg">
            <Router>
              <Login path="/login" />
              <Catalog path="/catalog" />
              <ShoppingCart path="/cart" />
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
