import { Box, styled, Typography } from "@mui/material";

const AnswerBox = styled(Box)(({ theme }) => ({
    padding: theme.spacing(2),
    borderRadius: "8px",
    alignSelf: "start",
    display: "flex",
    gap : theme.spacing(4),
    "*": {
      fontSize: theme.spacing(3.5),
    },
  }));
  
  const ChatBubbleOutlineIcon = styled(Box)(({ theme }) => ({
    width: theme.spacing(7),
    height: theme.spacing(7),
    border: `1px solid ${theme.palette.primary.primary_95}`,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "50%",
    img: {
      width: theme.spacing(4),
      height: theme.spacing(4),
    },
  }));
  const IconWrapper = styled(Box)(({ theme }) => ({
    color: theme.palette.primary.main,
    marginTop: theme.spacing(0.5), // Align with text
  }));
const ChatGPTAnswer = () => {
    return(
        <AnswerBox>
        <IconWrapper>
          <ChatBubbleOutlineIcon>
            <img src="/images/ChatGPT.svg" alt="ChatGPT" />
          </ChatBubbleOutlineIcon>
        </IconWrapper>
        <Box>
          <Typography>
            Sure! Here's a high-level summary of the topics:
          </Typography>
          <Typography>
            In general, the discussion is a mix of customer feedback, price
            concerns, and interest in sustainable products.
          </Typography>
        </Box>
      </AnswerBox>
    )
}
export default ChatGPTAnswer