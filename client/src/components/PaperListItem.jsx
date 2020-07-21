/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  paper: {
    margin: theme.spacing(3, 2, 1, 2),
    transform: 'scale(1)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shorter,
    }),
  },
  mouseIn: {
    transform: 'scale(1.05)',
  },
  listItem: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: theme.spacing(2, 1, 2, 1),
  },
  dialogTitle: {
    background: theme.palette.primary.main,
    color: theme.palette.getContrastText(theme.palette.primary.dark),
  },
}));

const PaperListItem = (props) => {
  const { text, icon } = props;
  const [mouseIn, setMouseIn] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [address, setAddress] = React.useState('');
  const [elevation, setElevation] = React.useState(4);

  const classes = useStyles();

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleSave = () => {
    handleClose();
  };

  const handleMouseEnter = () => {
    setMouseIn(true);
    setElevation(4);
  };

  const handleMouseLeave = () => {
    setMouseIn(false);
    setElevation(1);
  };

  return (
    <>
      <Paper
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={clsx(classes.paper, {
          [classes.mouseIn]: mouseIn,
        })}
        elevation={elevation}
      >
        <ListItem button key={text} className={classes.listItem} onClick={handleOpen}>
          <Typography variant="body2">{text}</Typography>
          <ListItemIcon>{icon}</ListItemIcon>
        </ListItem>
      </Paper>

      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" maxWidth="lg">
        <DialogTitle className={classes.dialogTitle} id="form-dialog-title">
          Modifică adresă{' '}
        </DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="address"
            label="Adresă"
            type="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary" variant="contained">
            Anulează
          </Button>
          <Button onClick={handleSave} color="primary" variant="contained">
            Salvează
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

PaperListItem.propTypes = {
  text: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
};

PaperListItem.defaultProps = {};

export default PaperListItem;
