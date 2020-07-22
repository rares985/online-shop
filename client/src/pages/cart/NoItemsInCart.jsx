/* eslint-disable no-unused-vars */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => {});

const NoItemsInCart = () => {
  const classes = useStyles();
  return (
    <Typography variant="h5" component="h5">
      Nu aveți niciun produs în coș
    </Typography>
  );
};

NoItemsInCart.defaultProps = {};

export default NoItemsInCart;
