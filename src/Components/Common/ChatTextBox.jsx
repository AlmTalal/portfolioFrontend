import { Fab, Stack, TextField } from "@mui/material";
import React, { useRef } from "react";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import { useTheme } from "@emotion/react";
import { tokens } from "../../theme";

export default function MsgTextBox({ handleSubmit }) {
  const inputFieldRef = useRef();
  const theme = useTheme();
  const colors = tokens(theme.pallete.mode);

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
    <Stack direction={"row"} spacing={1} alignItems={"center"}>
      <TextField
        fullWidth
        multiline
        maxRows={4}
        placeholder="Ask Bolt anything you want"
        inputRef={inputFieldRef}
        onKeyDown={handleEnter}
        sx={{ "& .MuiInputBase-input": { color: colors.secondary[400] } }}
        onClick={(event) => event.preventDefault()}
      />
      <Fab
        sx={{ color: "black", height: "40px", width: "40px" }}
        aria-label="send"
        onClick={handleClick}
      >
        <SendRoundedIcon />
      </Fab>
    </Stack>
  );
}
