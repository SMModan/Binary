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
import { useSelector } from "react-redux";

export default function Routes() {
  const isLoggedin = useSelector((state) => state.userDataReducer.isLoggedin);
  return (
    <Switch>
      {publicRoutes.map((item, index) => (
        <Route key={index} {...item} />
      ))}
      {isLoggedin && (
        <SidebarAdminLayout>
          {secureRoutes.map((item, index) => (
            <Route key={index} {...item} />
          ))}
        </SidebarAdminLayout>
      )}
      <Route render={() => <Redirect to="/login" />} />
    </Switch>
  );
}
