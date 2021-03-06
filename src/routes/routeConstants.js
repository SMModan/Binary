import UserList from "../pages/UserList";
import ForgotPassword from "../pages/ForgotPassword";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import VerifyOTP from "../pages/VerifyOTP";
import ResetPassword from "../pages/ResetPassword";
import StripeStatus from "../pages/StripeStatus";
import UserProfile from "../pages/UserProfile";
import CompleteProfilePage from "../pages/CompleteProfilePage";
import Plan from "../pages/Plan";
import ProductList from "../pages/ProductList";
import Coupon from "../pages/Coupon";
import Subscriptions from "../pages/Subscriptions";

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
  {
    path: "/reset-password",
    component: ResetPassword,
  },
  {
    path: "/reset-password",
    component: ResetPassword,
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
    path: "/plan",
    component: Plan,
    name: "Plan",
    isShowInSidebar: true,
    showHeader: true,
    showSidebar: true,
  },
  {
    path: "/products",
    component: ProductList,
    name: "Product List",
    isShowInSidebar: true,
    showHeader: true,
    showSidebar: true,
  },
  {
    path: "/coupon",
    component: Coupon,
    name: "Coupon",
    isShowInSidebar: true,
    showHeader: true,
    showSidebar: true,
  },
  {
    path: "/subscription",
    component: Subscriptions,
    name: "Subscriptions",
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
  {
    path: "/complete-profile",
    component: CompleteProfilePage,
    showHeader: true,
    showSidebar: false,
  },
  {
    path: "/stripe-status",
    component: StripeStatus,
    isShowInSidebar: false,
    showHeader: true,
    showSidebar: false,
  },
  // {
  //   path: "/",
  //   component: () => <Redirect to="/home" />, // put this route at very last, else it will not accept routse we write below.
  // },
];
