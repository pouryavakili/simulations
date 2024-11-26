"use client";
import { Box, Drawer, List, Toolbar } from "@mui/material";
import UserInfo from "./UserInfo";
import SidebarItem from "./SidebarItem";
import { sidebarData } from "@/utils/data";


const Sidebar = () => {
  const drawerWidth = 270;
  return (
    <Drawer
      sx={{
        width: drawerWidth,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          justifyContent: "space-between",
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <Box>
        <Toolbar sx={{ px: (theme) => `${theme.spacing(6.5)} !important}` }}>
          <img src="/images/PODQ.svg" alt="LOGO" />
        </Toolbar>
        <List disablePadding>
          {sidebarData.map((item, index) => (
            <SidebarItem key={item.title} infoSidebarItem={item} />
          ))}
        </List>
      </Box>
      <Toolbar sx={{ p: (theme) => `${theme.spacing(6.5)} !important}` }}>
        <UserInfo />
      </Toolbar>
    </Drawer>
  );
};
export default Sidebar;
