import Icon from "@/components/common/Icon"
import { Box, Typography } from "@mui/material"

const ChatGPTHeader = () => {
    return (
        <Box sx={{ display : "flex" , justifyContent : "space-between" , alignItems : "center" , padding : [4 , 7] }} component={"header"}>
            <Typography sx={{ color : "secondary.neutral_40" , fontSize : 14 , fontWeight : 700 }}>ChatGPT <Icon name={"arrow"}/></Typography>
            <img src={`/images/twitter/share.svg`}/>
        </Box>
    )
}
export default ChatGPTHeader