import React, { useEffect, useState } from "react";
import data from "./data";
import { useParams } from "react-router-dom";

const FriendProfile = () => {
  const { id } = useParams({});

  const [friend, setFriend] = useState({});

  useEffect(() => {
    const fri = data.find((obj) => obj.id == id);
    if (fri) setFriend(fri);
  }, [id]);

  const { id: friendId, name, mobile, address, age, gender, avatar } = friend;
  return (
    <section>
      <img src={avatar} style={{ maxWidth: 400 }} />
      <h2>
        {friendId}-{name}
      </h2>
      <h2>Age- {age}</h2>
      <h2>Mobile:{mobile}</h2>
      <h2>City- {address?.city}</h2>
      <h2>Country-{address?.country}</h2>
      <h2>Gender- {gender}</h2>
    </section>
  );
};

export default FriendProfile;
