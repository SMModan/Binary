import SidebarAdminLayout from "../components/SidebarAdminLayout";
import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation,
} from "react-router-dom";
import { publicRoutes, secureRoutes } from "./routeConstants";
import { useSelector } from "react-redux";
export default function Routes() {
  const isLoggedin = useSelector((state) => state.userDataReducer.isLoggedin);
  const alloedRoutes = ["/stripe-status"];
  const histroy = useHistory();
  const location = useLocation();
  const isProfileCompleted = useSelector(
    (state) => state.userDataReducer.company.is_profile_completed
  );
  useEffect(() => {
    if (
      isLoggedin &&
      !isProfileCompleted &&
      location.pathname !== "/complete-profile" &&
      !alloedRoutes.includes(location.pathname)
    ) {
      histroy.push("/complete-profile");
    }
  }, [isLoggedin, isProfileCompleted, location.pathname]);
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
