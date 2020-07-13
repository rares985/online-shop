import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Home from '@material-ui/icons/Home';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import StoreIcon from '@material-ui/icons/Store';

import { Router, navigate } from '@reach/router';
import { connect } from 'react-redux';

// import SearchAppBar from '../components/SearchAppBar';

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
    icon: <Home />,
    afterDivider: false,
  },
  {
    text: 'Coș',
    path: '/cart',
    icon: <ShoppingCartIcon />,
    afterDivider: true,
  },
  {
    text: 'Catalog',
    path: '/catalog',
    icon: <StoreIcon />,
    afterDivider: true,
  },
];

const App = (props) => {
  /* eslint-disable no-unused-vars */
  const { user, finished } = props;
  /* eslint-enable no-unused-vars */
  useEffect(() => {
    if (finished) {
      navigate('/home');
    }
  }, [finished]);

  return (
    <>
      {/* <SearchAppBar /> */}
      <ResponsiveDrawerWithSearchbar title="Magazin online" links={links}>
        <Container component="main" maxWidth="lg">
          <CssBaseline>
            <Router>
              <Login path="/login" />
              <Catalog path="/catalog" />
              <ShoppingCart path="/cart" />
            </Router>
          </CssBaseline>
        </Container>
      </ResponsiveDrawerWithSearchbar>
    </>
  );
};

App.propTypes = {
  user: PropTypes.string.isRequired,
  finished: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps)(App);
