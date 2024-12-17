import { Avatar, Box, Typography } from "@mui/material";
import TweetInfo from "./TweetInfo";
import { useMemo } from "react";

const TweetItems = ({
  favorite_count,
  text,
  reply_count,
  retweet_count,
  view_count,
  id,
  avatar,
}) => {
  // Memoized data for tweet interactions
  const tweetInfoData = useMemo(() => {
    if (!id) return null; // Early return for invalid ID
    return [
      { image: "comment.svg", text: reply_count },
      { image: "retweet.svg", text: retweet_count },
      { image: "like.svg", text: favorite_count },
      { image: "view.svg", text: view_count },
    ];
  }, [id, reply_count, retweet_count, favorite_count, view_count]);

  return (
    <Box
      sx={{
        padding: (theme) => theme.spacing(4, 7.5),
        borderBottom: "1px solid #F0F0F0",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: (theme) => theme.spacing(3.5),
        }}
      >
        <Avatar
          sx={{ width: 64, height: 64 }}
          src={avatar}
          alt="User Avatar"
        />
        <Typography variant="body1">{text}</Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          marginTop: (theme) => theme.spacing(4),
          padding: (theme) => theme.spacing(3.5),
        }}
      >
        {tweetInfoData?.map((item, index) => (
          <TweetInfo key={index} text={item.text} image={item.image} />
        ))}
        <TweetInfo text="" image="share.svg" />
      </Box>
    </Box>
  );
};

export default TweetItems;
