"use client";

import { usePathname } from "next/navigation";
import { ListItem, ListItemButton, ListItemIcon, ListItemText, styled } from "@mui/material";
import Link from "next/link";

const IconButton = styled("img")(({ theme }) => ({
  width: theme.spacing(6),
}));

const SidebarItem = (props) => {
  const { title, url, icon } = props.infoSidebarItem;

  // Get the current path
  const pathname = usePathname();

  // Check if the current link is active
  const isActive = pathname === url;

  return (
    <ListItem disablePadding sx={{ padding: 0 }}>
      <ListItemButton
        LinkComponent={Link}
        href={url}
        sx={{
          px: (theme) => `${theme.spacing(6.5)} !important`,
          gap: (theme) => theme.spacing(4),
          color: isActive ? "#15C5A1" : "inherit",
        }}
      >
        <ListItemIcon sx={{ minWidth: "auto" }}>
          <IconButton src={`/images/${icon}`} />
        </ListItemIcon>
        <ListItemText primary={title} />
      </ListItemButton>
    </ListItem>
  );
};

export default SidebarItem;
