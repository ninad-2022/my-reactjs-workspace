import React, { useState } from "react";
const BasicForm = () => {
  //1.1- maintaining a state
  // in the end all values will be stored into the state
  const [user, setUser] = useState({});

  //1.2- accessing the DOM node by using event handler, passing event object is essentail for it therefore we are using (e)
  const handleChange = (e) => {
    // 1.4- accessing name DOM node
    // const name = e.target.name
    // const value = e.target.value
    // we done object destrucitng here
    const { name, value } = e.target;

    //1.3- copying the all properties of the state using spread operator
    //1.5- for avoiding the variable conflict er are writing name inside []
    // setUser({ ...user, name: e.target.value });
    //1.6- write only value there  by 1.4
    setUser({ ...user, [name]: value });
  };

  // for avoiding submit behavior
  const handleSubmit = (e) => {
    // it is use to prevent default behavior of the Element
    e.preventDefault();
    console.log("User: ", user);
  };
  return (
    <>
      <h1>Basic Form</h1>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        {/*1.4- adding name for accesign node dynamically  */}
        <input type="text" name="name" onChange={handleChange} />
        <br />
        <label>Mobile</label>
        <input type="tel" name="mobile" onChange={handleChange} />
        <br />
        <label>Email</label>
        <input type="email" name="email" onChange={handleChange} />
        <br />
        <label>Password</label>
        <input type="password" name="password" onChange={handleChange} />
        <br />
        <label>Gender</label>
        <input
          id="male"
          type="radio"
          name="gender"
          value="male"
          onChange={handleChange}
        />
        <label>Male</label>
        <input
          id="female"
          type="radio"
          name="gender"
          value="female"
          onChange={handleChange}
        />
        <label htmlFor="female">Female</label>
        <br />
        <label>DOB</label>
        <input type="date" name="dob" onChange={handleChange} />
        <label>Status</label>
        <select name="status" onChange={handleChange}>
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
        </select>
        <br />
        <input
          id="agree"
          type="checkbox"
          name="agree"
          onChange={(e) => setUser({ ...user, agree: !user.agree })}
        />
        <label htmlFor="agree">I agree the terms and conditions</label>
        <br />
        <input type="submit" value="Register" />
      </form>
    </>
  );
};
export default BasicForm;
