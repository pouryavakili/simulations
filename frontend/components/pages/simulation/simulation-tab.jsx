"use client";

import Icon from "@/components/common/Icon";
import { tabSimulation } from "@/utils/data";
import { styled, Tab, Tabs, IconButton, Box } from "@mui/material";

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

// Styled Tabs (container)
const TabsCustom = styled(Tabs)(({ theme }) => ({
  ".MuiTabs-indicator": {
    display: "none !important",
  },
  "& .MuiTabs-flexContainer": {
    backgroundColor: "#FFF7E3", // Tab container background
    borderRadius: theme.shape.borderRadius, // Rounded corners
  },
}));

// Styled Tab (individual tabs)
const TabCustom = styled(Tab)(({ theme }) => ({
  textTransform: "none",
  minWidth: 285, 
  borderRadius: theme.shape.borderRadius,
  padding: theme.spacing(0), 
  transition: "background-color 0.3s, color 0.3s",
  display: "flex", 
  justifyContent: "space-between",
  gap: theme.spacing(1),
  alignItems: "center", 
  ".tabItem" : {
    minHeight : `${theme.spacing(12)} !important`,
    padding : theme.spacing(0 , 3),
  },
  "&.Mui-selected": {
    ".tabItem" : {
      backgroundColor: "#FFF",
      color: "#333",
      borderRadius : theme.spacing(2 , 2 , 0 , 0)
    }
  },
  "&.MuiButtonBase-root" : {
    minHeight : "auto"
  }
}));

const TabItem = styled(Box)(({ theme }) => ({
  span: {
    fontSize: theme.spacing(3),
  },
}));

const SimulationTab = ({
  TabNumber = 1,
  handleChange = () => {
    return;
  }
}) => {
  return (
    <TabsCustom
      value={TabNumber}
      onChange={handleChange}
    >
      {tabSimulation.map((tab, index) => (
        <TabCustom
          key={index}
          label={
           <Box sx={{ display : "flex" , alignItems : "flex-end" , width : "100%" }}>
            {TabNumber === index && <img src="/images/shapeLeft.svg"/>}
            <TabItem
             className="tabItem"
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "8px",
                width: "100%",
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
                {/* Tab Image */}
                <img
                  src={`/images/${tab.icon}` || "/default-icon.svg"} // Tab icon or default
                  alt={tab.title}
                  style={{ width: "17px", height: "17px" }}
                />
                {/* Tab Label */}
                <span>{tab.title}</span>
              </Box>
              {/* Close Button */}
                
              <Icon size={"xs"} isCustomVariant name={"material-symbols:close-rounded"} />
            </TabItem>
            {TabNumber === index && <img src="/images/shapRight.svg"/>}
           </Box>
          }
          {...a11yProps(index)}
        />
      ))}
    </TabsCustom>
  );
};

export default SimulationTab;
