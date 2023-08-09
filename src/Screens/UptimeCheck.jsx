import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { socket } from "../Services/apiSocket";

export default function UptimeCheck() {
  const [messages, setMessages] = useState([]);
  socket.on("webStatusIs", (newMessage) => {
    console.log(newMessage);
    //const msg = newMessage.message;
    setMessages([...messages, "msg"]);
  });

  useEffect(() => {}, [messages]);

  return (
    <Box width={"100vw"} height={"100vh"}>
      {messages.map((message, index) => (
        <Box width={"auto"} height={"auto"} color={"white"} key={index}>
          {message}
        </Box>
      ))}
    </Box>
  );
}
