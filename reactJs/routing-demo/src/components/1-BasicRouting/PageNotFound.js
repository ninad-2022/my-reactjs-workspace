import React from "react";
import { Link } from "react-router-dom";
const PageNotFound = () => {
  return (
    <>
      <h2>Page Not Found Component</h2>

      {/* here we are linking the page not found into BasicRouting */}
      <p>
        Go to <Link to="/">Home</Link>
      </p>
    </>
  );
};

export default PageNotFound;
