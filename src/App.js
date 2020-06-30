import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import ExpressionBasedPixelGen from './components/ExpressionBasedPixelGen';
import About from './components/About';
import Examples from './components/Examples';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <ExpressionBasedPixelGen />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/examples">
            <Examples />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
