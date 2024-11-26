"use client";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";

import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "../lib/theme";

const MainProvider = ({ children }) => {
  return (
    <AppRouterCacheProvider>
      <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
      </ThemeProvider>
    </AppRouterCacheProvider>
  );
};
export default MainProvider;
