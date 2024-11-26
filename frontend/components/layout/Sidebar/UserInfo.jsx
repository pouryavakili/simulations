import { Avatar, Box, styled, Typography } from "@mui/material";

const UserInfoBox = styled(Box)(({ theme }) => ({
  background: "#F7F7F9",
  width: "100%",
  padding: theme.spacing(3, 4),
  display : "flex",
  justifyContent : "space-between",
  borderRadius : theme.spacing(1.5),
  p : {
    fontSize : theme.spacing(3.5)
  }
}));
const UserInfo = () => {
  return (
    <UserInfoBox>
      <Box sx={{ display : "flex" , justifyContent : "center" , alignItems : "center" , gap : 1.5 }}>
        <Avatar sx={{ width: 36, height: 36 }}/>
        <Typography>John Doe</Typography>
      </Box>
    </UserInfoBox>
  );
};
export default UserInfo;
