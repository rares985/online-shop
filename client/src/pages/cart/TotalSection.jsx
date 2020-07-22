/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { navigate } from '@reach/router';

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => {});

const mapStateToProps = (state) => ({
  productsInCart: state.cart.productsInCart,
});

const TotalSection = (props) => {
  const { productsInCart } = props;
  const classes = useStyles();
  return (
    <>
      <Button variant="contained" onClick={() => navigate('/checkout')}>
        Mergi spre plată
      </Button>
      <Typography variant="h5" component="h5">
        Total:{' '}
        {productsInCart.reduce(
          (accumulator, item) => accumulator + item.product.price * item.count,
          0
        )}{' '}
        RON
      </Typography>
    </>
  );
};

TotalSection.propTypes = {
  productsInCart: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};

TotalSection.defaultProps = {};

export default connect(mapStateToProps)(TotalSection);
