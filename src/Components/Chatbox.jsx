import { Box } from "@mui/material";
import React, { useState } from "react";
import Message from "./Common/Message";

export default function Chatbox({ messages }) {
  return (
    <Box
      height={"100%"}
      width={"100%"}
      display={"flex"}
      flexDirection={"column-reverse"}
      sx={{ overflowY: "auto" }}
    >
      {messages.map((message, index) => (
        <Message key={index} text={message.text} human={message.human} />
      ))}
    </Box>
  );
}
