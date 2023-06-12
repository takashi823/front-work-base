import { Height } from "@mui/icons-material";
import { Box, SxProps, Theme, Typography, Link } from "@mui/material";

export const Recipe = () => {
    return (
        <Box className="Recipe" sx={sx}>
            <Link className="Header-Link" href="#" variant="h4">レシピ一覧を表示</Link>
        </Box>
    );
};

const sx: SxProps<Theme> = {
    "&.Recipe": {
        textAlign: "center",
    },
    ".Header-Link": {
        color: "#000",
        textDecorationColor: "#000"
    }
};
