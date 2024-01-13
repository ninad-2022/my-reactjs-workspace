import React, { useState } from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Condition from "yup/lib/Condition";
const MaterialForm = () => {
  const [user, setUser] = useState({
    // if i index increase "", it will increase the mobile in form
    firstName: "", //5.1- check in console after removing this it will give controlled error (check 5.2)
    mobiles: [""],
  });

  //6.1- for clearing
  const resetForm = (e) => {
    setUser({
      firstName: "",
      lastName: "",
      mobiles: [""],
      email: "",
    });
  };

  //2.1- for taking a add button
  const addMobile = () => {
    // adding a Condition for maximum field of the mobile
    if (user.mobiles.length == 5);
    return alert("only 5 mobile numbers are allowed");
    //2.2- it will add empty mobile in the array (use k andar k mobile ko apko copy karna hai) add "" for
    //2.3- if you write "" as like 2.4, it will give wrong value so dont use ""
    //2.4- const mobiles = [...user.mobiles, ""];
    const mobiles = [...user.mobiles];
    setUser({ ...user, mobiles: mobiles });
  };

  //4.2- function for deleting X
  const deleteMobile = (index) => {
    //4.3- taking the array
    const mobiles = [...user.mobiles, ""];
    //4.4- spilce() for deleting the value on the index
    mobiles.splice(index, 1);
    setUser({ ...user, mobiles: mobiles });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  //1.4- create a handle mobile change function for it
  const handleMobileChange = (e) => {
    const { name, value } = e.target;
    const mobiles = [...user.mobiles];
    //1.7- here you will get all mobiles. taking name as index. we are changing the value of the perticular index
    mobiles[name] = value;
    setUser({ ...user, mobiles: mobiles });
  };

  const handleSubmit = (e) => {
    console.log("User: ", user);
  };
  return (
    <>
      <h2>Material Form</h2>
      <Container sx={{ display: "flex", justifyContent: "center" }}>
        <Grid container justifyContent="center" maxWidth={500} spacing={2}>
          <Grid item xs={12} md={6}>
            {/* need TextField while using material form  */}
            <TextField
              fullWidth
              variant="outlined"
              label="First Name"
              name="firstName"
              value={user.firstName} //5.2-accing value by accessing DOM node
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              variant="outlined"
              label="Last Name"
              name="lastName"
              onChange={handleChange}
            />
          </Grid>

          {/*1.1- making this grid in the list rendering */}
          {user.mobiles &&
            user.mobiles.map((mob, i) => (
              //always give key props during the list rendering
              <Grid item xs={12} key={i}>
                <Box display="flex">
                  <TextField
                    variant="outlined"
                    label="Mobile"
                    //1.6- we are using index as a name for indentifying
                    name={i.toString()}
                    //1.3- dynamically assigning the {mob} to the value
                    value={mob}
                    //1.5- assigning that function to onChange
                    onChange={handleMobileChange}
                    style={{ flexGrow: 1 }}
                  />
                  {/* 3.1- giving condition to the button, where to appear */}
                  {i == user.mobiles.length - 1 && user.mobiles.length < 5 && (
                    //2.3- here we are adding {addMobile} function
                    <Button variant="contained" onClick={addMobile}>
                      +
                    </Button>
                  )}
                  {/* 4.1- giving condition to the cancel button  */}
                  {i != 0 && (
                    <Button
                      variant="contained"
                      color="error"
                      onClick={() => deleteMobile(i)}
                    >
                      X
                    </Button>
                  )}
                </Box>
              </Grid>
            ))}
          <Grid item xs={12}>
            <TextField
              fullWidth
              variant="outlined"
              label="Email"
              type="email"
              name="email"
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" onClick={handleSubmit}>
              Register
            </Button>
          </Grid>

          <Grid item xs={12}>
            <Button variant="contained" onClick={resetForm}>
              Reset
            </Button>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default MaterialForm;
