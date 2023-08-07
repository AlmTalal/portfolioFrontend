import Grid from "@mui/material/Unstable_Grid2";
import React, { useContext, useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import { ColorModeContext, tokens } from "../theme";
import { useTheme } from "@emotion/react";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailIcon from "@mui/icons-material/Mail";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkBox from "../Components/Common/LinkBox";
import PersonalSummary from "../Components/PersonalSummary";
import AppBox from "../Components/Common/AppBox";
import AiChatBox from "./aiChatBox";

export default function HomePage() {
  const theme = useTheme();
  const colors = tokens(theme.pallete.mode);
  const colorMode = useContext(ColorModeContext);
  //The AI Button logic
  const [showAI, setShowAi] = useState(false);

  const handleAiClick = () => {
    setShowAi(true);
  };

  return (
    <>
      <Grid
        container
        sx={{
          paddingX: { xs: "10px", md: "20px" },
          paddingY: { xs: "30px", md: "40px" },
          filter: showAI === true ? "blur(8px)" : null,
        }}
        padding={2}
        position={"relative"}
        onClick={() => (showAI === true ? setShowAi(false) : null)}
      >
        {/**
         * My personal Summary
         */}
        <Grid xs={12}>
          <PersonalSummary />
        </Grid>
        {/**
         * The Dark-Light Mode btn
         */}
        <Grid xs={6} md={4}>
          <Box
            backgroundColor={colors.red[400]}
            height={"200px"}
            margin={"3px"}
            onClick={colorMode.toggleColorMode}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            borderRadius={"10px"}
            sx={{ cursor: "pointer" }}
          >
            {theme.pallete.mode === "dark" ? (
              <LightModeIcon
                style={{ color: "#FFF", width: "80%", height: "80%" }}
              />
            ) : (
              <DarkModeIcon
                style={{ color: "#FFF", width: "80%", height: "80%" }}
              />
            )}
          </Box>
        </Grid>
        {/**
         * The AI Button Box
         */}
        <Grid xs={6} md={4}>
          <AppBox
            style={{ cursor: "pointer" }}
            handleClick={() => handleAiClick()}
          >
            <Typography padding={"5px"} variant="h3" fontWeight={"bold"}>
              Talk with Mr Bolt
            </Typography>
            <Typography padding={"5px"} variant="h5" fontWeight={"bold"}>
              He knows everything about me
            </Typography>
          </AppBox>
        </Grid>
        {/**
         * The AI Button Box
         */}
        <Grid xs={6} md={4}>
          <LinkBox link={"https://github.com/AlmTalal"}>
            <GitHubIcon
              style={{ color: "#FFF", width: "80%", height: "80%" }}
            />
          </LinkBox>
        </Grid>
        <Grid xs={6} md={4}>
          <LinkBox link={"https://www.linkedin.com/in/talal-alam-4b5808236/"}>
            <LinkedInIcon
              style={{ color: "#FFF", width: "80%", height: "80%" }}
            />
          </LinkBox>
        </Grid>
        <Grid xs={6} md={4}>
          <LinkBox link={"mailto:youremail@example.com?subject=Subject line"}>
            <MailIcon style={{ color: "#FFF", width: "80%", height: "80%" }} />
            <Typography variant="h6">alamtalal004@gmail.com</Typography>
          </LinkBox>
        </Grid>
        <Grid xs={6} md={4}>
          <AppBox>
            <Typography padding={"5px"} variant="h5">
              Age
            </Typography>
            <Typography padding={"5px"} variant="h2" fontWeight={"bold"}>
              20
            </Typography>
            <Typography padding={"5px"} variant="h4" fontWeight={"bold"}>
              Years Old
            </Typography>
          </AppBox>
        </Grid>
      </Grid>
      {showAI === true ? (
        <Grid xs={12}>
          <AiChatBox style={"HOLA"} />
        </Grid>
      ) : null}
    </>
  );
}
