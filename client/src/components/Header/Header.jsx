import React from "react";
import { Link } from "react-router-dom";
import style from "./Header.module.css";
import { AppBar, Button, Stack, Toolbar, Typography } from "@mui/material";

const Header = () => {
  return (
    <div>
      <AppBar position="static">
        <Toolbar className={style.wrapper}>
          <Link to={"/"}>
            <Typography variant="h5" textAlign="left">
              Material-UI
            </Typography>
          </Link>

          <Stack spacing={2} direction="row">
            <Link to={"/registration"}>
              <Button color="inherit">Sign Up</Button>
            </Link>
            <Link to={"/login"}>
              <Button color="inherit">Sign In</Button>
            </Link>
          </Stack>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
