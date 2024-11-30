import { Box } from "@mui/material";
import Grid from "@mui/material/Grid2";
import TweetList from "./TweetList";
import TwitterSidebar from "./TwitterSidebar";

const TwitterSocial = ({ handleChangeTabBar }) => {
  return (
    <Box sx={{ pt: 6, height : "100%" }}>
      <Grid height={"100%"} container>
        <Grid height={"100%"} item={true} size={{ xs: 9 }}>
          <TweetList />
        </Grid>
        <Grid item={true} size={{ xs: 3 }}>
          <TwitterSidebar handleChangeTabBar={handleChangeTabBar} />
        </Grid>
      </Grid>
    </Box>
  );
};
export default TwitterSocial;
