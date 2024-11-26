import { Box, styled, Typography } from "@mui/material"

const TweetInfoBox = styled(Box)(({theme}) => ({
    display : "flex",
    gap : theme.spacing(2.5),
    color : "#6D6D6D",
    fontSize : theme.spacing(3.5)
}))

const TweetInfo = ({image="like.svg" , text = "22.4k"}) => {
    return(
        <TweetInfoBox>
            <img src={`/images/twitter/${image}`}/>
            <Typography>
                {text}
            </Typography>
        </TweetInfoBox>
    )
}
export default TweetInfo