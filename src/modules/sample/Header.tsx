import { Box, SxProps, Theme } from "@mui/material";

export const Header = () => {
  return (
    <Box className="Header" sx={sx}>
      ヘッダーサンプル
    </Box>
  );
};

const sx: SxProps<Theme> = {
  "&.Header" : {
    width: "100%",
    backgroundColor: "000aaa",
  },
  ".Header-Title" : {

  },
};
