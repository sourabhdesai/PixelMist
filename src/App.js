import React from 'react';
import {
  useLocation,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import ReactGA from 'react-ga';
import GitHubButton from 'react-github-btn';
import './App.css';
import Title from './components/Title';
import ExpressionBasedPixelGen from './components/ExpressionBasedPixelGen';
import About from './components/About';
import Examples from './components/Examples';


function updateLocationForGA(location) {
  ReactGA.set({ page: location.pathname });
  ReactGA.pageview(location.pathname);
}

function App() {
  const location = useLocation();
  updateLocationForGA(location);
  return (
    <div className="App">
      <Title />
      <Switch>
        <Route exact path="/PixelMist">
          <ExpressionBasedPixelGen />
        </Route>
        <Route exact path="/PixelMist/about">
          <About />
        </Route>
        <Route exact path="/PixelMist/examples">
          <Examples />
        </Route>
        <Redirect to="/PixelMist" />
      </Switch>
      <div className="footer">
        <Link to="/PixelMist/about"><h2 className="footer-link">About</h2></Link>
        <Link to="/PixelMist/examples"><h2 className="footer-link">Examples</h2></Link>
        <div className="github-btn">
          <GitHubButton href="https://github.com/sourabhdesai/PixelMist"
            data-color-scheme="no-preference: dark; light: dark; dark: dark;"
            data-icon="octicon-star" aria-label="Star sourabhdesai/PixelMist on GitHub">Star</GitHubButton>
        </div>
      </div>
    </div>
  );
}

export default App;
