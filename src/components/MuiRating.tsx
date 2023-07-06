import { Rating, Stack } from "@mui/material";
import { useState } from "react";

const MuiRating = () => {
  const [rating, setRating] = useState<number | null>(null);
  const handleChange = (
    e: React.ChangeEvent<{}>,
    newValue: number | null
  ) => {
    setRating(newValue)
  }
  console.log(rating)
  return (
    <Stack>
      <Rating value={rating} onChange={handleChange} />
    </Stack>
  );
};
export default MuiRating;
