import React from "react";
import TextField from "@mui/material/TextField";

const CustomSearchField = (props) => {
  const { sx = {}, placeholder = "", ...rest } = props;
  return (
    <TextField
      defaultValue=""
      placeholder={placeholder}
      sx={{
        p: 0,
        border: "1px solid rgba(0, 150, 136, 0.2)",
        borderRadius: "5px",
        backgroundColor: "#FFF",
        "& *": {
          borderColor: "transparent",
        },
        "& input": {
          padding: "10px",
        },
        ...sx,
      }}
      {...rest}
    />
  );
};

export default CustomSearchField;
