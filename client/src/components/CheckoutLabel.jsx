/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const mapStateToProps = (state) => ({
  productsInCart: state.cart.productsInCart,
});

const CheckoutLabel = (props) => {
  return (
    <List>
      <ListItem>
        <ListItemText primary="Total" />
      </ListItem>
    </List>
  );
};

export default connect(mapStateToProps)(CheckoutLabel);
