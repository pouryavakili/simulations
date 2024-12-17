import { formatNumberWithUnit } from "@/utils/function"
import { Box, styled, Typography } from "@mui/material"

const TweetInfoBox = styled(Box)(({theme}) => ({
    display : "flex",
    alignItems :"center",
    gap : theme.spacing(2.5),
    color : theme.palette.secondary.neutral_60,
    "*" : {
    fontSize : theme.spacing(3.5),
    },
    "img" : {
        width : theme.spacing(4),
        height : theme.spacing(4)
    }
}))

const TweetInfo = ({image , text}) => {
    return(
        <TweetInfoBox>
            <img src={`/images/twitter/${image}`}/>
            <Typography>
                {formatNumberWithUnit(text)}
            </Typography>
        </TweetInfoBox>
    )
}
export default TweetInfo