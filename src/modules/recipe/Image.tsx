import { Box, SxProps, Theme, Link } from "@mui/material";
import recipe1 from "../../resources/work2/images/recipe1.jpg"
import recipe2 from "../../resources/work2/images/recipe2.jpg"
import recipe3 from "../../resources/work2/images/recipe3.jpg"


export const Image = () => {
    return (
        <Box className="Image" sx={sx}>
            <img className="recipe-Image" src={recipe1} alt="bicycle" />
            <img className="recipe-Image" src={recipe2} alt="bicycle" />
            <img className="recipe-Image" src={recipe3} alt="bicycle" />
        </Box>
    );
};

const sx: SxProps<Theme> = {
    "&.Image": {
        display: "flex",
        margin: "100px 0"
    },
    ".recipe-Image": {
        width: "33.33%",
    }
};
