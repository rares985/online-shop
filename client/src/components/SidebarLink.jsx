import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import { navigate } from '@reach/router';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import ExpandMore from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse';

const useStyles = makeStyles((theme) => ({
  nested: {
    paddingLeft: theme.spacing(4),
  },
  withLabel: {
    borderRadius: '0 3px 3px 0',
    background: '#FFFFFF',
    borderLeft: `3px solid ${theme.palette.primary.main}`,
    fontWeight: 'bold',
    padding: '8px 16px',
    margin: theme.spacing(1),
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
}));

const SidebarLink = (props) => {
  const { text, icon, path, nested, withLabel } = props;

  const hasChildren = nested.length !== 0;

  const [expanded, setExpanded] = React.useState(false);

  const classes = useStyles();

  const handleClick = () => {
    if (hasChildren) {
      setExpanded(!expanded);
    } else {
      navigate(path);
    }
  };

  return (
    <>
      <ListItem button onClick={handleClick} className={clsx({ [classes.withLabel]: withLabel })}>
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText primary={text} />
        {hasChildren && (
          <ExpandMore
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
          />
        )}
      </ListItem>
      {hasChildren && (
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <List component="div" disablePadding className={clsx({ [classes.withLabel]: withLabel })}>
            {nested.map((child) => (
              <ListItem
                onClick={() => navigate(child.path)}
                button
                key={child.text}
                className={classes.nested}
              >
                <ListItemIcon>{child.icon}</ListItemIcon>
                <ListItemText primary={child.text} />
              </ListItem>
            ))}
          </List>
        </Collapse>
      )}
    </>
  );
};

SidebarLink.propTypes = {
  text: PropTypes.string.isRequired,
  icon: PropTypes.oneOfType([
    PropTypes.element.isRequired,
    PropTypes.node.isRequired,
    PropTypes.func.isRequired,
  ]).isRequired,
  path: PropTypes.string,
  nested: PropTypes.arrayOf(
    PropTypes.exact({
      text: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired,
      icon: PropTypes.oneOfType([
        PropTypes.element.isRequired,
        PropTypes.node.isRequired,
        PropTypes.func.isRequired,
      ]).isRequired,
    }).isRequired
  ),
  withLabel: PropTypes.bool,
};

SidebarLink.defaultProps = {
  path: '/',
  nested: [],
  withLabel: false,
};

export default SidebarLink;
