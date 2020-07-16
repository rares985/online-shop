/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { CssBaseline, CircularProgress, Grid } from '@material-ui/core';

import FetchProducts from '../actions/catalogActions';
import { AddItemToCart, RemoveItemFromCart } from '../actions/cartActions';

import ProductCard from '../components/ProductCard';

const mapStateToProps = (state) => ({
  products: state.catalog.products,
  loading: state.catalog.loading,
  error: state.catalog.error,
});

const mapDispatchToProps = (dispatch) => ({
  DoFetchProducts: (request) => {
    dispatch(FetchProducts(request));
  },
  DoAddProductToCart: (product) => {
    dispatch(AddItemToCart(product));
  },
});

const Catalog = (props) => {
  /* eslint-disable no-unused-vars */
  const { products, loading, error } = props;
  const { DoFetchProducts, DoAddProductToCart } = props;

  useEffect(() => {
    if (loading) {
      // DoFetchProducts({
      //   howMany: 10,
      // });
    }
  }, [loading]);

  return (
    <CssBaseline>
      {loading && <CircularProgress />}
      {!loading && (
        <Grid container spacing={2}>
          {products.map((product) => (
            <Grid item key={product.id} xs={12} sm={9} md={8} lg={4}>
              <ProductCard
                title={product.title}
                headerText={product.title}
                imageUri={product.image}
                imageTitle="product image"
                shortDescription={product.description}
                handleAddToCartClick={() => DoAddProductToCart(product)}
              />
            </Grid>
          ))}
        </Grid>
      )}
    </CssBaseline>
  );
};

Catalog.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,

  DoFetchProducts: PropTypes.func.isRequired,
  DoAddProductToCart: PropTypes.func.isRequired,
};

Catalog.defaultProps = {
  error: '',
};

export default connect(mapStateToProps, mapDispatchToProps)(Catalog);
