import React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { SidebarLinks } from "@/types";
import { IoMdExit } from "react-icons/io";
import { FaArrowTrendUp } from "react-icons/fa6";
import { MdOutlineDashboard } from "react-icons/md";
import Link from "next/link";
import { FaCog, FaRegBookmark, FaSearch, FaTools } from "react-icons/fa";

type Anchor = "top" | "left" | "bottom" | "right";

interface mobileSideLinks {
  link: SidebarLinks;
}

const MobileLinks = ({ link }: SidebarLinks) => {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const list = (anchor: Anchor, { link }: mobileSideLinks) => (
    <>
      {link.cursor ? (
        <ListItem disablePadding>
          <Link className="w-full" href={`${link.link}`}>
            <ListItemButton>
              <ListItemIcon>{link.icon}</ListItemIcon>
              <ListItemText primary={link.label} />
            </ListItemButton>
          </Link>
        </ListItem>
      ) : (
        <ListItem disablePadding>
          <ListItemButton className="cursor-not-allowed!">
            <ListItemIcon>{link.icon}</ListItemIcon>
            <ListItemText primary={link.label} />
          </ListItemButton>
        </ListItem>
      )}
    </>
  );
  return <div></div>;
};

export default MobileLinks;
