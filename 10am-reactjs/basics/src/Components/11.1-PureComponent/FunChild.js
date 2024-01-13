import React, { memo } from "react";
const FunChild = ({ city, address }) => {
  console.log("FunChild");
  return (
    <>
      <h3>
        Function child - {city}, state {address?.state} - {address?.city}
      </h3>
    </>
  );
};
export default memo(FunChild, (prevProps, nextProps) => {
  if (prevProps.address.city == nextProps.address.city) return true;
  return false;
});
