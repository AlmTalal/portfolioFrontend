import { Avatar, Box, Typography } from "@mui/material";

export default function ChatHeader() {
  return (
    <Box width={"100%"} height={"auto"} display={"flex"} alignItems={"center"}>
      <Avatar
        alt="Bolt"
        src="./src/assets/bolt.jpg"
        sx={{ width: 56, height: 56 }}
      />
      <Typography
        marginLeft={"8px"}
        variant="h6"
        fontWeight={"bold"}
        fontFamily={"sans-serif"}
      >
        Mr. Bolt
      </Typography>
    </Box>
  );
}
