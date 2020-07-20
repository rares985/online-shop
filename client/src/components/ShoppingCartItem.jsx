import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';

import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import Paper from '@material-ui/core/Paper';

import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles((theme) => ({
  avatar: {
    backgroundColor: theme.palette.secondary.main,
  },
  paper: {
    transform: 'scale(1)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shorter,
    }),
  },
  mouseIn: {
    transform: 'scale(1.05)',
  },
}));

const ShoppingCartItem = (props) => {
  const classes = useStyles();
  const { avatar, title, count, pricePerUnit } = props;
  const { handleRemovePiece, handleAddPiece } = props;

  const [mouseIn, setMouseIn] = React.useState(false);
  const [elevation, setElevation] = React.useState(4);

  const handleMouseEnter = () => {
    setMouseIn(true);
    setElevation(4);
  };

  const handleMouseLeave = () => {
    setMouseIn(false);
    setElevation(1);
  };

  return (
    <Paper
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={clsx(classes.paper, {
        [classes.mouseIn]: mouseIn,
      })}
      elevation={elevation}
    >
      <ListItem>
        <ListItemAvatar>
          <Avatar className={classes.avatar}>{avatar}</Avatar>
        </ListItemAvatar>
        <ListItemText primary={title} />
        <IconButton onClick={handleRemovePiece}>
          <RemoveIcon />
        </IconButton>
        <Typography variant="body2">{`${count} bucăți`}</Typography>
        <IconButton onClick={handleAddPiece}>
          <AddIcon />
        </IconButton>
        <Typography variant="body2">{` x ${pricePerUnit} RON = ${
          pricePerUnit * count
        } RON`}</Typography>
      </ListItem>
    </Paper>
  );
};

ShoppingCartItem.propTypes = {
  title: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
  avatar: PropTypes.node.isRequired,
  pricePerUnit: PropTypes.number.isRequired,

  handleRemovePiece: PropTypes.func.isRequired,
  handleAddPiece: PropTypes.func.isRequired,
};

export default ShoppingCartItem;
