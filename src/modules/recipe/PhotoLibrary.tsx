import { Box, SxProps, Theme, Link } from "@mui/material";
import recipe1 from "../../resources/work2/images/recipe1.jpg";
import recipe2 from "../../resources/work2/images/recipe2.jpg";
import recipe3 from "../../resources/work2/images/recipe3.jpg";

export const PhotoLibrary = () => {
  const itemList = [
    { src: recipe1, alt: "recipe1" },
    { src: recipe2, alt: "recipe2" },
    { src: recipe3, alt: "recipe3" },
  ];
  return (
    <Box className="PhotoLibrary" sx={sx}>
      <Box className="PhotoLibrary-ImageList">
        {itemList.map((item) => (
          <img className="PhotoLibrary-ImageList-Image" src={item.src} alt={item.alt} />
        ))}
      </Box>
      <Box className="PhotoLibrary-Link">レシピ一覧を見る</Box>
    </Box>
  );
};

const sx: SxProps<Theme> = {
  "&.PhotoLibrary": {
    width: "100%",
  },
  ".PhotoLibrary-ImageList": {
    display: "flex",
    marginTop: "50px",
    width: "100%",
  },
  ".PhotoLibrary-ImageList-Image": {
    objectFit: "contain",
    width: "33%",
    border: "1px solid #000",
  },
  ".PhotoLibrary-Link": {
    width: "150px",
    padding: "10px 30px",
    textAlign: "center",
    margin: "50px auto",
    border: "1px solid #000",
  },
};
