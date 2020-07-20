/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';

import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => {});

const mapStateToProps = (state) => ({
  user: state.login.user,
});

const mapDispatchToProps = (dispatch) => ({});

const AccountSettings = (props) => {
  const { user } = props;
  const classes = useStyles();
  return (
    <Container maxWidth="sm" fluid="true">
      <h1>AccountSettings</h1>
    </Container>
  );
};

AccountSettings.propTypes = {
  user: PropTypes.bool.isRequired,
};

AccountSettings.defaultProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(AccountSettings);
