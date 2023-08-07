import { Avatar, Box, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { tokens } from "../theme";
import { useTheme } from "@emotion/react";

export default function ChatHeader({ hideChatBox }) {
  const theme = useTheme();
  const colors = tokens(theme.pallete.mode);

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
      <Box onClick={hideChatBox} sx={{ cursor: "pointer" }}>
        <CloseIcon
          sx={{ width: 40, height: 40, color: colors.secondary[400] }}
        />
      </Box>
    </Box>
  );
}
