import SidebarAdminLayout from "../components/SidebarAdminLayout";
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import { publicRoutes, secureRoutes } from "./routeConstants";

export default function Routes() {
  return (
    <Switch>
      {publicRoutes.map((item, index) => (
        <Route key={index} {...item} />
      ))}
      <SidebarAdminLayout>
        {secureRoutes.map((item, index) => (
          <Route key={index} {...item} />
        ))}
      </SidebarAdminLayout>
      <Route render={() => <Redirect to="/login" />} />
    </Switch>
  );
}
