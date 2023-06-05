import { Box, SxProps, Theme } from "@mui/material";
import bicycle from "../../resources/work1/images/bicycle1.jpg"

export const Mainvisual = () => {
  return (
    <Box className="Mainvisual" sx={sx}>
      <img src="{ bicycle }" alt="bicycle" />
    </Box>
  );
};

const sx: SxProps<Theme> = {
  "&.Mainvisual" : {
    width: "100%",
  },
};
