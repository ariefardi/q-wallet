import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {AppBar, Toolbar, Typography, Grid} from '@material-ui/core';
// import dompet from '../images/icon-01.png';
import images from '../images'

const {arrow_back} = images;

import className from 'classname';

const styles = {
  root: {
    flexGrow: 1,
  },
  colorDefault: {
    backgroundImage: 'linear-gradient(131deg,  #45a5a8, #1676c9);'
  },
  textMoney: {
    fontSize: 29,
    fontWeight: '500',
    color: '#ffffff',
    marginTop: 0,
    marginBottom: 8
  }
};

const Navbar = props => {
  const { classes, leftButton } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static" className={className(classes.colorDefault)}>
        <Toolbar>
          <Grid container>
            <Grid  onClick={() => leftButton()} item xs={1}>
              <img style={{cursor: 'pointer'}} src={arrow_back} alt=""/>
            </Grid>
            <Grid item xs={11}>
              Bayar Utang
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  )
};

Navbar.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(Navbar);