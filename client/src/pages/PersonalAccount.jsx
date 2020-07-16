/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';

import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';

const mapStateToProps = (state) => ({
  user: state.login.user,
  error: state.account.error,
  loading: state.account.loading,
});

const mapDispatchToProps = (dispatch) => ({
  onSubmitLoginRequest: (request) => {},
});

const useStyles = makeStyles((theme) => ({}));

const PersonalAccount = (props) => {
  const classes = useStyles();
  const { user, loading, error } = props;

  return (
    <Container maxWidth="sm">
      <Paper elevation={4} className={classes.paper}>
        Sal
      </Paper>
    </Container>
  );
};

PersonalAccount.propTypes = {
  user: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

PersonalAccount.defaultProps = {
  error: '',
};

export default connect(mapStateToProps, mapDispatchToProps)(PersonalAccount);
