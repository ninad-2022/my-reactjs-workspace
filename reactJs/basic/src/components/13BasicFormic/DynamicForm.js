import React from "react";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { Formik, FieldArray } from "formik";

// dynamic for using FieldArray
const DynamicField = () => {
  return (
    <>
      <h2>Dynamic Field</h2>
      <Formik
        initialValues={{ name: "", mobiles: [""], email: "", password: "" }}
        onSubmit={(values) => {
          console.log("Users: ", values);
        }}
      >
        {({ values, handleBlur, handleChange, handleSubmit }) => {
          return (
            <form onSubmit={handleSubmit}>
              <Grid container spacing={3} maxWidth={"50%"} margin="auto">
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    fullWidth
                    label="Name"
                    name="name"
                    value={values?.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </Grid>
                {/* 1.1- you have to take FieldArray first and name it as per props above*/}
                <FieldArray
                  name="mobiles"
                  // 1.2- render props is an advanced concept
                  render={({ push, remove }) =>
                    // 1.3- using map for the list rendering
                    values.mobiles.map((mobile, i) => {
                      return (
                        //1.4- we are reutruning grid bcus we have to repeat it and return TextField from it
                        <Grid item xs={12} key={i}>
                          <TextField
                            variant="outlined"
                            fullWidth
                            label="Mobile"
                            //1.5- name should be unique, it will get to know that which TextField are chaning
                            name={`mobiles.${i}`}
                            value={mobile}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                          {/*1.6- button for addtion  */}
                          <Button variant="contained" onClick={() => push("")}>
                            ++
                          </Button>
                          {/*1.6- button for substraction  */}
                          <Button onClick={() => remove(i)}>X</Button>
                        </Grid>
                      );
                    })
                  }
                />
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    fullWidth
                    label="Email"
                    name="email"
                    type="email"
                    value={values?.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="contained"
                    fullWidth
                    type="password"
                    label="Password"
                    name="password"
                    value={values?.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button type="submit" variant="outlined">
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

export default DynamicField;
