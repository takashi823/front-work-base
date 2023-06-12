// MUIのコンポーネントをインポート、使用するものはここで定義
import { Box, SxProps, Theme } from "@mui/material";

// 使用するコンポートをインポート
import { Header } from "../modules/recipe/Header";
import { Text } from "../modules/recipe/Text";
import { Image } from "../modules/recipe/Image";
import { Url } from "../modules/recipe/Url";
import { Footer } from "../modules/recipe/Footer";
import { Recipe } from "../modules/recipe/Recipe";

// サンプルページのメインの実装
export const RecipePage = () => {
    return (
        <Box className="RecipePage" sx={sx}>
            <Header />
            <Text />
            <Image />
            <Recipe />
            <Url />
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
