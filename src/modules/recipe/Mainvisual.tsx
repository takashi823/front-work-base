import { Box, SxProps, Theme } from "@mui/material";
import mainImage from "../../resources/work2/images/mainvisual.jpg"; 

export const Mainvisual = () => {
  return (
    <Box className="Mainvisual" sx={sx}>
      <img className="Mainvisual-Image" src={mainImage} alt="メイン画像"></img>
    </Box>
  );
};

const sx: SxProps<Theme> = {
  "&.Mainvisual" : {
    width: "100%",
  },
  ".Mainvisual-Image":{
    width: "100%",
  }
};
