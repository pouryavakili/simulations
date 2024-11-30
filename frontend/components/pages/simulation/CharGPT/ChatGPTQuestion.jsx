import { Box, styled, Typography } from "@mui/material";


const QuestionBox = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.primary.primary_100,
    padding: theme.spacing(4, 2.5),
    borderRadius: "8px",
    display: "inline-block",
    alignSelf: "end",
    "*": {
      fontSize: theme.spacing(3.5),
      lineHeight: "1",
    },
  }));
const ChatGPTQuestion = () => {
    
    return(
        <QuestionBox>
        <Typography>
          Can you summarize what customers are talking about?
        </Typography>
      </QuestionBox>
    )
}
export default ChatGPTQuestion