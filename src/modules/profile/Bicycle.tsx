import { Box, SxProps, Theme } from "@mui/material";

export const Bicycle = () => {
  return (
    <Box className="Bicycle" sx={sx}>
      バイサイクル
    </Box>
  );
};

const sx: SxProps<Theme> = {
  "&.Bicycle" : {
    width: "100%",
  },
};
