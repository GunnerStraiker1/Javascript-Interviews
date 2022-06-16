import { TextField } from "@mui/material";
import React from "react";

export const SearchBar = () => {
  return (
    <>
      <TextField
        id="outlined-basic"
        label="Search"
        variant="outlined"
        style={{ width: "100%" }}
      />
    </>
  );
};
