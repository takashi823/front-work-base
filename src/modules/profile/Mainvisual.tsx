import { Box, SxProps, Theme } from "@mui/material";
import bicycle from "../../resources/work1/images/bicycle1.jpg";

export const Mainvisual = () => {
  return (
    <Box className="Mainvisual" sx={sx}>
      <img className="Mainvisual-Image" src={bicycle} alt="bicycle" />
    </Box>
  );
};

const sx: SxProps<Theme> = {
  "&.Mainvisual" : {
    width: "100%",
  },
  ".Mainvisual-Image" : {
    objectFit: "cover",
    height: "600px",  
    maxWidth: "1920px",
    width: "100%",
  }
};
