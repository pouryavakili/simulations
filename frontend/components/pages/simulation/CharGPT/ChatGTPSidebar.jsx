import Icon from "@/components/common/Icon";
import { Box, styled, Typography } from "@mui/material";

// Styled component for the sidebar header
const ChatGTPSidebarHeader = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  padding: theme.spacing(4, 5),
}));

// Styled component for the message container (main content)
const MessageContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4, 5),
}));

// Styled Typography for date label
const DateLabel = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(1.5),
  color: theme.palette.secondary.neutral_60,
  fontSize: 10,
}));

// Styled Typography for the message text
const MessageText = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(1.5),
  fontSize: 14,
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
}));

// Main ChatGTPSidebar component
const ChatGTPSidebar = () => {
  return (
    <>
      {/* Sidebar header with two icons */}
      <ChatGTPSidebarHeader>
        <Icon size="xs" name="sidebar-minimalistic" />
        <Icon size="xs" name="pen-new-square" />
      </ChatGTPSidebarHeader>

      {/* Sidebar content */}
      <MessageContainer>
        <DateLabel>Today</DateLabel>

        {/* Example message 1 */}
        <MessageText>
          I've gathered data on sustainable fashion.
        </MessageText>

        {/* Example message 2 */}
        <MessageText>
          I've gathered data on sustainable fashion.
        </MessageText>
      </MessageContainer>
    </>
  );
};

export default ChatGTPSidebar;
