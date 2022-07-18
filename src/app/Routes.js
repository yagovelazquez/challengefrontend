import { Routes as RoutesReact, Route, Navigate } from "react-router-dom";
import React from "react";
import { useLocation } from "react-router-dom";
import Login from "../components/pages/account/Login";
import useUser from "./../hooks/useUser";
import Home from "../components/pages/home/Home";
import TimeClock from "../components/pages/timeClock/TimeClock";
import Settings from "../components/pages/settings/Settings";
import Employees from "../components/pages/employees/Employees";
import Reports from "../components/pages/reports/Reports";
import Finances from "../components/pages/finances/Finances";

function Routes() {
  const location = useLocation();
  const { user } = useUser();

  return (
    <>
      <RoutesReact key={location.pathname} location={location}>
        {user && (
          <>
            <Route path="/time-clock" element={<TimeClock />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/employees" element={<Employees />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/" element={<Navigate to="/time-clock" replace />} />
            <Route path="/finances" element={<Finances />} />
          </>
        )}

        {!user && (
          <>
            {" "}
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<Navigate to="/login" replace />} />
          </>
        )}
           <Route path="*" element={<Navigate to="/time-clock" replace />} />
      </RoutesReact>
    </>
  );
}

export default Routes;
