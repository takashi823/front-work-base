import { Box, SxProps, Theme, Link, Typography, } from "@mui/material";

export const Header = () => {
  return (
    <Box className="Header" sx={sx}>
      <Typography className="Header-logo" fontWeight="fontWeightBold" variant="h6">Profile</Typography>
      <Box className="Header-Linkgroup">
        <Link className="Header-Link" href="#">About</Link>
        <Link className="Header-Link" href="#">Bicycle</Link>
      </Box>
    </Box>
  );
};

const sx: SxProps<Theme> = {
  "&.Header": {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "8px 0px",
  },
  ".Header-logo": {
    color: "#fff",
    backgroundColor: "#000",
    padding: "10px",
    margin: "0 300px",
    width: "70px",
    height: "20px",
  },
  ".Header-Linkgroup": {
    color: "#000",
    margin: "0 300px",

  },
  ".Header-Link": {
    color: "#000",
    margin: "0 10px",
    textDecorationColor: "#000"
  },
};
