import { Box } from "@mui/material";
import Grid from "@mui/material/Grid2";
import TweetList from "./TweetList";
import TwitterSidebar from "./TwitterSidebar";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { getAllTweets } from "@/utils/api";
import { useTwitterStore } from "@/store/Twitter/useTwitterStore";

const TwitterSocial = ({ handleChangeTabBar }) => {
  const params = useSearchParams()
  const userId = params.get("user-id");
  const { setTweetsItem } = useTwitterStore()
  
  //* functions
  const fetchProfile = async () => {
    const result = await getAllTweets(userId);  
    
    if (result.success) {
      setTweetsItem(result.data.tweets);
    }
  };

  //* useEffects
  useEffect(() => {
    fetchProfile();
  }, []);
  return (
    <Box sx={{ pt: 6, height : "100%" }}>
      <Grid height={"100%"} container>
        <Grid height={"100%"} item="true" size={{ xs: 9 }}>
          <TweetList/>
        </Grid>
        <Grid item="true" size={{ xs: 3 }}>
          <TwitterSidebar handleChangeTabBar={handleChangeTabBar} />
        </Grid>
      </Grid>
    </Box>
  );
};
export default TwitterSocial;
