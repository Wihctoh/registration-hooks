import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Button, Stack, Toolbar, Typography } from "@mui/material";

const Header = () => {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography sx={{ flexGrow: 1 }} variant="h6" textAlign="left">
            Welcome to the SignUp/SignIn pages
          </Typography>

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
