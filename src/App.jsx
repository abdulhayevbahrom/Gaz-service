import React from "react";
import Admin from "./router/Admin";
import Login from "./router/login/Login";
import { Outlet, Route, Routes } from "react-router-dom";
import { Auth } from "./router/login/Auth";

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route element={<Auth />}>
          <Route element={<Outlet />}>
            <Route path="/*" element={<Admin />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
};
