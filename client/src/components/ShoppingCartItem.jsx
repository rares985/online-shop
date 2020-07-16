import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
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
  const { avatar, title, subtitle } = props;
  const { handleRemovePiece, handleAddPiece } = props;

  const count = `${subtitle} bucăți`;

  return (
    <ListItem>
      <ListItemAvatar>
        <Avatar className={classes.avatar}>{avatar}</Avatar>
      </ListItemAvatar>
      <ListItemText primary={title} />
      <IconButton onClick={handleRemovePiece}>
        <RemoveIcon />
      </IconButton>
      {count}
      <IconButton onClick={handleAddPiece}>
        <AddIcon />
      </IconButton>
    </ListItem>
  );
};

ShoppingCartItem.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  avatar: PropTypes.node.isRequired,

  handleRemovePiece: PropTypes.func.isRequired,
  handleAddPiece: PropTypes.func.isRequired,
};

export default ShoppingCartItem;
