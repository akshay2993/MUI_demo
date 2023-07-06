import { useState } from "react";
import { Box, FormControlLabel, Switch } from "@mui/material";

const MuiSwitch = () => {
  const [dark, setDark] = useState(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDark(e.target.checked)
  }

  console.log({dark})
  return (
    <Box>
      <FormControlLabel label="Dark Mode" control={<Switch checked={dark} onChange={handleChange}/>} />
    </Box>
  );
};
export default MuiSwitch;
