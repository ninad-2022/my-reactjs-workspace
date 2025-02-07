import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink as RLink } from "react-router-dom";
import { styled } from "@mui/material";

const NavLink = styled(RLink)({
  color: "#fff",
  textDecoration: "none",
  marginLeft: 6,
  textTransform: "uppercase",
});

const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Topper Skills
          </Typography>

          <NavLink
            to=""
            style={({ isActive }) => ({
              color: isActive ? "#aaa" : "#fff",
            })}
          >
            Home
          </NavLink>
          <NavLink
            to="login"
            style={({ isActive }) => ({
              color: isActive ? "#aaa" : "#fff",
            })}
          >
            Login
          </NavLink>
          <NavLink
            to="register"
            style={({ isActive }) => ({
              color: isActive ? "#aaa" : "#fff",
            })}
          >
            Register
          </NavLink>
          <NavLink
            to="contact"
            style={({ isActive }) => ({
              color: isActive ? "#aaa" : "#fff",
            })}
          >
            Contact
          </NavLink>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
