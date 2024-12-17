import { Box } from "@mui/material";
import TweetItems from "./TweetItems";
import TweetLoader from "./TweetLoader";
import { useTwitterStore } from "@/store/Twitter/useTwitterStore";

const TweetList = () => {
  const { tweetsList } = useTwitterStore();

  return (
    <Box sx={{ height: "100%", px: 8, overflowX: "auto" }}>
      {tweetsList
        ? tweetsList.map((item, indx) => <TweetItems key={item.id} {...item} />)
        : Array(20)
            .fill("")
            .map((item , index) => <TweetLoader key={index}/>)}
    </Box>
  );
};

export default TweetList;
