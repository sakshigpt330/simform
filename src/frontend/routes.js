import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Laptops from './container/laptops';

// Switch between one screen to another screen
class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Laptops} />
        </Switch>
      </Router>
    );
  }
}
export default Routes;
