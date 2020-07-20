/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { navigate } from '@reach/router';

import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';

import ShoppingCartItem from '../components/ShoppingCartItem';

import { AddItemToCart, RemoveItemFromCart } from '../actions/cartActions';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
  child: {
    marginBottom: theme.spacing(2),
    padding: theme.spacing(2),
    background: theme.palette.primary.light,
    color: theme.palette.getContrastText(theme.palette.primary.light),
    borderRadius: theme.spacing(2),
  },
  itemPaper: {
    marginTop: theme.spacing(2),
  },
  totalSection: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
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

  return (
    <CssBaseline>
      <Container fluid="true" maxWidth="md" className={classes.root}>
        {productsInCart.length !== 0 && (
          <>
            <div className={classes.child}>
              <Typography variant="h5" component="h5">
                Coș de cumpărături
              </Typography>
              <List>
                {productsInCart.map((item) => (
                  <Paper className={classes.itemPaper} key={item.product.id}>
                    <ShoppingCartItem
                      title={item.product.title}
                      count={item.count}
                      pricePerUnit={item.product.price}
                      handleAddPiece={() => handleAddPiece(item.product)}
                      handleRemovePiece={() => handleRemovePiece(item.product)}
                      avatar={<BeachAccessIcon />}
                    />
                  </Paper>
                ))}
              </List>
            </div>
            <div className={`${classes.child} ${classes.totalSection}`}>
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
            </div>
          </>
        )}
        {productsInCart.length === 0 && (
          <div className={classes.child}>
            <Typography variant="h5" component="h5">
              Nu aveți niciun produs în coș
            </Typography>
          </div>
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
