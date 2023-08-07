import { Avatar, Box, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { tokens } from "../theme";
import { useTheme } from "@emotion/react";
import { useNavigate } from "react-router-dom";

export default function ChatHeader() {
  const theme = useTheme();
  const colors = tokens(theme.pallete.mode);
  const navigate = useNavigate();

  const handleNavigate = (link) => {
    navigate(link);
  };

  return (
    <Box
      width={"100%"}
      height={"auto"}
      display={"flex"}
      justifyContent={"space-between"}
      alignItems={"center"}
    >
      <Box display={"flex"} flexDirection={"row"} alignItems={"center"}>
        <Avatar
          alt="Bolt"
          src="./src/assets/bolt.jpg"
          sx={{ width: 56, height: 56 }}
        />
        <Typography
          marginLeft={"8px"}
          variant="h4"
          fontWeight={"bold"}
          fontFamily={"sans-serif"}
        >
          Mr. Bolt
        </Typography>
      </Box>
      <Box onClick={() => handleNavigate("/")} sx={{ cursor: "pointer" }}>
        <CloseIcon
          sx={{ width: 40, height: 40, color: colors.secondary[400] }}
        />
      </Box>
    </Box>
  );
}
