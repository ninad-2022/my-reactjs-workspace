import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Friend from "./Friend";
import freindsData from "./friends.json";
const FriendList = () => {
  const { category } = useParams();
  const [frds, setFrds] = useState([]);

  useEffect(() => {
    const fd = freindsData[category];
    if (fd) setFrds(fd);
  }, [category]);

  return (
    <div style={{ display: "flex" }}>
      {Array.isArray(frds) &&
        frds.map((frd, i) => <Friend key={frd.id} {...frd} />)}
    </div>
  );
};

export default FriendList;
