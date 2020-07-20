/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';

import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: theme.spacing(5),
    background: theme.palette.primary.main,
    color: theme.palette.getContrastText(theme.palette.primary.main),
    borderRadius: theme.spacing(2),
    padding: theme.spacing(2),
  },
}));

const mapStateToProps = (state) => ({
  user: state.login.user,
});

const mapDispatchToProps = (dispatch) => ({});

const AccountSettings = (props) => {
  const { user } = props;
  const classes = useStyles();
  return (
    <Container maxWidth="md" fluid="true">
      <div className={classes.root}>AccountSettings</div>
    </Container>
  );
};

AccountSettings.propTypes = {
  user: PropTypes.bool.isRequired,
};

AccountSettings.defaultProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(AccountSettings);
