import { Box, SxProps, Theme, Typography } from "@mui/material";
import profileImg from "../../resources/work1/images/about.jpg";

export const About = () => {
  return (
    <Box className="About" sx={sx}>
      <Typography className="About-Title" variant="h3">About</Typography>
      <Box className="About-Content">
        <img className="About-Content-Image" src={ profileImg } alt="profile" />
        <Box className="About-Content-Profile">
          <Typography className="About-Content-Name">KAKERU MIYAICHI</Typography>
          <Box className="About-Content-Text">テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</Box>
        </Box>
      </Box>
    </Box>
  );
};

const sx: SxProps<Theme> = {
  "&.About" : {
    width: "60%",
    margin: "100px auto",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
  },
  ".About-Title" : {
    display: "inline-flex",
    fontWeight: "bold",
    margin:"0 auto 40px auto",
    borderBottom: "1px solid #000",

  },
  ".About-Content" : {
    display: "flex",
    justifyContent: "center",
  },
  ".About-Content-Image" : {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    border: "1px solid #000",
    marginRight: "30px",
  },
  ".About-Content-Profile" : {
    width: "500px",
  },
  ".About-Content-Name" : {
    marginBottom: "10px",
  },
  ".About-Content-Text" : {
  },
};
