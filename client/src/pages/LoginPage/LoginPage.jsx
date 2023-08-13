import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Button, Typography, TextField } from "@mui/material";
import Header from "../../components/Header/Header";
import style from "./LoginPage.module.css";

const LoginPage = () => {
  const [inpData, setInpData] = useState({ email: "", pwd: "" });

  function doData(e) {
    const { id, value } = e.target;

    setInpData({ ...inpData, [id]: value });
  }

  async function show() {
    const res = await fetch("http://localhost:3001/api/authorize", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(inpData),
    });

    const json = await res.json();

    console.log(json);
  }

  return (
    <>
      <Header />

      <Typography variant="h3" textAlign="center" sx={{ mt: 3 }}>
        Login
      </Typography>

      <div className={style.loginForm}>
        <TextField
          id="email"
          label="Email"
          variant="outlined"
          margin="normal"
          sx={{ width: 400 }}
          onChange={doData}
        />
        <TextField
          id="pwd"
          label="Password"
          variant="outlined"
          margin="normal"
          type="password"
          sx={{ width: 400 }}
          onChange={doData}
        />

        <Button variant="outlined" size="large" sx={{ mt: 2 }} onClick={show}>
          Sign In
        </Button>

        <Typography sx={{ mt: 1 }}>
          No have account?
          {
            <Link to={"/registration"}>
              <Button>Sign up</Button>
            </Link>
          }
        </Typography>
      </div>
    </>
  );
};

export default LoginPage;
