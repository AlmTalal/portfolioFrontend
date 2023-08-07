import { Box } from "@mui/material";
import React from "react";
import { tokens } from "../../theme";
import { useTheme } from "@emotion/react";

export default function LinkBox({ link, children }) {
  const theme = useTheme();
  const colors = tokens(theme.pallete.mode);

  const handleClick = () => {
    window.open(`${link}`, "_blank");
  };

  return (
    <Box
      backgroundColor={colors.primary[400]}
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
