// import './App.css';
import { Component } from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Toolbar from './components/toolbar/toolbar';
import SideDrawer from './components/sideDrawer/SideDrawer';
import Backdrop from './components/Backdrop/Backdrop';
import Home from './components/home/Home';
import About from './components/about/About';


class App extends Component {
  state = {
    sideDrawerOpen: false
  };

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return {sideDrawerOpen: !prevState.sideDrawerOpen};
    });
  };

  backdropClickHandler = () => {
    this.setState({sideDrawerOpen: false});
  };

  render() {
    // let sideDrawer;
    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} /> 
    }
    return (
      <div style={{height:'100%'}}>
        <BrowserRouter>
        <Toolbar drawerClickHandler = {this.drawerToggleClickHandler} />
        <SideDrawer show={this.state.sideDrawerOpen} />
        <Switch>
          <Route component={Home} path='/' exact />
          <Route component={About} path='/about' />
      </Switch>
      </BrowserRouter>
        {backdrop}
        <main style={{marginTop:'0px', position: "relative"}}>
          {/* <Home /> */}
          {/* <Footer /> */}
        </main> 
      </div>
    );
  }
}

export default App;
