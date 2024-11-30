import {
  TextField,
  InputAdornment,
  IconButton,
  styled,
  Box,
  Typography,
} from "@mui/material";
import Icon from "@/components/common/Icon";

const ChatGPTFooterContainer = styled(Box)(({ theme }) => ({
 width: "640px",
  margin: `0px auto`,
  padding: theme.spacing(4, 6),
  textAlign : "center",
  [theme.breakpoints.down("md")]: {
    width: "auto",
  },
}));

const ChatGPTFooter = () => {
  return (
    <ChatGPTFooterContainer>
      <TextField
        variant="outlined"
        fullWidth
        placeholder="Message ChatGPT"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <IconButton>
                <Icon isCustomVariant name={"material-symbols:attach-file"} />
              </IconButton>
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                sx={{ backgroundColor: "primary.primary_99" }}
                color="inherit"
              >
                <Icon isCustomVariant name={"material-symbols:arrow-upward"} />
              </IconButton>
            </InputAdornment>
          ),
        }}
        sx={{
          borderRadius: "40px",
          backgroundColor: "primary.primary_110",
          mb: 2.5,
          "& .MuiOutlinedInput-root": {
            borderRadius: "40px",
            backgroundColor: "primary.primary_110",
          },
          "& .MuiOutlinedInput-input": {
            padding: "12px 0px",
          },
        }}
      />
      <Typography sx={{ fontSize : 10 , color : "primary.primary_70" }}>Interaction Faction workspace chats aren’t used to train our models. ChatGPT can make mistakes.</Typography>
    </ChatGPTFooterContainer>
  );
};
export default ChatGPTFooter;
