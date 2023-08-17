import React, { createContext, useContext, useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { RouteNames } from "../Helpers/AppConstant";
import Login from "../screens/Login";
import { About, Dashboard,Headers,NotFound,ProductDynamicRouting ,ProductRouting} from "../screens/components";






const   AppRoutes = () => {
   
    
  const isLogin = false
  return (
    <Router>
      <Headers />
      <Routes>
        {isLogin?

        (
        <>
        <Route path={RouteNames.pageNotFound} element={<NotFound />} />
        <Route path={RouteNames.dashboard} element={<Dashboard />} />
        <Route path={RouteNames.dynamicRoutingWithId} element={<ProductDynamicRouting />} />        
        <Route path={RouteNames.productrouting} element={<ProductRouting />} />        
        <Route path={RouteNames.about} element={<About />} />
        </> 
        ):
        <Route path={RouteNames.login} index element={<Login />} />
        }
                      
      </Routes>
    </Router>
  );
};

export default AppRoutes;







