import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";

export function Auth() {
  let location = useLocation();
  let token = sessionStorage.getItem("token");

  if (!token) {
    return <Navigate to="/login" state={{ from: location }} />;
  } else {
    return <Outlet />;
  }
}
