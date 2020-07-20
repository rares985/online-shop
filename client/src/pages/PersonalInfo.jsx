/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Skeleton from '@material-ui/lab/Skeleton';

import List from '@material-ui/core/List';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';

import PaperListItem from '../components/PaperListItem';

import FetchPersonalInfo from '../actions/personalActions';

const useStyles = makeStyles((theme) => ({
  addressListContainer: {
    marginTop: theme.spacing(5),
    background: theme.palette.primary.light,
    color: theme.palette.getContrastText(theme.palette.primary.main),
    padding: theme.spacing(2),
    borderRadius: theme.spacing(1),
  },
}));

const mapStateToProps = (state) => ({
  user: state.login.user,
  deliveryAddresses: state.account.deliveryAddresses,
  billingAddresses: state.account.billingAddresses,
  loading: state.account.loading,
  error: state.account.error,
});

const mapDispatchToProps = (dispatch) => ({
  doFetchPersonalInfo: (request) => {
    dispatch(FetchPersonalInfo(request));
  },
});

const PersonalInfo = (props) => {
  const { user, billingAddresses, deliveryAddresses, loading, error } = props;

  const [localBilling, setLocalBilling] = React.useState([]);
  const [localDelivery, setLocalDelivery] = React.useState([]);

  const { doFetchPersonalInfo } = props;

  const [mouseIn, setMouseIn] = React.useState(false);

  const classes = useStyles();

  React.useEffect(() => {
    if (loading) {
      doFetchPersonalInfo();
    }
  }, [loading]);

  const addressLists = [
    {
      title: 'Adrese de livrare',
      list: deliveryAddresses,
    },
    {
      title: 'Adrese de facturare',
      list: billingAddresses,
    },
  ];

  return (
    <Container maxWidth="lg" fluid="true">
      {addressLists.map((addressList) => {
        return (
          <div className={classes.addressListContainer}>
            <Typography variant="h4" element="h1">
              {loading ? <Skeleton /> : addressList.title}
            </Typography>
            <List component="div" disablePadding>
              {addressList.list.map((address) => {
                return loading ? (
                  <Skeleton />
                ) : (
                  <PaperListItem
                    text={address}
                    icon={<FontAwesomeIcon icon={faPencilAlt} size="lg" />}
                  />
                );
              })}
            </List>
          </div>
        );
      })}
    </Container>
  );
};

PersonalInfo.propTypes = {
  user: PropTypes.string.isRequired,
  billingAddresses: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  deliveryAddresses: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,

  doFetchPersonalInfo: PropTypes.func.isRequired,
};

PersonalInfo.defaultProps = {
  error: '',
};

export default connect(mapStateToProps, mapDispatchToProps)(PersonalInfo);
