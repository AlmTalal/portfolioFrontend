import { Box } from "@mui/material";
import React from "react";
import { tokens } from "../../theme";
import { useTheme } from "@emotion/react";

export default function AppBox({ handleClick, children, style }) {
  const theme = useTheme();
  const colors = tokens(theme.pallete.mode);

  return (
    <Box
      backgroundColor={colors.red[400]}
      height={"200px"}
      margin={"3px"}
      textAlign={"center"}
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      borderRadius={"10px"}
      sx={style}
      onClick={handleClick}
    >
      {children}
    </Box>
  );
}
