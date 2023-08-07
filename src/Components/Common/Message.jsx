import { useTheme } from "@emotion/react";
import { Box, Typography } from "@mui/material";
import React from "react";
import { tokens } from "../../theme";

export default function Message({ text, human }) {
  const theme = useTheme();
  const colors = tokens(theme.pallete.mode);

  const messageStyle = human
    ? {
        backgroundColor: colors.secondary[400],
        borderRadius: "0px 20px",
        alignSelf: "flex-end",
        borderColor: colors.secondary[400],
        borderWidth: "10px",
        color: colors.primary[400],
      }
    : {
        borderRadius: "20px 0px",
        color: colors.secondary[400],
        borderStyle: "solid",
        borderWidth: "5px",
        borderColor: colors.secondary[400],
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
      <Typography variant="subtitle1" fontWeight={"bold"}>
        {text}
      </Typography>
    </Box>
  );
}
