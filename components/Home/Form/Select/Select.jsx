import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function SelectVariants({ data, title, onChange, value }) {
  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        background: "#fff",
      },
    },
  };

  // Custom style for the Select component
  const selectStyle = {
    backgroundColor: "white", // Replace with your desired background color

    "&:focus": {
      backgroundColor: "white", // Replace with your desired focus background color
    },
    "& .MuiFilledInput-input": {
      backgroundColor: "lightblue", // Replace with your desired background color
    },
  };
  return (
    <>
      <FormControl variant="filled" sx={{ width: "100%" }}>
        <InputLabel id="demo-simple-select-filled-label">{title}</InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={value}
          onChange={onChange}
          MenuProps={MenuProps}
          style={selectStyle}
        >
          {data?.map((el, i) => (
            <MenuItem key={i} value={el?.value}>
              {el?.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  );
}
