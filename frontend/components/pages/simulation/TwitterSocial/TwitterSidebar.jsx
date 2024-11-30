import { Box, Button, styled } from "@mui/material";

const TwitterSidebarBox = styled(Box)(({ theme }) => ({
  padding: theme.spacing(3.5, 7),
  display: "flex",
  flexDirection: "column",
  height : "100%",
  borderLeft : "1px solid #00000038",
  "&>img": {
    width: theme.spacing(9),
  },
}));

const TwitterSidebar = ({handleChangeTabBar}) => {
  return (
    <TwitterSidebarBox>
      <img src="/images/X.svg" alt="x.svg" />
      <Button
        color="inherit"
        sx={{
          justifyContent: "start",
          mt: 6,
          textTransform: "capitalize",
          gap: 2.5,
          fontSize: 16,
        }}
        onClick={(e) => handleChangeTabBar(e , 1)}
      >
        <img src={`/images/twitter/share_black.svg`} />
        AI Research Assistant
      </Button>
    </TwitterSidebarBox>
  );
};
export default TwitterSidebar;
