// MUIのコンポーネントをインポート、使用するものはここで定義
import { Box, SxProps, Theme } from "@mui/material";

// 使用するコンポートをインポート
import { Header } from "../modules/profile/Header";
import { Mainvisual } from "../modules/profile/Mainvisual";
import { MainContent } from "../modules/profile/MainContent";
import { Footer } from "../modules/profile/Footer";
import { About } from "../modules/profile/About";
import { Bicycle } from "../modules/profile/Bicycle";

// サンプルページのメインの実装
export const ProfilePage = () => {
  return (
    <Box className="ProfilePage" sx={sx}>
      <Header />
      <Mainvisual />
      <About />
      <Bicycle />
      <MainContent />
      <Footer />
    </Box>
  );
};

// クラス名に対するスタイルを定義
const sx: SxProps<Theme> = {
  "&.ProfilePage": {
    width: "100%",    
  }
};