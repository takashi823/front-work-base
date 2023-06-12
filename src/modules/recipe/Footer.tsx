import { Box, SxProps, Theme, Link } from "@mui/material";

export const Footer = () => {
    return (
        <Box className="Footer" sx={sx}>
            © 2020 Profileaa
        </Box>
    );
};

const sx: SxProps<Theme> = {
    "&.Footer": {
        width: "100%",
        textAlign: "center",
    },
};
