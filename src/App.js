import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import ExpressionBasedPixelGen from './components/ExpressionBasedPixelGen';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <ExpressionBasedPixelGen />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
