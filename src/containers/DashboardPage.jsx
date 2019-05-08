import React, {Component} from 'react';
import {PageWrapper} from '../components/PageBuilder';
import Navbar from '../components/Navbar';
import Dashboard from '../components/Dashboard';
import ModalDetail from '../components/ModalDetail';
import { withStyles } from '@material-ui/core/styles';
import {Drawer, Grid} from "@material-ui/core";
import styled from 'styled-components';


import images from '../images'

const {avatar, arrow_right, utangku, utangmu} = images;


const styles = {
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  colorDefault: {
    'background-color': '#1676c9'
  },
};
class DashboardPage extends Component{
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      drawer: false
    };
    this.handleClose = this.handleClose.bind(this);
    this.handleOpen = this.handleOpen.bind(this);
    this.goto = this.goto.bind(this);
    this.toggleDrawer = this.toggleDrawer.bind(this);

  }

  toggleDrawer () {
    this.setState({
      drawer: !this.state.drawer,
    });
  }
  handleClose () {
    this.setState({ modal: false });
  }
  handleOpen () {
    this.setState({ modal: true });
  }
  goto () {
    this.props.history.push('/pay')
  }


  render() {
    const {classes} = this.props;
    return (
      <PageWrapper>
        <Navbar leftButton={this.toggleDrawer} />
        <Drawer open={this.state.drawer} onClose={()=> this.toggleDrawer()} classes={{
          paper: classes.colorDefault,
        }}>
          <div
            tabIndex={0}
            role="button"
            onClick={()=> this.toggleDrawer()}
            onKeyDown={()=> this.toggleDrawer()}
          >
            <div className={classes.list}>
              <Grid container style={{padding: 12}}>
                <Grid item xs={3}>
                  <img src={avatar} alt=""/>
                </Grid>
                <Grid item xs={8}>
                  <Text >
                    Roger Danuarta
                  </Text>
                </Grid>
                <Grid item xs={1}>
                  <Grid container justify={'flex-end'}>
                    <img style={{cursor: 'pointer', marginTop: 12}} onClick={this.toggleDrawer} src={arrow_right} alt=""/>
                  </Grid>
                </Grid>
              </Grid>

              <Grid container style={{padding: 12}} >
                <Grid item xs={3} >
                    <img style={{marginLeft: 12}} src={utangmu} alt=""/>
                </Grid>
                <Grid item xs={9} >
                  <MenuText>
                    Utangmu
                  </MenuText>
                </Grid>
              </Grid>

              <Grid container style={{padding: 12}} >
                <Grid item xs={3} >
                  <img style={{marginLeft: 12}} src={utangku} alt=""/>
                </Grid>
                <Grid item xs={9} >
                  <MenuText>
                    Uangmu di Teman
                  </MenuText>
                </Grid>
              </Grid>

            </div>

          </div>
        </Drawer>
        <Dashboard handleClose={this.handleClose} handleOpen={this.handleOpen} />
        <ModalDetail goto={this.goto} modal={this.state.modal} handleClose={this.handleClose} handleOpen={this.handleOpen}   />
      </PageWrapper>
    )
  }

}
export default withStyles(styles)(DashboardPage);

const Text = styled.div`
font-size: 14px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.14;
  letter-spacing: normal;
  text-align: left;
  color: #ffffff;
  margin-top: 12px;
`;

const MenuText = styled.div`
font-size: 14px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.14;
  letter-spacing: normal;
  color: #ffffff;
  margin-top: 6px
`;
