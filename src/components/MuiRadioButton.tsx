import {
  Box,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Stack,
} from "@mui/material";

import { useState } from "react";

const MuiRadioButton = () => {
  const [years, setYears] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setYears(e.target.value);
  };

  console.log(years);
  return (
    <Stack>
      <Box>
        <FormControl>
          <FormLabel id="job-experience-group-label">
            Years of Experience
          </FormLabel>
          <RadioGroup
            name="job-experience-group"
            aria-labelledby="job-experience-group-label"
            //   row
            value={years}
            onChange={handleChange}
          >
            <FormControlLabel
              control={<Radio size="small" />}
              label="0-2"
              value="0-2"
            />
            <FormControlLabel control={<Radio />} label="2-5" value="2-5" />
            <FormControlLabel
              control={<Radio size="large" />}
              label="6-10"
              value="6-10"
            />
          </RadioGroup>
        </FormControl>
      </Box>

    </Stack>
  );
};
export default MuiRadioButton;
