import { Box, SxProps, Theme, Typography } from "@mui/material";
import profilImg from "../../resources/work1/images/about.jpg";

export const About = () => {
  return (
    <Box className="About" sx={sx}>
      <Box className="About-Title">About</Box>
      <Box className="About-Content">
        <img className="About-Content-Image" src={profilImg} alt="profile" />
        <Box className="About-Content-Profile">
          <Typography className="About-Content-Name">KAKERU MIYAICHI</Typography>
          <Box className="About-Content-Text">
            テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

const sx: SxProps<Theme> = {
  "&.About": {
    marginTop: "100px",
    width: "100%",
  },
  ".About-Title": {
    textAlign: "center",
  },
  ".About-Content": {
    display: "flex",
    justifyContent: "center",
  },
  ".About-Content-Image": {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    border: "1px solid #000",
  },
  ".About-Content-Profile": {
    width: "400px",
  },
  ".About-Content-Name": {},
  "About-Content-Text": {},
};
