import React, {Component} from 'react';
import {PageWrapper} from "../components/PageBuilder";
import Navbar from '../components/NavbarUtang';
import InfoContact from '../components/InfoContact';
import InputPay from '../components/InputPay';
import styled from 'styled-components';
class PayingPage extends Component {
  constructor(props) {
    super(props);
    this.goback = this.goback.bind(this)
  }
  goback () {
    this.props.history.goBack()
  }

  render() {
    return (
      <PageWrapper>
        <Navbar leftButton={this.goback} />
        <InfoContact />
        <InputPay />
        <Button >
          <Text>
            Confirm
          </Text>
        </Button>
      </PageWrapper>
    )
  }
}
export default PayingPage

const Button = styled.div`
  width: 100%;
  height: auto;
  box-shadow: 0 -2px 6px 0 rgba(0, 0, 0, 0.16);
  background-color: #1a86a0;
  position: fixed;
  bottom: 0;
  max-width: 512px;
  overflow: hidden;
  padding: 20px
  
`;
const Text = styled.div`
  font-size: 20px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.25;
  letter-spacing: normal;
  text-align: left;
  color: #ffffff;
  text-align: center;
`;