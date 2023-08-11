import React from "react";
import { Button, Stack, Typography, TextField } from "@mui/material";
import Header from "../../components/Header/Header";
import { Link } from "react-router-dom";

const RegPage = () => {
  return (
    <>
      <Header />

      <Typography variant="h3" textAlign="center">
        Registration
      </Typography>

      <Stack direction="column" alignItems="center">
        <TextField
          id="outlined-basic"
          label="Email"
          variant="outlined"
          margin="normal"
          sx={{ width: 400 }}
        />
        <TextField
          id="outlined-basic"
          label="Password"
          variant="outlined"
          margin="normal"
          sx={{ width: 400 }}
        />
        <TextField
          id="outlined-basic"
          label="Confirm Password"
          variant="outlined"
          margin="normal"
          sx={{ width: 400 }}
        />

        <Button variant="outlined" size="large">
          Sign Up
        </Button>

        <Typography>
          Already have account?{" "}
          {
            <Link to={"/login"}>
              <Button>Login</Button>
            </Link>
          }
        </Typography>
      </Stack>
    </>
  );
};

export default RegPage;
