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
import Box from '@material-ui/core/Box';

/* eslint-disable no-unused-vars */
import grey from '@material-ui/core/colors/grey';
import blue from '@material-ui/core/colors/blue';
import lime from '@material-ui/core/colors/lime';
import green from '@material-ui/core/colors/green';
import red from '@material-ui/core/colors/red';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faBan, faSpinner } from '@fortawesome/free-solid-svg-icons';

import TabPanel from '../components/TabPanel';
import OrderPreview from '../components/OrderPreview';
import OrderIllustration from '../components/OrderIllustration';

const useStyles = makeStyles((theme) => ({
  titleContainer: {},
  titleText: {
    marginBottom: theme.spacing(-14),
  },
  titleIllustration: {},
  root: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(15),
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
    <Container maxWidth="sm" fluid="true" className={classes.root}>
      <Box className={classes.titleContainer} maxWidth="md" letterSpacing={300}>
        <Typography variant="h3" element="h1" className={classes.titleText}>
          Comenzi
        </Typography>
        <OrderIllustration className={classes.titleIllustration} />
      </Box>
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
