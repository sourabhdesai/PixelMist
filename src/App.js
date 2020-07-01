import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import GitHubButton from 'react-github-btn'
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
        <div className="footer">
          <Link to="/about"><h2 className="footer-link">About</h2></Link>
          <Link to="/examples"><h2 className="footer-link">Examples</h2></Link>
          <div className="github-btn">
            <GitHubButton href="https://github.com/sourabhdesai/PixelMist"
              data-color-scheme="no-preference: dark; light: dark; dark: dark;"
              data-icon="octicon-star" aria-label="Star sourabhdesai/PixelMist on GitHub">Star</GitHubButton>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
