import React from "react";

// 5.3- taking <Navigate/> for redirecting
import { Routes, Route, Navigate } from "react-router-dom";
import BlankLayout from "./layouts/BlankLayout";
import SecureLayout from "./layouts/SecureLayout";

// 5.2- for taking content between opening and the closing tag use {children}
const ProtectedRoute = ({ children }) => {
  //5.1- taking isLoggedIn from session storage
  const isLoggedIn = sessionStorage.getItem("isLoggedIn");

  // 5.4- pass path to the <Navigate to="path"/>
  return isLoggedIn ? children : <Navigate to="/login" />;
};
const RouteSecurity2 = () => {
  return (
    <>
      {/*2.1- routing layouts in file- take header in blankLayout */}
      <Routes>
        <Route
          path="/secured/*"
          element={
            //5.5- take SecureRoute inside the ProtectedRoute
            <ProtectedRoute>
              <SecureLayout />
            </ProtectedRoute>
          }
        />
        <Route path="/*" element={<BlankLayout />} />
      </Routes>
    </>
  );
};

export default RouteSecurity2;
