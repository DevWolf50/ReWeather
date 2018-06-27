import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from './Nav';
import Home from './Home';
import Forecast from './forecast';
import Details from './Details';
import { css } from 'emotion';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div
          className={css`
            padding: 1rem;
          `}
        >
          <Nav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/forecast" component={Forecast} />
            <Route path="/details/:city" component={Details} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
