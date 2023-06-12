import { Box, SxProps, Theme, Typography, } from "@mui/material";
import bicycleImg1 from "../../resources/work1/images/bicycle1.jpg"
import bicycleImg2 from "../../resources/work1/images/bicycle2.jpg"
import bicycleImg3 from "../../resources/work1/images/bicycle3.jpg"

export const Bicycle = () => {
  const itemList = [
    { id: 1, text: "テキストテキスト", title: "タイトルタイトル", image: bicycleImg1 },
    { id: 2, text: "テキストテキスト", title: "タイトルタイトル", image: bicycleImg2 },
    { id: 3, text: "テキストテキスト", title: "タイトルタイトル", image: bicycleImg3 },
  ]
  return (
    <Box className="Bicycle" sx={sx}>
      <Typography className="Bicycle-Title" variant="h4" fontWeight="fontWeightBold">Bycycle</Typography>
      <Box className="Bicycle-Content">

        <Box className="Bicycle-Object">

          {itemList.map((item) => (
            <Box className="Object" key={item.id}>
              <img className="Bicycle-Img" src={item.image} alt="bicycle1" />
              <Typography className="Bicycle-Tit" variant="h6">{item.title}</Typography>
              <Box className="Bicycle-Txt">{item.text}</Box>
            </Box>
          ))}

        </Box>
      </Box>
    </Box>
  );
};

const sx: SxProps<Theme> = {
  "&.Bicycle": {
    width: "100%",
  },
  ".Bicycle-Title": {
    textAlign: "center",
    textDecoration: "underline",
  },
  ".Bicycle-Content": {
    display: "flex",
    margin: "50px 200px",
  },
  ".Bicycle-Object": {
    textAlign: "center",
    width: "50%",
    display: "flex",
    margin: "0px 30px",
  },
  ".Object": {
    margin: "0px 10px",
  },
  ".Bicycle-Img": {
    width: "300px",
  },
  ".Bicycle-Tit": {
  },
  ".Bicycle-Txt": {
  },
};
