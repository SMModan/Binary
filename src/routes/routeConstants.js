import UserList from "../pages/UserList";
import ForgotPassword from "../pages/ForgotPassword";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";

export const routes = [
  {
    path: "/home",
    component: Home,
    name: "Dashboard",
  },
  {
    path: "/manage-jobs",
    component: UserList,
    name: "Manage Jobs",
  },
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/register",
    component: Register,
  },
  {
    path: "/forgot-password",
    component: ForgotPassword,
  },
];
