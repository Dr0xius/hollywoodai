"use client";
import React from "react";
import {
  FaBars,
  FaCog,
  FaRegBookmark,
  FaSearch,
  FaTools,
} from "react-icons/fa";
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
import MobileLinks from "../ui/MobileLinks";
// import UseAuth from "@/hooks/useAuth";

type Anchor = "top" | "left" | "bottom" | "right";

const Searchbar = () => {
  // const { handleSignOut } = UseAuth();
  const sidebarLinks: SidebarLinks[] = [
    {
      label: "Dashboard",
      icon: <MdOutlineDashboard className="text-white" />,
      link: "/dashboard",
      cursor: true,
    },
    {
      label: "Favorites",
      icon: <FaRegBookmark className="text-white" />,
      link: "/favorites",
      cursor: true,
    },
    {
      label: "Search",
      icon: <FaSearch className="text-white" />,
      cursor: false,
    },
    {
      label: "Trending",
      icon: <FaArrowTrendUp className="text-white" />,
      cursor: false,
    },
    {
      label: "Help & Support",
      icon: <FaTools className="text-white" />,
      cursor: false,
    },
    {
      label: "Settings",
      icon: <FaCog className="text-white" />,
      link: "/settings",
      cursor: true,
    },
    {
      label: "Log out",
      icon: <IoMdExit className="text-white" />,
      link: "/",
      cursor: true,
    },
  ];
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

  const list = (anchor: Anchor) => (
    <Box
      sx={{
        width: anchor === "top" || anchor === "bottom" ? "auto" : 200,
        height: "100%",
      }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
      className="bg-[#1A1A1D] text-white"
    >
      <List className="bg-[#1A1A1D] text-white">
        {sidebarLinks.slice(0, 4).map((link, index) => (
          <ListItem key={index} disablePadding>
            {link.cursor ? (
              <Link className="w-full" href={`${link.link}`}>
                <ListItemButton>
                  <ListItemIcon>{link.icon}</ListItemIcon>
                  <ListItemText primary={link.label} />
                </ListItemButton>
              </Link>
            ) : (
              <ListItemButton className="cursor-not-allowed!">
                <ListItemIcon>{link.icon}</ListItemIcon>
                <ListItemText primary={link.label} />
              </ListItemButton>
            )}
          </ListItem>
        ))}
      </List>
      <Divider />
      <List className="bg-[#1A1A1D] text-white">
        {sidebarLinks.slice(4, 6).map((link, index) => (
          <ListItem key={index} disablePadding>
            {link.cursor ? (
              <Link className="w-full" href={`${link.link}`}>
                <ListItemButton>
                  <ListItemIcon>{link.icon}</ListItemIcon>
                  <ListItemText primary={link.label} />
                </ListItemButton>
              </Link>
            ) : (
              <ListItemButton className="cursor-not-allowed!">
                <ListItemIcon>{link.icon}</ListItemIcon>
                <ListItemText primary={link.label} />
              </ListItemButton>
            )}
          </ListItem>
        ))}
      </List>
      <Divider />
      <List className="bg-[#1A1A1D] text-white">
        {sidebarLinks.slice(6).map((link, index) => (
          <ListItem key={index} disablePadding>
            <Link className="w-full" href={`${link.link}`}>
              <ListItemButton>
                <ListItemIcon>{link.icon}</ListItemIcon>
                <ListItemText primary={link.label} />
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );
  return (
    <div className="h-20 py-6 px-4 w-full mx-auto border-b border-white/10">
      <div className="flex w-full h-full justify-between max-w-[1400] items-center m-0">
        <div
          className="flex gap-2 w-full max-w-100 items-center h-11
       bg-black/25 rounded-full relative mr-4"
        >
          <FaSearch className="relative left-4" />
          <input
            type="text"
            placeholder="Search for movies..."
            className="outline-none w-full px-4 py-2"
          />
        </div>
        {(["left"] as const).map((anchor) => (
          <React.Fragment key={anchor}>
            <Button
              variant="outlined"
              color="primary"
              onClick={toggleDrawer(anchor, true)}
              className="md:hidden!"
            >
              <FaBars className="text-2xl" />
            </Button>
            <Drawer
              anchor={anchor}
              open={state[anchor]}
              onClose={toggleDrawer(anchor, false)}
            >
              {list(anchor)}
            </Drawer>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Searchbar;
