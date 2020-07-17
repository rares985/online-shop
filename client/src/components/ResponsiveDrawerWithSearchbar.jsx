import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fade, makeStyles, useTheme } from '@material-ui/core/styles';

import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import List from '@material-ui/core/List';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import InputBase from '@material-ui/core/InputBase';
import Typography from '@material-ui/core/Typography';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

import SidebarLink from './SidebarLink';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
  content: {
    flexGrow: 1,
  },
}));

const mapStateToProps = (state) => ({
  user: state.login.user,
});

const ResponsiveDrawerWithSearchbar = (props) => {
  const { searchPlaceholder, title } = props;
  const { window, links, user } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <List>
        {links
          .filter((elem) => !elem.afterDivider)
          .map((link) => (
            <SidebarLink
              key={link.text}
              path={link.path}
              icon={link.icon}
              text={link.text}
              nested={link.nested}
            />
          ))}
      </List>
      <Divider />
      <List>
        {/* TODO Check why dashboard appears before login */}
        {links
          .filter((elem) => elem.afterDivider)
          .map((link) => (
            <SidebarLink
              path={link.path}
              key={link.text}
              icon={link.icon}
              text={link.text}
              nested={link.nested}
            />
          ))}
      </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  const { children } = props;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar elevation={0} position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            {title}
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder={searchPlaceholder}
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
          <div className={classes.toolbarButtons}>
            {user !== '' && (
              <IconButton color="inherit">
                <FontAwesomeIcon icon={faHeart} />
              </IconButton>
            )}
          </div>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="pages of site">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {/* eslint-disable max-len */}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#3b4a6b"
            fillOpacity="1"
            d="M0,288L48,272C96,256,192,224,288,192C384,160,480,128,576,133.3C672,139,768,181,864,213.3C960,245,1056,267,1152,229.3C1248,192,1344,96,1392,48L1440,0L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          />
        </svg>
        {/* eslint-enable max-len */}
        {children}
      </main>
    </div>
  );
};

ResponsiveDrawerWithSearchbar.propTypes = {
  window: PropTypes.element,
  links: PropTypes.arrayOf(
    PropTypes.exact({
      afterDivider: PropTypes.bool,
      text: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired,
      icon: PropTypes.oneOfType([
        PropTypes.element.isRequired,
        PropTypes.node.isRequired,
        PropTypes.func.isRequired,
      ]).isRequired,
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
    }).isRequired
  ).isRequired,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  searchPlaceholder: PropTypes.string,
  title: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired,
};

ResponsiveDrawerWithSearchbar.defaultProps = {
  searchPlaceholder: 'Caută',
  window: undefined,
};

export default connect(mapStateToProps)(ResponsiveDrawerWithSearchbar);
