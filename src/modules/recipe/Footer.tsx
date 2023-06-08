import { Box, SxProps, Theme, Link } from "@mui/material";

export const Footer = () => {
  return (
    <Box className="Footer" sx={sx}>
      <Box className="Footer-LinkList">
        <Link className="Footer-LinkList-Link" href="#" color="#000">Instagram</Link>
        <Link className="Footer-LinkList-Link" href="#" color="#000">Twitter</Link>
        <Link className="Footer-LinkList-Link" href="#" color="#000">Facebook</Link>
      </Box>
      <Box className="Footer-Copyright">© 2021 Recipe Diary</Box>
    </Box>
  );
};

const sx: SxProps<Theme> = {
  "&.Footer" : {
    width: "100%",
    textAlign: "center",
    margin: "100px auto 20px",
  },
  ".Footer-LinkList":{
    width: "100%",
    display: "flex",
    justifyContent: "center",
  },
  ".Footer-LinkList-Link":{
    margin: "0 20px",
  },
  ".Footer-Copyright":{
    marginTop: "20px",
  }
};
