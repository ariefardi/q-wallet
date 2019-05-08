import React from 'react';
import styled from 'styled-components';
import {Grid} from "@material-ui/core";
import images from '../images'

const {contact} = images
const InfoContact = props => {
  return (
    <Wrapper>
      <Grid container alignItems="center">
        <Grid item xs={1}>
          <img src={contact} alt=""/>
        </Grid>
        <Grid item xs={11}>
          <Grid container style={{marginLeft: 12}}>
            <Grid item xs={12}>
              <Text>
                Ronald
              </Text>
            </Grid>
            <Grid item xs={12}>
              <Text>
                0812987123
              </Text>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Wrapper>
  )
};
export default InfoContact

const Wrapper = styled.div`
  width: 100%;
  height: auto;
  background-color: #9fccfd;
  padding: 16px;
`;
const Text = styled.div`
font-size: 14px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.14;
  letter-spacing: normal;
  text-align: left;
  color: #707070;
`;
