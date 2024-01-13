// this is a child component. we have to access its state to its parent
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import React, { useState } from "react";

//2.2- here we are passing the {getUser} from the parent
const CreateUser = ({ getUser }) => {
  //1.1- maintaining a state for the form
  const [user, setUser] = useState({});

  // 1.3- maitaining a function for the handleChange
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  // 1.4- maitaining a function for the handleSubmit
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User: ", user);
    // 2.2- passing getUser here and pass user
    getUser(user);
  };

  return (
    <>
      {/* 1.5- assigning that function here  */}
      <form onSubmit={handleSubmit}>
        {/* 1.7- making a form  */}
        <Grid container spacing={2} sx={{ maxWidth: "50%", margin: "auto" }}>
          <Grid item xs={12}>
            {/* 1.2- creating a TextField  */}
            <TextField
              label="Name"
              name="name"
              variant="outlined"
              fullWidth
              //1.6- assigng that function here
              onChange={handleChange}
              value={user.name}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Mobile"
              name="mobile"
              variant="outlined"
              fullWidth
              onChange={handleChange}
              value={user.mobile}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Email"
              name="email"
              variant="outlined"
              fullWidth
              type="email"
              onChange={handleChange}
              value={user.email}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Password"
              name="password"
              variant="outlined"
              fullWidth
              type="password"
              onChange={handleChange}
              value={user.password}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="City"
              name="city"
              variant="outlined"
              fullWidth
              onChange={handleChange}
              value={user.city}
            />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained">
              Register
            </Button>
          </Grid>
        </Grid>
      </form>
    </>
  );
};
export default CreateUser;

// import TextField from "@mui/material/TextField";
// import Grid from "@mui/material/Grid";
// import Button from "@mui/material/Button";
// import React, { useState } from "react";
// const CreateUser = ({ getUser }) => {
//   const [user, setUser] = useState({});

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setUser({ ...user, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("User: ", user);
//     getUser(user);
//   };

//   return (
//     <>
//       <form onSubmit={handleSubmit}>
//         <Grid container spacing={2} sx={{ maxWidth: "50%", margin: "auto" }}>
//           <Grid item xs={12}>
//             <TextField
//               label="Name"
//               name="name"
//               variant="outlined"
//               fullWidth
//               onChange={handleChange}
//               value={user.name}
//             />
//           </Grid>
//           <Grid item xs={12}>
//             <TextField
//               label="Mobile"
//               name="mobile"
//               variant="outlined"
//               fullWidth
//               onChange={handleChange}
//               value={user.mobile}
//             />
//           </Grid>
//           <Grid item xs={12}>
//             <TextField
//               label="Email"
//               name="email"
//               variant="outlined"
//               fullWidth
//               type="email"
//               onChange={handleChange}
//               value={user.email}
//             />
//           </Grid>
//           <Grid item xs={12}>
//             <TextField
//               label="Password"
//               name="password"
//               variant="outlined"
//               fullWidth
//               type="password"
//               onChange={handleChange}
//               value={user.password}
//             />
//           </Grid>
//           <Grid item xs={12}>
//             <TextField
//               label="City"
//               name="city"
//               variant="outlined"
//               fullWidth
//               onChange={handleChange}
//               value={user.city}
//             />
//           </Grid>
//           <Grid item xs={12}>
//             <Button type="submit" variant="contained">
//               Register
//             </Button>
//           </Grid>
//         </Grid>
//       </form>
//     </>
//   );
// };

// export default CreateUser;
