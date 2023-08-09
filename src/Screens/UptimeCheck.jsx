import { Box } from "@mui/material";
import React, { useState } from "react";
import { socket } from "../Services/apiSocket";

export default function UptimeCheck() {
  const [messages, setMessages] = useState(["Hola"]);
  socket.on("webStatusIs", (message) => {
    [...message, message];
  });
  return (
    <Box width={"100vw"} height={"100vh"}>
      {messages.map((message) => (
        <Box width={"auto"} height={"auto"} color={"white"}>
          {message}
          Hola
        </Box>
      ))}
    </Box>
  );
}
