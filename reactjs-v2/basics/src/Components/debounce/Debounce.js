import React from "react";
const Debounce = () => {
  const myDebounce = (cb, d) => {
    let timer;
    return function (...args) {
      if (timer) clearInterval(timer);
      timer = setTimeout(() => {
        cb(...args);
      }, d);
    };
  };

  const handleChange = myDebounce((e) => {
    console.log(e.target.value);
  }, 1000);
  return (
    <>
      <h2>Debounce</h2>
      <input type="text" onChange={handleChange} />
    </>
  );
};

export default Debounce;
