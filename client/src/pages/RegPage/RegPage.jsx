import React from "react";
import { useState } from "react";
import { Button, Stack, Typography } from "@mui/material";
import Header from "../../components/Header/Header";
import { Link } from "react-router-dom";
import InputForm from "../../components/InputForm/InputForm";

const RegPage = () => {
  const [inpData, setInpData] = useState({
    name: "",
    surname: "",
    email: "",
    pwd: "",
  });

  function doData(e) {
    const { id, value } = e.target;

    setInpData({ ...inpData, [id]: value });
  }

  async function show() {
    const res = await fetch("http://localhost:3001/api/register", {
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
        Registration
      </Typography>

      <Stack direction="column" alignItems="center">
        <InputForm
          data={[
            { id: "name", label: "Name*", type: "text" },
            { id: "surname", label: "Surname*", type: "text" },
            { id: "email", label: "Email*", type: "text" },
            { id: "pwd", label: "Password*", type: "password" },
          ]}
          setValue={doData}
        />

        <Button variant="outlined" size="large" sx={{ mt: 2 }} onClick={show}>
          Sign Up
        </Button>

        <Typography sx={{ mt: 1 }}>
          Already have account?
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
