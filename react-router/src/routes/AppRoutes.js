import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { RouteNames } from "../Helpers/AppConstant";
import Login from "../screens/Login";
import { Dashboard,NotFound } from "../screens/components";



const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path={RouteNames.login} index element={<Login />} />
        <Route path={RouteNames.pageNotFound} element={<NotFound />} />
        <Route path={RouteNames.dashboard} element={<Dashboard />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
