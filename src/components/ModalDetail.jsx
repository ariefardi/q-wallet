import React from 'react';
import {Modal, Button, Typography, Grid} from "@material-ui/core";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {CardWrapper} from "./PageBuilder";
import {RedText, BlueText} from "./Text";
import styled from 'styled-components';

function getModalStyle() {
  const top = 50 ;
  const left = 50 ;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const styles = theme => ({
  paper: {
    position: 'absolute',
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
    outline: 'none',
  },
});

class ModalDetail extends React.Component {

  render() {
    const { classes, handleClose, modal, goto } = this.props;
    return (
      <div>
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={modal}
          onClose={handleClose}
        >
          <CardWrapper style={getModalStyle()} className={classes.paper}>
            <Grid container>
              <Grid item xs={6}>
                Bayar utang ke Ronald
              </Grid>
              <Grid item xs={6}>
                <Grid container justify={'flex-end'}>
                  19 Feb
                </Grid>
              </Grid>
            </Grid>

            <Grid container>
              <Grid item xs={6}>
                <RedText>300,000</RedText>
                <Span color={"#ed393d"}>Belum dibayar</Span>
              </Grid>
              <Grid item xs={6}>
                <Grid container justify={'flex-end'}>
                  <GreenButton onClick={goto} >
                    <TextButton>
                      Bayar Utang
                    </TextButton>
                  </GreenButton>
                </Grid>
              </Grid>
            </Grid>

            <Grid container>
              <Grid item xs={6} style={{marginTop: 18}}>
                <BlueText>
                  100,000
                </BlueText>
                <Span color={"#45a5a8"}>Cicilan ke 2</Span>
              </Grid>
              <Grid item xs={6} style={{marginTop: 18}}>
                <Grid container justify={'flex-end'}>
                  11 Feb
                </Grid>
              </Grid>
              <Grid item xs={6} style={{marginTop: 18}}>
                <BlueText>
                  100,000
                </BlueText>
                <Span color={"#45a5a8"}>Cicilan ke 1</Span>
              </Grid>
              <Grid item xs={6} style={{marginTop: 18}}>
                <Grid container justify={'flex-end'}>
                  11 Feb
                </Grid>
              </Grid>
            </Grid>

          </CardWrapper>
        </Modal>
      </div>
    );
  }
}

ModalDetail.propTypes = {
  classes: PropTypes.object.isRequired,
};

// We need an intermediary variable for handling the recursive nesting.

export default withStyles(styles)(ModalDetail);

const GreenButton = styled.div`
  width: 110px;
  height: 35px;
  border-radius: 4px;
  background-color: #55b94c;
  margin-top: 10px;
`;
const TextButton = styled.div`
  font-size: 14px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.14;
  letter-spacing: normal;
  text-align: center;
  color: #ffffff;
  margin-top: 10px;
`;
const Span = styled.div`
font-size: 14px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.14;
  letter-spacing: normal;
  text-align: left;
  color: ${props => props.color};
`;