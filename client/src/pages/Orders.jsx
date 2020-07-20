/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';

import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faBan, faSpinner } from '@fortawesome/free-solid-svg-icons';

import TabPanel from '../components/TabPanel';
import OrderPreview from '../components/OrderPreview';

const useStyles = makeStyles((theme) => ({
  pageTitle: {
    textAlign: 'center',
    marginTop: theme.spacing(-5),
    marginBottom: theme.spacing(1),
  },
}));

const mapStateToProps = (state) => ({
  user: state.login.user,
  completed: state.orders.completed,
  cancelled: state.orders.cancelled,
  ongoing: state.orders.ongoing,
});

const mapDispatchToProps = (dispatch) => ({});

const Orders = (props) => {
  const { user, completed, cancelled, ongoing } = props;
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <Container maxWidth="lg" fluid="true">
      <Typography variant="h2" element="h1" className={classes.pageTitle}>
        Comenzile mele
      </Typography>
      <Paper elevation={4}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="Completate" icon={<FontAwesomeIcon icon={faCheckCircle} />} />
          <Tab label="Anulate" icon={<FontAwesomeIcon icon={faBan} />} />
          <Tab label="În progres" icon={<FontAwesomeIcon icon={faSpinner} />} />
        </Tabs>
        {[completed, cancelled, ongoing].map((orders, index) => {
          return (
            <TabPanel value={value} index={index}>
              <List>
                {orders.map((order) => (
                  <OrderPreview products={order.products} id={order.id} date={order.date} />
                ))}
              </List>
            </TabPanel>
          );
        })}
      </Paper>
    </Container>
  );
};

Orders.propTypes = {
  user: PropTypes.string.isRequired,
  completed: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  cancelled: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  ongoing: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};

Orders.defaultProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Orders);
