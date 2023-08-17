import React from "react";
import { Link } from "react-router-dom";
import { RouteNames } from "../../../Helpers/AppConstant";

const Headers = () => {
  const isLogin = true;
  return (
    <div>
      {isLogin ? (
        <div style={{ display: 'flex', gap: 12 }}>
          <Link to={RouteNames.dashboard} style={{ textDecoration: 'none' }}>
            Dashboard
          </Link>
          <Link to={RouteNames.productrouting} style={{ textDecoration: 'none' }}>
            Products
          </Link>
          <Link to={RouteNames.about} style={{ textDecoration: 'none' }}>
            About
          </Link>
        </div>
      ) : (
        <Link to={RouteNames.login} style={{ textDecoration: 'none' }}>
          Login
        </Link>
      )}
    </div>
  );
};


export default Headers;
