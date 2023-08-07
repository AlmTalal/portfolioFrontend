import { Box } from "@mui/material";
import React, { useContext } from "react";
import { ColorModeContext, tokens } from "../../theme";
import { useTheme } from "@emotion/react";
useContext;

export default function LinkBox({ link, children }) {
  const theme = useTheme();
  const colors = tokens(theme.pallete.mode);
  const colorMode = useContext(ColorModeContext);

  const handleClick = () => {
    window.open(`${link}`, "_blank");
  };

  return (
    <Box
      backgroundColor={colors.red[400]}
      height={"200px"}
      margin={"3px"}
      textAlign={"center"}
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      sx={{ cursor: "pointer" }}
      borderRadius={"10px"}
      onClick={handleClick}
    >
      {children}
    </Box>
  );
}
