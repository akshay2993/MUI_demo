import { Box, FormControlLabel, Checkbox, FormControl, FormLabel, FormGroup } from "@mui/material";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import { useState } from "react";

const MuiCheckbox = () => {
  const [acceptTnc, setAcceptTnc] = useState(false);
  const [skills, setSkills] = useState<String[]>([])

  const handlechange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAcceptTnc(e.target.checked);
  };

  const handleSkillChange = (e: React.ChangeEvent<HTMLInputElement>) => {
     const index = skills.indexOf(e.target.value)
     if(index === -1){
      setSkills([...skills, e.target.value])
     }else{
      setSkills(skills.filter(skill => skill !== e.target.value))
     }
  }
  console.log({acceptTnc,skills});
  return (
    <Box>
      <Box>
        <FormControlLabel
          label="I accept terms and conditions"
          control={<Checkbox onChange={handlechange} checked={acceptTnc} />}
        />
      </Box>

      <Box>
        <Checkbox
          icon={<BookmarkBorderIcon />}
          checkedIcon={<BookmarkIcon />}
          value={acceptTnc}
          onChange={handlechange}
        />
      </Box>

      <FormControl>
        <FormLabel>Skills</FormLabel>
        <FormGroup row>
          <FormControlLabel
            label="HTML"
            value="HTML"
            control={<Checkbox onChange={handleSkillChange} />}
          />
          <FormControlLabel
            label="CSS"
            value="CSS"
            control={<Checkbox onChange={handleSkillChange} />}
          />
          <FormControlLabel
            label="JavaScript"
            value="JavaScript"
            control={<Checkbox onChange={handleSkillChange} />}
          />
        </FormGroup>
      </FormControl>
    </Box>
  );
};
export default MuiCheckbox;
