import { Box, Typography } from "@mui/material";
import React from "react";
import { tokens } from "../theme";
import { useTheme } from "@emotion/react";

export default function PersonalSummary() {
  const theme = useTheme();
  const colors = tokens(theme.pallete.mode);

  return (
    <Box
      height={"400px"}
      margin={"3px"}
      borderRadius={"10px"}
      backgroundColor={colors.red[400]}
      padding={1}
      overflow={"auto"}
      sx={{ "&::-webkit-scrollbar": { display: "none" } }}
    >
      <Typography variant="h2" component="h1" fontWeight={"bold"}>
        Hi, My name is Talal Alam.
      </Typography>
      <Typography variant="h5" mt={"10px"}>
        Greetings! I am Talal, a passionate 20-year-old Software Engineer with a
        burning ambition to excel in the field. My ultimate goal is to become
        the best version of myself as a software engineer by working diligently
        and constantly learning from experienced seniors and colleagues.
      </Typography>
      <Typography variant="h5" mt={"10px"}>
        Multilingual and highly adaptable, I am fluent in Spanish (my native
        language), English, and Arabic. This linguistic versatility allows me to
        communicate effectively and collaborate in diverse teams.
      </Typography>
      <Typography variant="h5" mt={"10px"}>
        Professionally, my expertise lies in the MERN Stack, and I have
        successfully developed smart contracts on the Ethereum network. My
        enthusiasm for web3 technologies is unwavering, and I am eager to
        explore and learn all there is to know about it.
      </Typography>
    </Box>
  );
}
