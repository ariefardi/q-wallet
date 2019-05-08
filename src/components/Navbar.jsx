import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {AppBar, Toolbar, Typography, Grid} from '@material-ui/core';
// import dompet from '../images/icon-01.png';
import images from '../images'

const {brankas, menu, logo, dompet} = images;

import className from 'classname';

const styles = {
  root: {
    flexGrow: 1,
  },
  colorDefault: {
    backgroundImage: 'linear-gradient(131deg, #1676c9, #45a5a8);'
  },
  textMoney: {
    fontSize: 29,
    fontWeight: '500',
    color: '#ffffff',
    marginTop: 0,
    marginBottom: 8
  }
};

const Navbar = (props) => {
  const { classes, leftButton } = props;

  return (
    <div className={classes.root}>
      <AppBar position="static" className={className(classes.colorDefault)}>
        <Toolbar>
          <Grid container spacing={24} >
            <Grid item xs={4}>
              <img onClick={leftButton} src={menu} alt=""/>
            </Grid>
            <Grid item xs={4}>
              <Grid container justify={'center'} alignItems={'center'}>
                <img src={logo} alt=""/>
              </Grid>
            </Grid>
            <Grid item xs={4}>
              <Grid container justify={'flex-end'} alignItems={'center'}>
                <img src={brankas} alt=""/>
              </Grid>
            </Grid>
          </Grid>
        </Toolbar>
        <Toolbar>
          <Grid container>
            <Grid item xs={1}>
              <img src={dompet} alt=""/>
            </Grid>
            <Grid  style={{paddingBottom: 48}} item xs={8}>
              <Grid container>
                <Grid item xs={12}>
                  <h1
                    style={{fontSize: 29,
                    fontWeight: '500',
                    color: '#ffffff',
                    marginTop: 0,
                    marginBottom: 8}}
                  >300,000
                  </h1>
                  <span>Uangmu di teman</span>
                </Grid>
                <Grid  item xs={12}>
                  <h1
                    style={{fontSize: 29,
                      fontWeight: '500',
                      color: '#ffffff',
                      marginTop: 8,
                      marginBottom: 8}}
                  >300,000
                  </h1>
                  <span >utang mu</span>
                </Grid>
              </Grid>
            </Grid>

          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
};

Navbar.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(Navbar);