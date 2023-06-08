import { Box, SxProps, Theme, Typography } from "@mui/material";

export const RecipeDiary = () => {
  return (
    <Box className="RecipeDiary" sx={sx}>
      <Typography variant="h3" className="RecipeDiary-Title">Recipe Diary</Typography>
      <Box className="RecipeDiary-Main">
        日々の料理レシピをまとめています。
        <br />
        和食や洋食、中華、お菓子までいろいろな料理レシピをアップしていますので、
        <br />
        みなさんの献立にお役立てくださいね！
        <br />
      </Box>
    </Box>
  );
};

const sx: SxProps<Theme> = {
  "&.RecipeDiary": {
    marginTop:"50px",
    width: "100%",
    textAlign: "center",
  },
  ".RecipeDiary-Title":{
    fontWeight: "bold",
  },
  ".RecipeDiary-Main":{
    marginTop:"20px",
  }
};
