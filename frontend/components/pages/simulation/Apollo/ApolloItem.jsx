import Icon from "@/components/common/Icon";
import { Box, Divider, Typography, styled, useTheme } from "@mui/material";
import Grid from "@mui/material/Grid2";
import React from "react";
const Container = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "50% 50%",
  borderBottom: `1px solid ${theme.palette.primary.primary_100}`,
  padding: "16px",
  width: "100%",
  backgroundColor: "#fff",
}));

const StatBox = styled(Box)(({ theme, color }) => ({
  textAlign: "center",
  color: color || theme.palette.text.primary,
  height: "100%",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  "*": {
    fontSize: theme.spacing(3),
  },
}));

const Timestamp = styled(Typography)(({ theme }) => ({
  textAlign: "right",
  color: theme.palette.text.secondary,
}));

const TimeBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: theme.spacing(3),
  height : "100%",
  "*": {
    fontSize: theme.spacing(3),
  },
}));

const BlackBox = styled(Box)(({ theme }) => ({
  width: theme.spacing(6),
  height: theme.spacing(6),
  backgroundColor: theme.palette.primary.dark,
  color: theme.palette.secondary.white,
  fontSize: theme.spacing(3),
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "100%",
}));
const ApolloItem = ({title , numberCustomer}) => {
  const theme = useTheme();
  return (
    <Container>
      {/* Header */}
      <Box sx={{ display : "flex" , alignItems : "center" , gap : 3 }}>
        <Icon color={theme.palette.primary.primary_95} isCustomVariant name={"solar:star-bold"}/>
       <Box>
       <Typography sx={{ fontSize: theme.spacing(3.5) }} mb={1}>
         {title}
        </Typography>
        <Typography
          sx={{ fontSize: theme.spacing(3) }}
          color="textSecondary"
        >
          3 Steps Interval
        </Typography>
       </Box>
      </Box>

      {/* Stats */}
      <Grid divider container columns={15} spacing={1}>
        <Grid
          sx={{ borderRight: `1px dashed ${theme.palette.primary.primary_90}` }}
          item
          size={3}
        >
          <StatBox color="#1976d2">
            <Typography>{numberCustomer}</Typography>
            <Typography variant="body2">Total Sent</Typography>
          </StatBox>
        </Grid>
        <Grid item size={3}>
          <StatBox color="orange">
            <Typography>85</Typography>
            <Typography variant="body2">Total Landed</Typography>
          </StatBox>
        </Grid>
        <Grid item size={3}>
          <StatBox color="#d32f2f">
            <Typography>13%</Typography>
            <Typography variant="body2">Open Rate</Typography>
          </StatBox>
        </Grid>
        <Grid item size={3}>
          <StatBox color="green">
            <Typography>1%</Typography>
            <Typography variant="body2">Response Rate</Typography>
          </StatBox>
        </Grid>
        <Grid
          sx={{ borderLeft: `1px dashed ${theme.palette.primary.primary_90}` }}
          item
          size={3}
        >
          <TimeBox>
            <BlackBox>PS</BlackBox>
            <Timestamp variant="body2">7:24pm</Timestamp>
          </TimeBox>
        </Grid>
      </Grid>

      {/* Timestamp */}
    </Container>
  );
};
export default ApolloItem;
