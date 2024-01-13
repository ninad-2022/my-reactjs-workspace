import React from "react";
import ObjectList from "./ObjectList";
import UserList from "./TaskObjList";
const ListRendering = () => {
  const nums = [10, 20, 30, 40, 50, 60, 70, 80];
  return (
    <>
      <h2>List Rendering</h2>
      <ul>
        {nums.map((items, i) => (
          <li key={items + "-" + i}>{items}</li>
        ))}
      </ul>
      <ObjectList />
      <UserList />
    </>
  );
};
export default ListRendering;
