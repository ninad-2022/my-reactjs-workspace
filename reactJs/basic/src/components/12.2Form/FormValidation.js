import React, { useEffect, Component, useState } from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { addMethod } from "yup";

const FormValidation = () => {
  const [user, setUser] = useState({});

  // maintaining state for the validation. we have to add the only field in validation which is failed.
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User: ", user);
  };

  // const validate = () => {
  //   console.log("Validate...");
  //   //1.1- create props ubto user
  //   const { firstName, lastName, mobile, email, password } = user;

  //   //1.3- initially set, setErrors value 0.
  //   setErrors({});
  //   //1.2- conditions are given below
  //   if (firstName?.length < 3)
  //     return setErrors({
  //       firstName: "First Name must be atleast 3 characters",
  //     });
  //   if (lastName?.length < 3)
  //     return setErrors({ lastName: "last name must be atleast 3 characters" });
  //   if (mobile && !/^[0-9]{10,12}$/.test(mobile))
  //     return setErrors({ mobile: "Mobile must be of 10 digits" });
  // };

  const validate = () => {
    console.log("Validate...");

    //2.1- for diaplayin all the errors at a time
    let errs = {};
    const { firstName, lastName, mobile, email, password } = user;
    if (firstName?.length < 3)
      //2.2- upadte error in that object
      errs = {
        ...Button,
        firstName: "First Name must be at least 3 characters ",
      };
    if (lastName?.length < 3)
      errs = {
        ...Button,
        lastName: "Last Name must be at least 3 characters ",
      };
    if (mobile && !/^[0-9]{10,12}$/.test(mobile))
      errs = { ...errs, mobile: "Mobile must be 10 digit value" };
    //2.3- upadte all the state in the end
    setErrors(errs);
  };

  //1.4- calling the validate addMethod, call validate method
  useEffect(() => {
    validate();
  }, [user]);

  return (
    <>
      <h1>Form validate</h1>
      <Container sx={{ display: "flex", justifyContent: "center" }}>
        <Grid container justifyContent="center" maxWidth={500} spacing={2}>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              variant="outlined"
              label="First Name"
              name="firstName"
              onChange={handleChange}
              // 1.5- have to give this return to the return text & also provide hypertext
              // 3.1 error wants boolean value but we are passing string so make it boolean
              // error={errors?.firstName}
              // helperText={errors?.firstName}
              error={errors?.firstName ? true : false}
              helperText={errors?.firstName}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              variant="outlined"
              label="Last Name"
              name="lastName"
              onChange={handleChange}
              error={errors?.lastName ? true : false}
              helperText={errors?.lastName}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              variant="outlined"
              label="Mobile"
              value="+91"
              name="mobile"
              onChange={handleChange}
              error={errors?.mobile ? true : false}
              helperText={errors?.mobile}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              variant="outlined"
              label="Email"
              name="Email"
              type="email"
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              variant="outlined"
              label="Password"
              name="password"
              type="password"
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" onClick={handleSubmit}>
              Register
            </Button>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default FormValidation;
