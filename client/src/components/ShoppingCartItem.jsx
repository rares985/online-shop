import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles((theme) => ({
  avatar: {
    backgroundColor: theme.palette.secondary.dark,
  },
}));

const ShoppingCartItem = (props) => {
  const classes = useStyles();
  const { avatar, title, count, pricePerUnit } = props;
  const { handleRemovePiece, handleAddPiece } = props;

  return (
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
