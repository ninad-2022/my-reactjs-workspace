import React, { memo } from "react";
const FuncComp = ({ city, address }) => {
  console.log("FuncComp");
  return (
    <>
      <h2>Functional Comp - {address.city}</h2>
    </>
  );
};
// making a child as pure component by using memo()
// In deep cloning, it will not update on the true but will upadate on the false . *we use it for the deep comparision*
export default memo(FuncComp, (prevProps, nextProps) => {
  if (nextProps.address.city == prevProps.address.city) return true;
  else return false;
});
