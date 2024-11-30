import React from "react";
import { Box, styled } from "@mui/material";
import ChatGPTQuestion from "./ChatGPTQuestion";
import ChatGPTAnswer from "./ChatGPTAnswer";

// Styled components
const ChatContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "end",
  alignItems: "baseline",
  gap: theme.spacing(2),
  padding: theme.spacing(2),
  borderRadius: "12px",
  maxWidth: "600px",
  margin: "0 auto",
  height: "100%",
}));
const ChatGPTContent = () => {
  return (
    <ChatContainer>
      {/* Question */}
      <ChatGPTQuestion/>

      {/* Answer */}
      <ChatGPTAnswer />
     
    </ChatContainer>
  );
};

export default ChatGPTContent;
