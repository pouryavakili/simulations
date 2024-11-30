import { Avatar, Box, styled, Typography } from "@mui/material"
import TweetInfo from "./TweetInfo"
import { TweetInfoData } from "@/utils/data"

const TweetBox = styled(Box)(({theme}) => ({
    padding : theme.spacing(4 , 7.5),
    borderBottom : "1px solid #F0F0F0"
}))

const TweetBoxFirst = styled(Box)(({theme}) => ({
    display : "flex",
    justifyContent : "flex-start",
    alignItems : "center",
    gap : theme.spacing(3.5),
    fontSize : theme.spacing(4.5)
}))

const TweetBoxSecond = styled(Box)(({theme}) => ({
    display : "flex",
    justifyContent : "space-around",
    marginTop : theme.spacing(4),
    padding : theme.spacing(3.5)
}))

const TweetItems = ({ avatar , text }) => {
    return(
        <TweetBox>
            <TweetBoxFirst>
                <Avatar sx={{ width : 64 , height : 64 }} src={avatar}/>
                <Typography>{text}</Typography>
            </TweetBoxFirst>
            <TweetBoxSecond>
                {TweetInfoData.map((item , indx)=> {
                    return <TweetInfo key={indx} text={item.text} image={item.image}/>
                })}
                <TweetInfo text="" image={"share.svg"}/>
            </TweetBoxSecond>
        </TweetBox>
    )
}
export default TweetItems