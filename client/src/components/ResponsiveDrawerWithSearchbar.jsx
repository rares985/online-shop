import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import InputBase from '@material-ui/core/InputBase';
import Typography from '@material-ui/core/Typography';
import { fade, makeStyles, useTheme } from '@material-ui/core/styles';
import { navigate } from '@reach/router';

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

const ResponsiveDrawerWithSearchbar = (props) => {
  const { searchPlaceholder, title } = props;
  const { window, links } = props;
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
            <ListItem onClick={() => navigate(link.path)} button key={link.text}>
              <ListItemIcon>{link.icon}</ListItemIcon>
              <ListItemText primary={link.text} />
            </ListItem>
          ))}
      </List>
      <Divider />
      <List>
        {/* TODO Check why dashboard appears before login */}
        {links
          .filter((elem) => elem.afterDivider)
          .map((link) => (
            <ListItem onClick={() => navigate(link.path)} button key={link.text}>
              <ListItemIcon>{link.icon}</ListItemIcon>
              <ListItemText primary={link.text} />
            </ListItem>
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
              <SearchIcon/>
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
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#004643"
            fillOpacity="1"
            d="M0,224L60,202.7C120,181,240,139,360,144C480,149,600,203,720,186.7C840,171,960,85,1080,58.7C1200,32,1320,64,1380,80L1440,96L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
          />
        </svg>
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
      icon: PropTypes.element.isRequired,
    })
  ).isRequired,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  searchPlaceholder: PropTypes.string,
  title: PropTypes.string.isRequired,
};

ResponsiveDrawerWithSearchbar.defaultProps = {
  searchPlaceholder: 'Caută',
  window: undefined,
};

export default ResponsiveDrawerWithSearchbar;
