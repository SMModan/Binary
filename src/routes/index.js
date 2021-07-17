import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import { routes } from "./routeConstants";

export default function Routes() {
  return (
    <Router>
      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <Switch>
        {routes.map((item, index) => (
          <Route key={index} {...item} />
        ))}
        <Route render={() => <Redirect to="/login" />} />
      </Switch>
    </Router>
  );
}
