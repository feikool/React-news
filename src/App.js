import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Main from './components/Main';
import New from './components/New';
import Hot from './components/hot';
import Me from './components/Me';


class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Route exact path="/" component={Main}/>
                    <Route path="/main" component={Main}/>
                    <Route path="/new" component={New}/>
                    <Route path="/hot" component={Hot}/>
                    <Route path="/me" component={Me}/>
                </div>
            </Router>
        );
    }
}

export default App;
