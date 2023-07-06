import { Box, Divider, Stack } from "@mui/material";

const MuiLayout = () => {
  return (
    <Stack
      sx={{ border: "1px solid" }}
      direction="row"
      spacing={2}
      divider={<Divider orientation="vertical" flexItem />}
    >
      <Box
        sx={{
          backgroundColor: "primary.main",
          color: "white",
          height: "150px",
          width: "150px",
          padding: "20px",
          "&:hover": {
            background: "primary.light",
          },
        }}
      >
        Mui Box
      </Box>
      <Box
        display="flex"
        width="200px"
        height="200px"
        bgcolor="success.light"
        p={2}
      >
        Another Mui Box
      </Box>
    </Stack>
  );
};
export default MuiLayout;
