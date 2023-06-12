import { Box, SxProps, Theme, Typography, } from "@mui/material";

export const Text = () => {
    return (
        <Box className="Text" sx={sx}>
            <Typography className="Text-Title" variant="h4" fontWeight="fontWeightBold">Recipe Diary</Typography>
            <Box className="Text-Text">
                <p>日々の料理レシピをまとめています。</p>
                <p>和食や洋食、中華、お菓子までいろいろな料理レシピをアップしていますので、</p>
                <p>みなさんの献立にお役立てくださいね！</p>
            </Box>
        </Box>
    );
};

const sx: SxProps<Theme> = {
    "&.Text": {
        margin: "50px 0"
    },
    ".Text-Title": {
        textAlign: "center",
    },
    ".Text-Text": {
        margin: "30px 0",
        textAlign: "center",
        lineHeight: "5px"
    },
};
