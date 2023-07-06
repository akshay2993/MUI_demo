import { Stack, Box, TextField, MenuItem } from "@mui/material";
import React, { Fragment, useState } from "react";

const MuiSelect = () => {
  const [country, setCountry] = useState("");
  const [fruits, setFruits] = useState<string[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCountry(e.target.value as string);
  };

  const handleFruitChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setFruits(typeof value === 'string' ? value.split(',') : value) 
  }

  console.log(country);
  console.log(fruits);

  return (
    <Stack spacing={2}>
      <Box width="250px">
        <TextField
          label="Select Country"
          select
          fullWidth
          value={country}
          onChange={handleChange}
        >
          <MenuItem value="IN">India</MenuItem>
          <MenuItem value="US">USA</MenuItem>
          <MenuItem value="AU">Australia</MenuItem>
        </TextField>
      </Box>

      <Box width="250px">
        <TextField
          label="Select Fruits"
          select
          fullWidth
          value={fruits}
          onChange={handleFruitChange}
          SelectProps={{
            multiple: true
          }}
        >
          <MenuItem value="apple">Apple</MenuItem>
          <MenuItem value="banana">Banana</MenuItem>
          <MenuItem value="dragon fruit">Dragon Fruit</MenuItem>
        </TextField>
      </Box>
    </Stack>
  );
};

export default MuiSelect;
