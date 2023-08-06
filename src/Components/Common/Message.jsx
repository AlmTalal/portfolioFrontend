import { Box, Typography } from "@mui/material";
import React from "react";

export default function Message({ text, human }) {
  const messageStyle = human
    ? {
        backgroundColor: "red",
        borderRadius: "0px 20px",
        alignSelf: "flex-end",
        borderColor: "red",
        borderWidth: "10px",
        color: "white",
      }
    : {
        borderRadius: "20px 0px",
        color: "black",
        borderStyle: "solid",
        borderWidth: "5px",
        borderColor: "red",
      };

  return (
    <Box
      style={messageStyle}
      width="fit-content"
      maxWidth={"70%"}
      margin={"10px"}
      padding={"12px"}
      height="fit-content"
    >
      <Typography variant="subtitle1">{text}</Typography>
    </Box>
  );
}
