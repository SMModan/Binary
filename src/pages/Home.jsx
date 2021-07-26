import React from "react";
import {
  useHistory,
} from "react-router-dom";
// javascript plugin used to create scrollbars on windows

// core components
// import AdminNavbar from "../components/Navbars/AdminNavbar";

import Dashboard from "../components/Dashboard";
import { useSelector } from "react-redux";
import SidebarAdminLayout from "../components/SidebarAdminLayout";
import '../assets/css/black-dashboard-react.css'


function Home() {
  const { push } = useHistory();
  const isLoggedin = useSelector((state) => state.userDataReducer.isLoggedin);

  React.useEffect(() => {
    if (!isLoggedin) {
      push("/login");
    }
  }, [isLoggedin]);

  return (
    <SidebarAdminLayout>
      <Dashboard />
    </SidebarAdminLayout>
  );
}

export default Home;
