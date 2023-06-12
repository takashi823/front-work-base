import { Box, SxProps, Theme, Link } from "@mui/material";

export const Url = () => {
    return (
        <Box className="Url" sx={sx}>
            <Link className="Link" href="#">Instagram</Link>
            <Link className="Link" href="#">Twitter</Link>
            <Link className="Link" href="#">Facebook</Link>
        </Box>
    );
};

const sx: SxProps<Theme> = {
    "&.Url": {
        textAlign: "center",
        margin: "50px 0"
    },
    ".Link": {
        color: "#000",
        padding: "10px",
        textDecorationColor: "#000"
    }
};
