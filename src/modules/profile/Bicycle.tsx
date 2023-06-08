import { Box, SxProps, Theme, Typography } from "@mui/material";
import bicycle1 from "../../resources/work1/images/bicycle1.jpg";

export const Bicycle = () => {
  return (
    <Box className="Bicycle" sx={sx}>
      <Box className="Bicycle-Title">Bicycle</Box>
      <Box className="Bicycle-Content">
        <Box className="Bicycle-Content-Item">
          <img className="Bicycle-Content-Item-Image" src={bicycle1} alt="自転車1" />
          <Typography className="Bicycle-Content-Item-Title">タイトルタイトル</Typography>
          <Box className="Bicycle-Content-Item-Text">テキストテキスト</Box>
        </Box>
        <Box className="Bicycle-Content-Item">
          <img className="Bicycle-Content-Item-Image" src={bicycle1} alt="自転車1" />
          <Typography className="Bicycle-Content-Item-Title">タイトルタイトル</Typography>
          <Box className="Bicycle-Content-Item-Text">テキストテキスト</Box>
        </Box>
        <Box className="Bicycle-Content-Item">
          <img className="Bicycle-Content-Item-Image" src={bicycle1} alt="自転車1" />
          <Typography className="Bicycle-Content-Item-Title">タイトルタイトル</Typography>
          <Box className="Bicycle-Content-Item-Text">テキストテキスト</Box>
        </Box>
      </Box>
    </Box>
  );
};

const sx: SxProps<Theme> = {
  "&.Bicycle" : {
    marginTop: "100px",
    display: "flex",
    flexDirection: "column",
    width: "100%",
  },
  ".Bicycle-Title" : {
    textAlign: "center",
  },
  ".Bicycle-Content":{
    display: "flex",
    justifyContent: "center",
    width: "100%",
  },
  ".Bicycle-Content-Item":{
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  ".Bicycle-Content-Item-Image":{
    width: "200px",
  },
  ".Bicycle-Content-Item-Title":{
    textAlign: "center",
    fontSize: "20px",
    fontWeight: "bold",
  },
  ".Bicycle-Content-Item-Text":{
    textAlign: "center",
  },
};
