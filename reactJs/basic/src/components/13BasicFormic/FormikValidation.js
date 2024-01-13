import React from "react";
import Grid from "@mui/material/Grid";
import { Formik } from "formik";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const FormikValidation = () => {
  return (
    <>
      <h2>Formik Validation</h2>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          mobile: "",
          email: "",
          password: "",
        }}
        validate={({ firstName, lastName, mobile, email, password }) => {
          let errors = {};
          if (firstName && firstName?.length < 3)
            errors = {
              ...errors,
              firstName: "First name must have atleast 3 character",
            };
          if (lastName && lastName?.length < 3)
            errors = {
              ...errors,
              lastName: "last name must have atleast 3 character",
            };
          if (!mobile) errors = { ...errors, mobile: "Mobile is requires" };
          else if (!/^[0-9]{10,10}$/.test(mobile))
            errors = {
              ...errors,
              mobile: "Mobile number must be 10 digits",
            };
          //1.1- here we are returning the state object to validate property and we have maintained it into state in object in previous example
          return errors;
        }}
        onSubmit={(values) => {
          console.log("Users: ", values);
        }}
      >
        {({
          values,
          // 2.1- taking touch
          touched,
          // 1.3- maintaing that error here
          errors,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => {
          return (
            <form onSubmit={handleSubmit}>
              <Grid
                container
                spacing={2}
                sx={{
                  width: "50%",
                  margin: "auto",
                }}
              >
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    variant="outlined"
                    onChange={handleChange}
                    name="firstName"
                    label="First Name"
                    values={values?.firstName}
                    //1.2- assigning condition here
                    //2.2- assigning touched condition here (show only on the touch)
                    error={touched?.firstName && errors?.firstName}
                    helperText={touched?.firstName && errors?.firstName}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    variant="outlined"
                    onChange={handleChange}
                    name="lastName"
                    label="Last Name"
                    values={values?.lastName}
                    error={touched?.lastName && errors?.lastName}
                    helperText={touched?.lastName && errors?.lastName}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    variant="outlined"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name="mobile"
                    label="Mobile"
                    values={values?.mobile}
                    error={touched?.mobile && errors?.mobile}
                    helperText={touched?.mobile && errors?.mobile}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    variant="outlined"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name="email"
                    type="email"
                    label="Email"
                    values={values?.email}
                    error={errors?.email}
                    helperText={errors?.email}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    variant="outlined"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name="passowrd"
                    type="password"
                    label="Password"
                    values={values?.password}
                    error={errors?.password}
                    helperText={errors?.password}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button type="submit" variant="contained">
                    Register
                  </Button>
                </Grid>
              </Grid>
            </form>
          );
        }}
      </Formik>
    </>
  );
};
export default FormikValidation;
