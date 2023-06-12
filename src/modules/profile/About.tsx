import { Box, SxProps, Theme, Typography } from "@mui/material";
import profileImg from "../../resources/work1/images/about.jpg"

export const About = () => {
  return (
    <Box className="About" sx={sx}>
      <Typography className="About-Title" variant="h4" fontWeight="fontWeightBold">About</Typography>
      <Box className="About-Content">
        <img className="About-Content-Image" src={profileImg} alt="profile" />
        <Box className="About-Content-Profile">
          <Typography className="About-Content-Name" variant="h6">KAKERU MIYAICHI</Typography>
          <Box className="About-Content-Text">テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</Box>
        </Box>
      </Box>
    </Box>
  );
};

const sx: SxProps<Theme> = {
  "&.About": {
    width: "100%",
  },
  ".About-Title": {
    textAlign: "center",
    display: "column",
    textDecoration: "underline",
  },
  ".About-Content": {
    display: "flex",
    flexDirection: {
      md: "row",
      xs: "column",
    },
    justifyContent: "center",
    margin: "50px 30%",
  },
  ".About-Content-Image": {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    border: "1px solid #000",
    margin: "0 5%",
  },
  ".About-Content-Profile": {
  },
  ".About-Content-Name": {},
  ".About-Content-Text": {
    width: "100%",
  },
};
