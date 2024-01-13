import React from "react";

// import it
import { Formik } from "formik";
import Basic from "../11MaterialUI/Basic";
const BasicFormik = () => {
  return (
    <>
      <h1>Basic Formik</h1>
      {/*1.1- take <Formik> - create an object {} - then return a call back ()=> - wrtie <form> ex: <Formik> {() => <form> </form>} </Formik>  */}
      <Formik
        // 1.4- error: cannot read undefined props. So, have to initialize the state below. use initialValues={{}}
        initialValues={{
          name: "",
          mobile: "",
          email: "",
          password: "",
        }}
        // 1.6- define  the function here
        onSubmit={(values) => {
          //1.7- passing the function
          console.log("Users: ", values);
        }}
      >
        {/* 1.2- you dont need to use state, handleChange, etc. all are available in object (remeber destructuring it) */}
        {/* 1.5- error: onSubmit is not a function. here we are receiveing the function but we have to defined it */}
        {({ values, handleChange, handleSubmit }) => (
          // above we have taken (), no need to return but if you take {}, you have to write return
          //1.3- use it below
          <form onSubmit={handleSubmit}>
            <label>Name:</label>
            <input type="text" name="name" onChange={handleChange} />
            <br />
            <label>Mobile:</label>
            <input type="text" name="mobile" onChange={handleChange} />
            <br />
            <label>Email:</label>
            <input type="text" name="email" onChange={handleChange} />
            <br />
            <label>Password:</label>
            <input type="text" name="password" onChange={handleChange} />
            <br />
            <input type="submit" value="Register" />
          </form>
        )}
      </Formik>
    </>
  );
};

export default BasicFormik;
