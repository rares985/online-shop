/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';

import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
  root: {},
  illustrationContainer: {
    marginTop: theme.spacing(30),
    marginLeft: theme.spacing(50),
  },
}));

const mapStateToProps = (state) => ({
  user: state.login.user,
});

const mapDispatchToProps = (dispatch) => ({});

const Home = (props) => {
  const { user } = props;
  const classes = useStyles();
  return (
    <Container fluid="true" maxWidth="xs" className={classes.root}>
      Home
    </Container>
  );
};

Home.propTypes = {
  user: PropTypes.string.isRequired,
};

Home.defaultProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
