import React, { useEffect, useState } from "react";
import axios from "axios";
const Demo = () => {
  const [data, setData] = useState("");
  const [user, setUser] = useState([]);

  const handleChange = (e) => {
    setData(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .get(`https://api.github.com/users/${data}/repos`)
      .then((res) => {
        setUser(res.data);
      })
      .catch((err) => {
        alert("Invalid Username");
      });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <dl>
          <dt>
            <label>Enter Github userName:</label>
          </dt>
          <dd>
            <input type={"text"} onChange={handleChange} />
          </dd>
          <dd>
            <input type={"submit"} value={"Submit"} />
          </dd>
        </dl>
      </form>
      <div>
        <table>
          <thead>
            <tr>
              <th>Repo Name</th>
              <th>Language</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(user) &&
              user.map((val, i) => {
                return (
                  <tr key={val.id}>
                    <td>{val.name}</td>
                    <td>{val.description}</td>
                    <td>{val.language}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Demo;
