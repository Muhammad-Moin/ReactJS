import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import { RouteNames } from "../../../Helpers/AppConstant";

const Dashboard = () => {
  const customStyles = {
    color: "red",
    fontWeight:'bold',
    textDecoration:'none'
  };

  return (
    <div>
      Dashboard
      <NavLink className={({ isActive }) => (isActive ? customStyles : null)}>
        
      <Link to={RouteNames.dashboardIncome}> Income </Link>
      </NavLink>
      <Outlet />
    </div>
  );
};

export default Dashboard;
