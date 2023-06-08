import { Box, SxProps, Theme, Link } from "@mui/material";

export const Header = () => {
  return (
    <Box className="Header" sx={sx}>
      <Box className="Header-logo">Profile</Box>
      <Box className="Header-LinkGroup">
        <Link className="Header-Link" href="#">About</Link>
        <Link className="Header-Link" href="#">Bicycle</Link>
      </Box>
    </Box>
  );
};

const sx: SxProps<Theme> = {
  "&.Header" : {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "10px 20px",
  },
  ".Header-logo":{
    color: "#fff",
    backgroundColor: "#000",
    padding: "10px",
  },
  ".Header-LinkGroup":{
    color : "#000",
  },
  ".Header-Link":{
    color : "#000",
    margin: "0 10px",
  }
};
