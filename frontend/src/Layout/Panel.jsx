import { Container, Box, styled } from "@mui/material";
import { Tabs, Tab} from "@mui/material";
import { Outlet, useLocation } from "react-router-dom";
import { useState } from "react";
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DvrIcon from '@mui/icons-material/Dvr';
import MailIcon from '@mui/icons-material/Mail';
import logoUrl from './PODQ.png';

const drawerWidth = 270;

const PODQLogo = styled('img')({
  height: '22px',
});

const LogoContainer = styled('Box')({
  paddingLeft: '26px',
  paddingTop: '32px',
  marginBottom: '85px'
});

const PanelContainer = styled('div')({
  paddingLeft: '270px',
  
});

const TabsHolder = styled('div')({
  backgroundColor: '#FFF7E3',
  border: '2px solid #E3E3E3',
  borderRadius: '16px',

});

const OutletContainer = styled('div')({
  display: "flex",
  width: "90%",
  margin: "0 auto",
  paddingTop: '34px'
})

function Sidebar() {
  const location = useLocation();

  return (
  <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <LogoContainer>
          <PODQLogo src={logoUrl} />
        </LogoContainer>
        <List>
            <ListItem key="1" disablePadding>
              <ListItemButton 
                sx={{
                  color: location.pathname.includes("simulations") ? "#15C5A1" : "inherit",
                  "& .MuiSvgIcon-root": {
                    color: location.pathname.includes("/simulations") ? "#15C5A1" : "inherit",
                  },
                }}>
                <ListItemIcon>
                  <DvrIcon />
                </ListItemIcon>
                <ListItemText primary={"Simulations"}
                  primaryTypographyProps={{ fontWeight: location.pathname.includes("simulations") ? 'bold' : 'normal' }}
                  />
              </ListItemButton>
            </ListItem>
          
        </List>
        <List>React
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <MailIcon />
                </ListItemIcon>
                <ListItemText primary={"John Doe"} />
              </ListItemButton>
            </ListItem>
        </List>
      </Drawer>
  )
}


const StyledTabs = styled((props) => (
  <Tabs
    {...props}
    TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
  />
))({
  '& .MuiTabs-indicator': {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  '& .MuiTabs-indicatorSpan': {
    maxWidth: 40,
    width: '100%',
    backgroundColor: '#635ee7',
  },
});

const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
  ({ theme }) => ({
    textTransform: 'none',
    fontFamily: 'manrope',
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.pxToRem(15),
    marginRight: theme.spacing(1),
    color: '#000000',
    '&.Mui-selected': {
      color: '#000000',
      backgroundColor: '#FFFFFF',
      borderTopLeftRadius: '16px',
      borderTopRightRadius: '16px',
      padding: '16px'
    },
    '&.Mui-focusVisible': {
      backgroundColor: '#EEEEEE',
    },
  }),
);

function ChromeTabs() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <TabsHolder>
        <StyledTabs
          value={value}
          onChange={handleChange}
          aria-label="styled tabs example"
        >
          <StyledTab label="Home/X" />
          <StyledTab label="ChatGPT" />
          <StyledTab label="Apolo" />
        </StyledTabs>
        <Box sx={{ p: 3 }} />
      </TabsHolder>
    </Box>
  );
}

export default function Panel(){
  return (
    <PanelContainer>
    <Sidebar/>
    <OutletContainer>
      <ChromeTabs/>
    </OutletContainer>
    </PanelContainer>
  )
}