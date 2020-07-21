import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import FilledInput from '@material-ui/core/FilledInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
/* eslint-disable no-unused-vars */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const InsetOutlinedInput = withStyles({
  root: {
    boxShadow: 'inset 0 2px 2px hsla(0, 0%, 0%, 0.1)',
  },
})(OutlinedInput);

const InsetFilledInput = withStyles({
  root: {
    boxShadow: 'inset 0 2px 2px hsla(0, 0%, 0%, 0.1)',
  },
})(FilledInput);

const HIDE_PASSWORD_DELAY_MS = 750;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    marginLeft: 0,
  },
  margin: {
    margin: theme.spacing(1),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    marginLeft: 0,
    width: `100%`,
  },
  icon: {
    color: theme.palette.primary.main,
  },
}));

const MaskableTextField = (props) => {
  const classes = useStyles();
  const [visible, setVisible] = useState(false);

  const {
    value,
    onChange,
    fullWidth,
    required,
    margin,
    label,
    name,
    id,
    error,
    variant,
    autoComplete,
  } = props;

  const handleClickShowPassword = () => {
    setVisible(!visible);
    setTimeout(() => {
      /* At timeout, forcefully hide password */
      setVisible(false);
    }, HIDE_PASSWORD_DELAY_MS);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <FormControl className={clsx(classes.margin, classes.textField)} variant={variant}>
      <InputLabel htmlFor="outlined-adornment-password">{label}</InputLabel>
      {variant === 'outlined' && (
        <InsetOutlinedInput
          className={clsx(classes.input)}
          type={visible ? 'text' : 'password'}
          autoComplete={autoComplete}
          margin={margin}
          required={required}
          fullWidth={fullWidth}
          name={name}
          id={id}
          value={value}
          onChange={onChange}
          error={error}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                <FontAwesomeIcon icon={visible ? faEye : faEyeSlash} />
              </IconButton>
            </InputAdornment>
          }
        />
      )}
      {variant === 'filled' && (
        <InsetFilledInput
          className={clsx(classes.input)}
          type={visible ? 'text' : 'password'}
          margin={margin}
          autoComplete={autoComplete}
          required={required}
          fullWidth={fullWidth}
          name={name}
          id={id}
          value={value}
          onChange={onChange}
          error={error}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                <FontAwesomeIcon
                  className={classes.icon}
                  size="sm"
                  icon={visible ? faEye : faEyeSlash}
                />
              </IconButton>
            </InputAdornment>
          }
        />
      )}
    </FormControl>
  );
};

MaskableTextField.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  autoComplete: PropTypes.string,
  fullWidth: PropTypes.bool,
  required: PropTypes.bool,
  margin: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(['outlined', 'filled', 'normal']),
  error: PropTypes.bool,
};

MaskableTextField.defaultProps = {
  fullWidth: true,
  required: true,
  error: false,
  variant: 'outlined',
  autoComplete: 'off',
};

export default MaskableTextField;
