import React, { useState } from "react";
import Button from "@mui/material/Button";
import DataTable from "./MuiTable";

const MilkTask = () => {
  const [count, setCount] = useState(0);
  const counter = () => {
    setCount(count + 1);
  };
  const decrese = () => {
    setCount(count - 1);
  };
  const Onchange = (e) => {
    const a = e.target.value;
  };
  const [state, setState] = useState(false);

  const deliver = () => {
    setState(true);
  };
  const undeliver = () => {
    setState(false);
  };

  return (
    <>
      <h1>Milk Task</h1>
      <table>
        <tr>
          <th>ID</th>
          <th>Address</th>
          <th>Milk type</th>
          <th>Quantity</th>
          <th>Status</th>
          <th>Button</th>
        </tr>
        <tr>
          <td>1</td>
          <td>SCOE, Library</td>
          <td>
            <label htmlFor="milk">milk:</label>
            <select name="milk" id="milk">
              <option value="cow">Cow</option>
              <option value="buffelow">Buffelow</option>
            </select>
          </td>
          <td>
            <input onChange={Onchange} value={count} />
            <button onClick={counter}>++</button>
            <button onClick={decrese}>--</button>
          </td>
          <td>
            <p>{state ? "deliver" : "not deliver"}</p>
          </td>
          <td>
            <Button onClick={deliver}>YES</Button>
            <Button onClick={undeliver}>No</Button>
          </td>
        </tr>
      </table>
      {/* <DataTable /> */}
    </>
  );
};
export default MilkTask;
