import React from "react";
import { useState } from "react";

const LoginPage = () => {
  const [inpEmailValue, setInpEmailValue] = useState("");
  const [inpPwdValue, setInpPwdValue] = useState("");

  return (
    <div>
      <h1>Login</h1>

      <input
        type="text"
        placeholder="Email"
        onChange={(e) => setInpEmailValue(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setInpPwdValue(e.target.value)}
      />

      <button onClick={() => console.log(inpEmailValue, inpPwdValue)}>
        click me
      </button>
    </div>
  );
};

export default LoginPage;
