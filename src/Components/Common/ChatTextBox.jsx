import { Fab, Stack, TextField } from "@mui/material";
import React, { useRef } from "react";
import SendRoundedIcon from "@mui/icons-material/SendRounded";

export default function MsgTextBox({ handleSubmit }) {
  const inputFieldRef = useRef();

  const handleClick = async () => {
    if (inputFieldRef.current.value !== "") {
      handleSubmit(inputFieldRef.current.value);
      inputFieldRef.current.value = "";
    }
  };

  const handleEnter = (event) => {
    if (event.key === "Enter" && inputFieldRef.current.value !== "") {
      event.preventDefault();
      handleSubmit(inputFieldRef.current.value);
      inputFieldRef.current.value = "";
    }
  };

  return (
    <Stack direction={"row"} spacing={1}>
      <TextField
        fullWidth
        multiline
        maxRows={4}
        placeholder="Ask Bolt anything you want"
        autoFocus
        inputRef={inputFieldRef}
        onKeyDown={handleEnter}
      />
      <Fab color="primary" aria-label="send" onClick={handleClick}>
        <SendRoundedIcon />
      </Fab>
    </Stack>
  );
}
