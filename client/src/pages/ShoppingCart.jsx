/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import ShoppingCartItem from '../components/ShoppingCartItem';
import CheckoutLabel from '../components/CheckoutLabel';

import { AddItemToCart, RemoveItemFromCart } from '../actions/cartActions';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
  child: {
    marginBottom: theme.spacing(2),
    padding: theme.spacing(2),
  },
}));

const mapStateToProps = (state) => ({
  productsInCart: state.cart.productsInCart,
});

const mapDispatchToProps = (dispatch) => ({
  DoAddProductToCart: (request) => {
    dispatch(AddItemToCart(request));
  },
  DoRemoveItemFromCart: (product) => {
    dispatch(RemoveItemFromCart(product));
  },
});

const ShoppingCart = (props) => {
  const classes = useStyles();

  const { productsInCart } = props;
  const { DoAddProductToCart, DoRemoveItemFromCart } = props;

  const handleAddPiece = (product) => {
    DoAddProductToCart(product);
  };

  const handleRemovePiece = (product) => {
    DoRemoveItemFromCart(product);
  };

  const ProductList = () => {
    return (
      <>
        <Typography variant="h3" component="h4">
          Coș de cumpărături
        </Typography>
        <List>
          {productsInCart.map((item) => (
            <ShoppingCartItem
              title={item.product.title}
              subtitle={item.count}
              handleAddPiece={() => handleAddPiece(item.product)}
              handleRemovePiece={() => handleRemovePiece(item.product)}
              avatar={<BeachAccessIcon />}
            />
          ))}
        </List>
      </>
    );
  };

  return (
    <CssBaseline>
      <Container fluid className={classes.root}>
        {productsInCart.length !== 0 && (
          <>
            <Paper elevation={8} className={classes.child}>
              <ProductList />
            </Paper>
            <Paper elevation={8}>
              <CheckoutLabel />
            </Paper>
          </>
        )}
        {productsInCart.length === 0 && (
          <Paper elevation={8} className={classes.child}>
            <Typography variant="h5" component="h4">
              Nu aveți niciun produs în coș
            </Typography>
          </Paper>
        )}
      </Container>
    </CssBaseline>
  );
};

ShoppingCart.propTypes = {
  productsInCart: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  DoAddProductToCart: PropTypes.func.isRequired,
  DoRemoveItemFromCart: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);
