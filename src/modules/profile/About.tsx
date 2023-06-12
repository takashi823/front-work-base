import { Box, SxProps, Theme, Typography } from "@mui/material";
import profilImg from "../../resources/work1/images/about.jpg";

export const About = () => {
  return (
    <Box className="About" sx={sx}>
      <Typography className="About-Title" variant="h3">About</Typography>
      <Box className="About-Content">
        <img className="About-Content-Image" src={profilImg} alt="profile" />
        <Box className="About-Content-Profile">
          <Typography className="About-Content-Name" variant="h6">KAKERU MIYAICHI</Typography>
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
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
  },
  ".About-Title": {
    display: "inline-flex",
    fontWeight: "bold",
    margin:"0 auto",
    borderBottom: "1px solid #000",
  },
  ".About-Content": {
    marginTop: "50px",
    display: "flex",
    flexDirection: {
      md:"row",
      xs:"column",
    },
    justifyContent: "center",
  },
  ".About-Content-Image": {
    marginRight: "30px",
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    border: "1px solid #000",
  },
  ".About-Content-Profile": {
    width: "400px",
  },
  ".About-Content-Name": {

  },
  ".About-Content-Text": {
    marginTop: "12px",
  },
};
