/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';

import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';

import MaskableTextField from '../components/MaskableTextField';
import GoogleLogo from '../components/Icons';

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
  logo: {
    padding: theme.spacing(2),
  },
  avatarIcon: {
    animation: 'rotation 0.5s linear',
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
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  root: {
    marginBottom: theme.spacing(5),
  },
}));

const mapStateToProps = (state) => ({
  user: state.login.user,
  error: state.register.error,
  loading: state.register.loading,
});

const mapDispatchToProps = (dispatch) => ({});

const Register = (props) => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [phoneNumber, setPhoneNumber] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');

  const { user, error, loading } = props;
  const classes = useStyles();

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const validateForm = () => {
    if (!username || !password || !firstName || !lastName || !email || !confirmPassword) {
      return false;
    }

    if (password !== confirmPassword) {
      return false;
    }
    /* eslint-disable no-useless-escape */
    /* eslint-disable max-len */
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    /* eslint-enable no-useless-escape */
    /* eslint-enable max-len */
    return re.test(String(email).toLowerCase());
  };

  return (
    <Container maxWidth="sm" className={classes.root}>
      <Paper elevation={4} className={classes.paper}>
        <Avatar className={classes.avatar}>
          <FontAwesomeIcon icon={faLock} className={classes.avatarIcon} />
        </Avatar>
        <Typography component="h1" variant="h5">
          Înregistrare
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <TextField
            variant="filled"
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            name="username"
            autoFocus
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
          <TextField
            variant="filled"
            margin="normal"
            required
            fullWidth
            id="fname"
            label="Prenume"
            name="fname"
            autoComplete="given-name"
            value={firstName}
            onChange={(event) => setFirstName(event.target.value)}
          />
          <TextField
            variant="filled"
            margin="normal"
            required
            fullWidth
            id="lname"
            label="Nume"
            name="lname"
            autoComplete="family-name"
            value={lastName}
            onChange={(event) => setLastName(event.target.value)}
          />

          <TextField
            variant="filled"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email"
            name="email"
            autoComplete="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />

          <TextField
            variant="filled"
            margin="normal"
            type="tel"
            required
            fullWidth
            id="phonenumber"
            label="Număr telefon"
            name="phonenumber"
            autoComplete="phone-number"
            value={phoneNumber}
            onChange={(event) => setPhoneNumber(event.target.value)}
          />

          <MaskableTextField
            margin="none"
            variant="filled"
            required
            fullWidth
            name="password"
            autoComplete="new-password"
            label="Parola"
            id="password"
            value={password}
            error={error}
            helperText={error ? 'Username/parola incorecta' : ''}
            onChange={(event) => setPassword(event.target.value)}
          />
          <MaskableTextField
            margin="none"
            variant="filled"
            required
            fullWidth
            name="confpassword"
            label="Confirmă parola"
            id="confpassword"
            value={confirmPassword}
            error={error}
            helperText={error ? 'Username/parola incorecta' : ''}
            onChange={(event) => setConfirmPassword(event.target.value)}
          />
          <FormControlLabel
            control={<Checkbox value="remember" required color="primary" />}
            label={
              <Typography variant="body2">
                Sunt de acord cu <Link href="http://www.google.com">termenii și condițiile</Link> de
                utilizare
              </Typography>
            }
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            disabled={!validateForm()}
          >
            Înregistrare
          </Button>
          <Grid container className={classes.socialMediaRegister}>
            <Grid item xs={12} className={classes.socialMediaRegisterTitle}>
              <Typography variant="h5">Înregistrare cu</Typography>
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
        </form>
      </Paper>
    </Container>
  );
};

Register.propTypes = {
  user: PropTypes.string.isRequired,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
};

Register.defaultProps = {
  error: '',
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
/* eslint-enable no-unused-vars */
