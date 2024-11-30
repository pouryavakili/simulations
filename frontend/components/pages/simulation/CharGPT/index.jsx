import { Box, styled } from "@mui/material";
import ChatGPTContent from "./ChatGPTContent";
import ChatGPTHeader from "./ChatGPTHeader";
import ChatGTPSidebar from "./ChatGTPSidebar";
import ChatGPTFooter from "./ChatGPTFooter";

const ChatGPTContentContainer = styled(Box)(({ theme }) => ({
  width: "calc(100% - 215px)",
  display: "flex",
  flexDirection: "column" 
}));
const ChatGPTSidebarContainer = styled(Box)(({ theme }) => ({
  width: "215px",
  backgroundColor: theme.palette.primary.primary_110,
}));
const ChatGPT = () => {
  return (
    <Box sx={{ height: "100%", display: "flex" }}>
      <ChatGPTSidebarContainer>
        <ChatGTPSidebar />
      </ChatGPTSidebarContainer>
      <ChatGPTContentContainer>
        <ChatGPTHeader />
        <ChatGPTContent />
        <ChatGPTFooter />
      </ChatGPTContentContainer>
    </Box>
  );
};
export default ChatGPT;
