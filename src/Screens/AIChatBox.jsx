import { Box, Divider, Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import MsgTextBox from "../Components/Common/ChatTextBox";
import Chatbox from "../Components/Chatbox";
import ChatHeader from "../Components/ChatHeader";
import { ChatService, socket } from "../Services/apiSocket";
import { useTheme } from "@emotion/react";
import { tokens } from "../theme";

export default function AiChatBox() {
  const theme = useTheme();
  const colors = tokens(theme.pallete.mode);
  const [messages, setMessages] = useState([]);

  useEffect(() => {}, [messages]);

  const handleSubmit = async (text) => {
    setMessages([{ text: text, human: true }, ...messages]);
    try {
      ChatService.sendMessage(text, messages);
    } catch (error) {
      setMessages([
        { text: "Sorry, currently I'm offline", human: false },
        ...messages,
      ]);
    }
  };

  socket.on("response", (message) => {
    const newMessage = message;
    setMessages([{ text: newMessage, human: false }, ...messages]);
  });

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      justifyContent={"center"}
      backgroundColor={"black"}
      height={"100vh"}
    >
      <Box
        width={"90%"}
        height={"90vh"}
        alignItems={"center"}
        borderRadius={"10px"}
        padding={"20px"}
        backgroundColor={colors.primary[400]}
        marginTop={"20px"}
      >
        <Stack spacing={1} height={"100%"}>
          <ChatHeader />
          <Divider />
          <Chatbox messages={messages} />
          <Divider />
          <MsgTextBox handleSubmit={handleSubmit} />
        </Stack>
      </Box>
    </Box>
  );
}
