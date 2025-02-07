import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Components/Basic-routing/About/About";

const App = () => {
  const ProtectedRoute = ({ children }) => {
    return sessionStorage.getItem("login") == 1 ? (
      children
    ) : (
      <Navigate to="/login" />
    );
  };
  return (
    <>
      <About />
      {/* <BasicRouting /> */}
      {/* <RouteParameters /> */}
      {/* <LazyLoading /> */}
      <Routes>
        <Route path="/*" element={<BlankLayout />} />
        <Route
          path="secured/*"
          element={
            <ProtectedRoute>
              <FullLayout />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
};

export default App;
