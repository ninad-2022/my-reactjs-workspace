import React from "react";
const Styling = () => {
  // creating a style here. create a object nd assign it to the jsx
  const h2Styling = {
    color: "#fff",
    backgroundColor: "blue",
    borderRadius: 60,
    textAlign: "center",
    padding: 10,
  };
  return (
    <>
      {/* assigning that style to h2  */}
      <h2 style={h2Styling}>Styling Component</h2>
    </>
  );
};
export default Styling;
