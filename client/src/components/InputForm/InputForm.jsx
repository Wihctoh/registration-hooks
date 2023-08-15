import React from "react";
import { TextField } from "@mui/material";

const InputForm = ({ data, setValue }) => {
  return (
    <>
      {data.map((el, index) => (
        <TextField
          key={index}
          label={el.label}
          variant="outlined"
          margin="normal"
          type={el.type}
          sx={{ width: 400 }}
          onChange={setValue}
        />
      ))}
    </>
  );
};

export default InputForm;
