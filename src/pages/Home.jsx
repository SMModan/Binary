import Sidebar from "../components/Sidebar/Sidebar";
import React from "react";
import { Route, Switch, Redirect, useLocation, useHistory } from "react-router-dom";
// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from "perfect-scrollbar";

// core components
// import AdminNavbar from "../components/Navbars/AdminNavbar";

import logo from "../assets/img/react-logo.png";
import Dashboard from "../components/Dashboard";
import { routes } from "../routes/routeConstants";
import AdminNavbar from "../components/Navbars/AdminNavbar";
import { useSelector } from "react-redux";

var ps;

function Home(props) {
  const { push } = useHistory();
  const isLoggedin = useSelector((state) => state.userDataReducer.isLoggedin);
  const location = useLocation();
  const mainPanelRef = React.useRef(null);
  const [sidebarOpened, setsidebarOpened] = React.useState(
    document.documentElement.className.indexOf("nav-open") !== -1
  );
  React.useEffect(() => {
    if (!isLoggedin) {
      push("/login");
    }
  }, [isLoggedin]);
  React.useEffect(() => {
    if (navigator.platform.indexOf("Win") > -1) {
      document.documentElement.className += " perfect-scrollbar-on";
      document.documentElement.classList.remove("perfect-scrollbar-off");
      ps = new PerfectScrollbar(mainPanelRef.current, {
        suppressScrollX: true,
      });
      let tables = document.querySelectorAll(".table-responsive");
      for (let i = 0; i < tables.length; i++) {
        ps = new PerfectScrollbar(tables[i]);
      }
    }
    // Specify how to clean up after this effect:
    return function cleanup() {
      if (navigator.platform.indexOf("Win") > -1) {
        ps.destroy();
        document.documentElement.classList.add("perfect-scrollbar-off");
        document.documentElement.classList.remove("perfect-scrollbar-on");
      }
    };
  });
  React.useEffect(() => {
    if (navigator.platform.indexOf("Win") > -1) {
      let tables = document.querySelectorAll(".table-responsive");
      for (let i = 0; i < tables.length; i++) {
        ps = new PerfectScrollbar(tables[i]);
      }
    }
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    if (mainPanelRef.current) {
      mainPanelRef.current.scrollTop = 0;
    }
  }, [location]);
  // this function opens and closes the sidebar on small devices
  const toggleSidebar = () => {
    document.documentElement.classList.toggle("nav-open");
    setsidebarOpened(!sidebarOpened);
  };

  const getBrandText = (path) => {
    for (let i = 0; i < routes.length; i++) {
      if (location.pathname.indexOf(routes[i].layout + routes[i].path) !== -1) {
        return routes[i].name;
      }
    }
    return "Brand";
  };
  return (
    <div className="wrapper">
      <Sidebar
        routes={routes}
        logo={{
          outterLink: "#",
          text: "Binary",
          imgSrc: logo,
        }}
        toggleSidebar={toggleSidebar}
      />
      <div className="main-panel" ref={mainPanelRef}>
        <AdminNavbar
          brandText={getBrandText(location.pathname)}
          toggleSidebar={toggleSidebar}
          sidebarOpened={sidebarOpened}
        />
        <Dashboard />
      </div>
    </div>
  );
}

export default Home;
