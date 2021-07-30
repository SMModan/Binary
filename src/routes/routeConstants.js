import UserList from "../pages/UserList";
import ForgotPassword from "../pages/ForgotPassword";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import VerifyOTP from "../pages/VerifyOTP";
import UserProfile from "../pages/UserProfile";
import { Redirect } from "react-router";
import React from "react";
import CreateProduct from "../pages/CreateProduct";

export const publicRoutes = [
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
  {
    path: "/verify-OTP",
    component: VerifyOTP,
  },
];
export const secureRoutes = [
  {
    path: "/home",
    component: Home,
    name: "Dashboard",
    isShowInSidebar: true,
    showHeader: true,
    showSidebar: true,
  },
  {
    path: "/create-product",
    component: CreateProduct,
    name: "Create Product",
    isShowInSidebar: true,
    showHeader: true,
    showSidebar: true,
  },
  {
    path: "/products",
    component: UserList,
    name: "Product List",
    isShowInSidebar: true,
    showHeader: true,
    showSidebar: true,
  },
  {
    path: "/profile",
    component: UserProfile,
    showHeader: true,
    showSidebar: false,
  },
  // {
  //   path: "/",
  //   component: () => <Redirect to="/home" />, // put this route at very last, else it will not accept routse we write below.
  // },
];
