/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';

import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import Paper from '@material-ui/core/Paper';

import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  paper: {
    margin: theme.spacing(3, 2, 3, 2),
  },
  mouseIn: {
    transform: 'scale(1.05)',
  },
  listItem: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    transform: 'scale(1)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
    padding: theme.spacing(2, 2, 2, 2),
  },
}));

const OrderPreview = (props) => {
  const { products, date, id } = props;
  const [mouseIn, setMouseIn] = React.useState(false);
  const classes = useStyles();
  return (
    <Paper
      onMouseEnter={() => setMouseIn(true)}
      onMouseLeave={() => setMouseIn(false)}
      className={clsx(classes.paper, {
        [classes.mouseIn]: mouseIn,
      })}
      elevation={mouseIn ? 10 : 2}
    >
      <ListItem className={classes.listItem} button onClick={() => alert('Clicked me!')}>
        <Typography variant="body1">ID: {id}</Typography>
        <Typography variant="body1">Data: {date}</Typography>
      </ListItem>
    </Paper>
  );
};

OrderPreview.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  date: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

OrderPreview.defaultProps = {};

export default OrderPreview;
