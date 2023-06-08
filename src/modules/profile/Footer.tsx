import { Box, SxProps, Theme } from "@mui/material";

export const Footer = () => {
  return (
    <Box className="Footer" sx={sx}>
      © 2020 Profile
    </Box>
  );
};

const sx: SxProps<Theme> = {
  "&.Footer" : {
    width: "100%",
    margin: "100px auto 10px",
    textAlign: "center",
  },
};
