import React, { useMemo, useState, useCallback } from "react";

const Memo = () => {
  const [myNum, setMyNum] = useState(0);
  const [show, setShow] = useState(true);

  const getValue = () => {
    return setMyNum(myNum + 1);
  };

  const countNumber = (num) => {
    console.log("countNumber is giving num", num);
    for (let i = 0; i <= 1000000000; i++) {}
    return num;
  };

  const checkData = countNumber(myNum);

  // const checkData = useMemo(() => {
  //   return countNumber(myNum);
  // }, [myNum]);

  return (
    <>
      <h2>useMemo hook</h2>
      {/* {myNum} */}
      <button onClick={getValue} style={{ backgroundColor: "red" }}>
        Counter
      </button>

      <p>My new number: {checkData}</p>

      <button onClick={() => setShow(!show)}>
        {show ? "Clicked me" : "Clicked me again"}
      </button>
    </>
  );
};

export default Memo;
