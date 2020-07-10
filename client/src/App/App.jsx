import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';

import { Router, navigate } from '@reach/router';
import { connect } from 'react-redux';

import SearchAppBar from '../components/SearchAppBar';

import Login from '../pages/Login';

const mapStateToProps = (state) => ({
  user: state.login.user,
  finished: state.login.finished,
});

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
      <SearchAppBar />
      <Container component="main" maxWidth="xs">
        <CssBaseline>
          <Router>
            <Login path="/login" />
          </Router>
        </CssBaseline>
      </Container>
    </>
  );
};

App.propTypes = {
  user: PropTypes.string.isRequired,
  finished: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps)(App);
