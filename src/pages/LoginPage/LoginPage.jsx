import React from "react";
import { Link } from "react-router-dom";
import { Button, Stack, Typography, TextField } from "@mui/material";
import Header from "../../components/Header/Header";
import { useState } from "react";

const LoginPage = () => {
  const [emailValue, setEmailValue] = useState();
  const [pwdValue, setPwdValue] = useState();

  function checkUser() {
    try {
      if (!/^\w+@\w+\.[a-z]{2,}$/gm.test(emailValue))
        throw new Error("incorrect email!");
      if (pwdValue.length < 8) throw new Error("incorrect password!");

      console.log("successful login!");
    } catch (error) {
      console.log(error.message);
    }
  }
  return (
    <>
      <Header />

      <Typography variant="h3" textAlign="center">
        Login
      </Typography>

      <Stack direction="column" alignItems="center">
        <TextField
          id="email"
          label="Email"
          variant="outlined"
          margin="normal"
          sx={{ width: 400 }}
          onChange={(e) => setEmailValue(e.target.value)}
        />
        <TextField
          id="pwd"
          label="Password"
          variant="outlined"
          margin="normal"
          type="password"
          sx={{ width: 400 }}
          onChange={(e) => setPwdValue(e.target.value)}
        />

        <Button variant="outlined" size="large" onClick={checkUser}>
          Sign In
        </Button>

        <Typography>
          No have account?{" "}
          {
            <Link to={"/registration"}>
              <Button>Sign up</Button>
            </Link>
          }
        </Typography>
      </Stack>
    </>
  );
};

export default LoginPage;
