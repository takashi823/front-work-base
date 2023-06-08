import { Box, SxProps, Theme, Link } from "@mui/material";

export const Header = () => {
  return (
    <Box className="Header" sx={sx}>
        <Box className="Header-Section-Logo">Profile</Box>
        <Box>
          <Link className="Header-Section-Link" href="#" color="#000" underline="none">
            About
          </Link>
          <Link className="Header-Section-Link" href="#" color="#000" underline="none">
            Bicycle
          </Link>
      </Box>
    </Box>
  );
};

const sx: SxProps<Theme> = {
  "&.Header": {
    width: "60%",
    margin: "0 auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  ".Header-Section-Logo": {
    color: "#fff",
    fontSize: "26px",
    fontWeight: "bold",
    backgroundColor: "#000",
    padding: "4px 20px",
    margin: "10px 0",
  },
  ".Header-Section-Link": {
    margin: "0 16px",
    "&:hover":{
      opacity: 0.5,
    },
  },
};
