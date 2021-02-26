import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';

export const RouteComponent = () => {
  return (
    <Router>
      <Link to="/">Home Page</Link>
      <Link to="/other">Other Page</Link>
      <Switch>
        <Route path="/" exact>
          <div>Home page</div>
        </Route>
        <Route path="/other" exact>
          <div>Other</div>
        </Route>
      </Switch>
    </Router>
  );
};

ReactDOM.render(<RouteComponent />, document.getElementById('app'));
