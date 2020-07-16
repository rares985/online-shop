import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
// import clsx from 'clsx';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import GoogleLogo from '../components/Icons';

import LoginAction from '../actions/LoginAction';

import MaskableTextField from '../components/MaskableTextField';

const useStyles = makeStyles((theme) => ({
  paper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(2),
  },
  avatar: {
    margin: theme.spacing(1),
    color: theme.palette.getContrastText(theme.palette.secondary.main),
    backgroundColor: theme.palette.secondary.main,
  },
  avatarIcon: {
    animation: 'rotation 1s linear',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  linkAlignRight: {
    textAlign: 'right',
  },
  socialMediaRegister: {
    padding: theme.spacing(2),
  },
  socialMediaRegisterTitle: {
    textAlign: 'center',
    marginBottom: theme.spacing(3),
  },
  socialMediaIcon: {
    textAlign: 'center',
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

const mapStateToProps = (state) => ({
  user: state.login.user,
  error: state.login.error,
});

const mapDispatchToProps = (dispatch) => ({
  onSubmitLoginRequest: (request) => {
    dispatch(LoginAction(request));
  },
});

const Login = (props) => {
  const classes = useStyles();

  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const { error, onSubmitLoginRequest } = props;

  function validateForm() {
    return username.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();

    onSubmitLoginRequest({
      username,
      password,
    });
  }

  return (
    <Container maxWidth="sm">
      <Paper elevation={4} className={classes.paper}>
        <Avatar className={classes.avatar}>
          <FontAwesomeIcon icon={faLock} className={classes.avatarIcon} />
        </Avatar>
        <Typography component="h1" variant="h5">
          Autentificare
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleSubmit}>
          <TextField
            variant="filled"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Username"
            name="email"
            autoComplete="email"
            autoFocus
            value={username}
            error={error}
            helperText={error ? 'Username/parola incorecta' : ''}
            onChange={(event) => setUsername(event.target.value)}
          />
          <MaskableTextField
            variant="filled"
            margin="none"
            required
            fullWidth
            name="password"
            label="Parola"
            id="password"
            autoComplete="current-password"
            value={password}
            error={error}
            helperText={error ? 'Username/parola incorecta' : ''}
            onChange={(event) => setPassword(event.target.value)}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label={<Typography variant="body2">Ține-mă minte</Typography>}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            disabled={!validateForm()}
          >
            Autentificare
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="http://google.com" variant="body2">
                Am uitat parola
              </Link>
            </Grid>
            <Grid item xs className={classes.linkAlignRight}>
              <Link href="http://google.com" variant="body2">
                Nu am cont
              </Link>
            </Grid>
            <Grid container className={classes.socialMediaRegister}>
              <Grid item xs={12} className={classes.socialMediaRegisterTitle}>
                <Typography variant="h5">Autentificare cu</Typography>
              </Grid>
              <Grid item xs={6} className={classes.socialMediaIcon}>
                <Link href="http://facebook.com" variant="h3">
                  <FontAwesomeIcon color="#4267B2" icon={faFacebookF} />
                </Link>
              </Grid>
              <Grid item xs={6} className={classes.socialMediaIcon}>
                <Link href="http://google.com" variant="h3">
                  <GoogleLogo />
                </Link>
              </Grid>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

Login.propTypes = {
  error: PropTypes.string,
  onSubmitLoginRequest: PropTypes.func.isRequired,
};

Login.defaultProps = {
  error: '',
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
