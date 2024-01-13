import React from "react";
import Accordion from "./Accordion";
const BootstrapDemo = () => {
  return (
    <>
      <h2>BootstrapDemo</h2>
      <button className="btn btn-primary">Click Me</button>
      <section className="container">
        <div className="row justify-content-center">
          <div className="col-6">
            <Accordion/>
          </div>
        </div>
      </section>
    </>
  );
};
export default BootstrapDemo;
