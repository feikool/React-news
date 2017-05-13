//noinspection JSUnresolvedVariable
import React, {Component} from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import Login from './components/Login';
import Main from './components/Main';
import Hot from './components/Hot';
import Discover from './components/Discover';
import Me from './components/Me';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Main}/>
          <Route path="/login" component={Login}/>
          <Route path="/main" component={Main}/>
          <Route path="/hot" component={Hot}/>
          <Route path="/discover" component={Discover}/>
          <Route path="/me" component={Me}/>
        </div>
      </Router>
    );
  }
}
export default App;

