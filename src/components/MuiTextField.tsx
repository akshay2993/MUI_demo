import { useState } from "react";
import { Stack, TextField, InputAdornment } from "@mui/material";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

const MuiTextField = () => {
  const [value, setValue] = useState("");
  return (
    <Stack spacing={4}>
      <Stack spacing={2} direction="row">
        <TextField label="Name" variant="outlined" />
        <TextField label="Name" variant="filled" />
        <TextField label="Name" variant="standard" />
      </Stack>

      <Stack spacing={2} direction="row">
        <TextField label="Small Secondary" size="small" color="secondary" />
      </Stack>

      <Stack spacing={2} direction="row">
        {/* <TextField label="Name" required /> */}
        <TextField
          label="Password"
          type="password"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          error={!value}
          helperText= {value ? "Password is case sensitive" : "Required"}
        />
        <TextField label="Name" disabled />
        <TextField label="Read only" InputProps={{ readOnly: true }} />
      </Stack>

      <Stack spacing={2} direction="row">
        <TextField
          label="Price"
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
        ></TextField>

        <TextField
          label="Weight"
          InputProps={{
            endAdornment: <InputAdornment position="end">kg</InputAdornment>,
          }}
        ></TextField>

        <TextField
          label="Passsword"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <VisibilityOffIcon />
              </InputAdornment>
            ),
          }}
        ></TextField>
      </Stack>
    </Stack>
  );
};
export default MuiTextField;
