import React from "react";
import ParentComp from "./ParentComp";
// const CompLifeCycle = () => {
//   return (
//     <>
//       <h2>CompLifeCycle</h2>
//       <ParentComp />
//     </>
//   );
// };
// export default CompLifeCycle;

class CompLifeCycle extends React.Component {
  render() {
    return (
      <div>
        <h2>CompLifeCycle</h2>
        <ParentComp />
      </div>
    );
  }
}

export default CompLifeCycle;

// CompLifeCycle
//     There are three phases in the component life cycle
//     - Mounting
//     - updating
//     - unmounting
