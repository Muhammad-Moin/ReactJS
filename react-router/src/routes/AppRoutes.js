import React, { createContext, useContext, useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { RouteNames } from "../Helpers/AppConstant";
import Login from "../screens/Login";
import {
  About,
  Dashboard,  
  Layout,
  NotFound,
  ProductDynamicRouting,
  ProductRouting,
} from "../screens/components";

const AppRoutes = () => {
  const isLogin = true;
  return (
    <Router>
     
      <Routes>
        {isLogin ? (
          <>
            <Route element={<Layout />}>
              <Route
                path={RouteNames.dynamicRoutingWithId}
                element={<ProductDynamicRouting />}
              />
              <Route path={RouteNames.dashboard} element={<Dashboard />} />
              <Route path={RouteNames.pageNotFound} element={<NotFound />} />
              <Route
                path={RouteNames.productrouting}
                element={<ProductRouting />}
              />
              <Route path={RouteNames.about} element={<About />} />
            </Route>
          </>
        ) : (
          <Route path={RouteNames.login} index element={<Login />} />
        )}
      </Routes>
    </Router>
  );
};

export default AppRoutes;
