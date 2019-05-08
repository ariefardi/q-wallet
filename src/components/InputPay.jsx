import React from 'react';
import {Grid, TextField, InputAdornment} from "@material-ui/core";
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import styled from 'styled-components';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
});

const InputPay = props => {
  return (
    <Grid container style={{padding: 12}}>
      <TextField
        id="standard-full-width"
        label="Jumlah"
        style={{ margin: 8 }}
        helperText="Sisa Hutang : 700,000"
        fullWidth
        margin="normal"
        InputProps={{
          startAdornment: <InputAdornment position="start">Rp.</InputAdornment>,
        }}
      />
    </Grid>
  )
};

InputPay.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(InputPay);
