import { Box, SxProps, Theme } from "@mui/material";
import mainvisual from "../../resources/work2/images/mainvisual.jpg"

export const Header = () => {
    return (
        <Box className="Header" sx={sx}>
            <img className="Mainvisual-Image" src={mainvisual} alt="bicycle" />
        </Box>
    );
};

const sx: SxProps<Theme> = {
    "&.Header": {
    },
    ".Mainvisual-Image": {
        objectFit: "contain",
        width: "100%",
    },
};
