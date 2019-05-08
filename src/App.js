import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import sitemap from './commons/sitemap'
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import PAGES from './containers';
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          {Object.keys(PAGES).map(key=> (
            <Route key={key} exact path={sitemap[key]} component={PAGES[key]} />
          ))}
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
