// MUIのコンポーネントをインポート、使用するものはここで定義
import { Box, SxProps, Theme } from "@mui/material";

// 使用するコンポートをインポート
import { Mainvisual } from "../modules/recipe/Mainvisual";
import { RecipeDiary } from "../modules/recipe/RecipeDiary";
import { PhotoLibrary } from "../modules/recipe/PhotoLibrary";
import { Footer } from "../modules/recipe/Footer";

// サンプルページのメインの実装
export const RecipePage = () => {
  return (
    <Box className="RecipePage" sx={sx}>
      <Mainvisual />
      <RecipeDiary />
      <PhotoLibrary />
      <Footer />
    </Box>
  );
};

// クラス名に対するスタイルを定義
const sx: SxProps<Theme> = {
  "&.RecipePage": {
    width: "100%",    
  }
};
