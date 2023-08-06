import { Box, Divider, Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import MsgTextBox from "../Components/Common/ChatTextBox";
import Chatbox from "../Components/Chatbox";
import ChatHeader from "../Components/ChatHeader";
import { ChatService, socket } from "../Services/apiSocket";

export default function AiChatBox() {
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
    if (newMessage.status === 200) {
      setMessages([{ text: newMessage, human: false }, ...messages]);
    } else {
      setMessages([
        { text: "Sorry, currently I'm offline", human: false },
        ...messages,
      ]);
    }
  });

  return (
    <Box
      width={"100vw"}
      height={"100vh"}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Box
        width={"70%"}
        height={"70vh"}
        alignItems={"center"}
        borderRadius={"10px"}
        padding={"20px"}
        backgroundColor={"#fcdcde"}
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
