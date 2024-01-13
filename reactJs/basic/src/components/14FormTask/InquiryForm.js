import React from "react";
import Grid from "@mui/material/Grid";
import { Formik } from "formik";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { maxWidth } from "@mui/system";
const InquieryForm = () => {
  return (
    <>
      <h1>Shoe inquiry Form</h1>
      <Formik
        // for initializing state value s
        initialValues={{
          firstName: "",
          lastName: "",
          requirement: "",
          brandName: "",
          priceRange: "",
        }}
        // for validation
        validate={({
          firstName,
          lastName,
          requirement,
          brandName,
          priceRange,
        }) => {
          let errors = {};
          if (firstName && firstName?.length < 2)
            errors = {
              ...errors,
              firstName: "must have atleast 2 character",
            };
          if (lastName && lastName?.length < 2)
            errors = {
              ...errors,
              lastName: "must have atleast 2 character",
            };
          if (requirement && requirement?.length < 2)
            errors = {
              ...errors,
              requirement: "must have atleast 2 character",
            };
          if (brandName && brandName?.length < 2)
            errors = {
              ...errors,
              brandName: "must have atleast 2 character",
            };
          return errors;
        }}
        // for onSubmit in console value
        onSubmit={(values) => {
          console.log("User:- ", values);
        }}
      >
        {/* functions  */}
        {({ errors, touched, values, handleChange, handleSubmit }) => {
          return (
            <form onSubmit={handleSubmit}>
              <Grid container spacing={2} maxWidth={"45%"} margin="auto">
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    variant="outlined"
                    onChange={handleChange}
                    label="First Name"
                    name="firstName"
                    values={values?.firstName}
                    error={touched?.firstName && errors?.firstName}
                    helperText={touched?.firstName && errors?.firstName}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    variant="outlined"
                    onChange={handleChange}
                    label="Last Name"
                    name="lastName"
                    value={values?.lastName}
                    error={touched?.lastName && errors?.lastName}
                    helperText={touched?.lastName && errors?.lastName}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    variant="outlined"
                    onChange={handleChange}
                    label="Requirement"
                    name="requirement"
                    values={values.requirement}
                    error={touched?.requirement && errors?.requirement}
                    helperText={touched?.requirement && errors?.requirement}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    variant="outlined"
                    onChange={handleChange}
                    label="Brand Name"
                    name="brandName"
                    value={values.brandName}
                    error={touched?.brandName && errors?.brandName}
                    helperText={touched?.brandName && errors?.brandName}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    variant="outlined"
                    onChange={handleChange}
                    label="Price Range"
                    name="priceRange"
                    values={values.priceRange}
                    error={touched?.priceRange && errors?.priceRange}
                    helperText={touched?.priceRange && errors?.priceRange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button fullWidth type="submit" variant="outlined">
                    Quick inquiry
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

export default InquieryForm;
