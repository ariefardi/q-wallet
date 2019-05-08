import React from 'react';
import {CardWrapper} from "./PageBuilder";
import {Grid} from "@material-ui/core";
import styled from 'styled-components';
import {RedText, BlackText} from "./Text";

const Dashboard = props => {
  const {handleOpen, handleClose} = props;
  return (
    <Grid container justify={'center'} style={{marginTop: -20, paddingLeft: 14, paddingRight: 14}}>
      <CardWrapper onClick={handleOpen}>
        <Grid container >
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
          </Grid>
          <Grid item xs={6}>
            <Grid container justify={'flex-end'}>
              <BlackText>300,000</BlackText>
            </Grid>
          </Grid>
          <Grid item xs={6}>
            <TextWrapper>Belum dibayar</TextWrapper>
          </Grid>
          <Grid item xs={6}>
            <Grid container justify={'flex-end'}>
              <TotalUtang>Total utang</TotalUtang>
            </Grid>
          </Grid>
        </Grid>
      </CardWrapper>

    </Grid>
  )
};

const TextWrapper = styled.div`
  font-size: 14px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.14;
  letter-spacing: normal;
  text-align: left;
  color: #ed393d;
`;
const TotalUtang = styled.div`
  font-size: 14px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.14;
  letter-spacing: normal;
  text-align: left;
  color: #2d3939;
`;



export default Dashboard