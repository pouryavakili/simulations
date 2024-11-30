import { Box } from "@mui/material"

import { TextField, InputAdornment, IconButton } from '@mui/material';
import Icon from "@/components/common/Icon";

const ChatGPTFooter = () => {
    return(
        <Box sx={{ minWidth : "640px" , mx : "auto" , mb : 10}}>
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
            <IconButton sx={{ backgroundColor : "primary.primary_99" }} color="inherit">
                <Icon isCustomVariant name={"material-symbols:arrow-upward"} />
            </IconButton>
          </InputAdornment>
        ),
      }}
      sx={{
        borderRadius: '40px',
        backgroundColor: 'primary.primary_110',
        '& .MuiOutlinedInput-root': {
          borderRadius: '40px',
          backgroundColor: 'primary.primary_110',
        },
        '& .MuiOutlinedInput-input': {
          padding: '12px 16px',
        },
      }}
    />
        </Box>
    )
}
export default ChatGPTFooter