"use client";
import { Box, styled } from "@mui/material";
import SimulationTab from "./simulation-tab";
import { useState } from "react";
import TwitterSocial from "./TwitterSocial";
import CharGPT from "./CharGPT";

const SimulationBox = styled(Box)(({ theme }) => ({
  backgroundColor: "#FFF",
  borderRadius : theme.shape.borderRadius,
  overflow : "hidden",
  height : "calc(100vh - 64px)",
  boxShadow : theme.shadows[1],
}));

const SimulationComponents = () => {
  const [tabNumber, setTabNumber] = useState(0);

  const handleChange = (event, newValue) => {
    console.log(newValue);
    
    setTabNumber(newValue);
  };

  return (
    <SimulationBox>
      <SimulationTab TabNumber={tabNumber} handleChange={handleChange} />
      <Box sx={{ height : "calc(100% - 48px)" }}>
        {tabNumber == 0 ? <TwitterSocial handleChangeTabBar={handleChange}/> : tabNumber === 1 ? <CharGPT /> : ""}
      </Box>
    </SimulationBox>
  );
};
export default SimulationComponents;
