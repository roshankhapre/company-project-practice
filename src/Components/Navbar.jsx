import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ButtonBase,
  MenuItem,
} from "@mui/material";
import { Menu as MenuIcon, Close as CloseIcon } from "@mui/icons-material";
import logo from "../assests/Capture (2).png";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import FullStackDevelopment from "./Services/FullStackDevelopment";
import { FaReact, FaNodeJs, FaJava } from "react-icons/fa";

const DropdownLinks = [
  {
    id: 1,
    name: "Fullstack Development",
    link: <FullStackDevelopment />,
    logo: <FaReact />,
  },
  {
    id: 2,
    name: "Web Development",
    link: "#",
    logo: <FaNodeJs />,
  },
  {
    id: 3,
    name: "Web Design",
    link: "#",
    logo: <FaJava />,
  },
];

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [showTopBar, setShowTopBar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  // Track scroll direction to show/hide top bar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        // Scrolling down
        setShowTopBar(false);
      } else {
        // Scrolling up
        setShowTopBar(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <div>
      {/* Top Contact Bar */}
      <Box
        sx={{
          backgroundColor: "#212121",
          color: "white",
          py: 1,
          px: 2,
          transition: "transform 0.3s ease-in-out",
          transform: showTopBar ? "translateY(0)" : "translateY(-100%)",
          display: { xs: "none", md: "block" },
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="body2">Contact No: +1234567890</Typography>
          <Typography variant="body2">Email: info@example.com</Typography>
        </Box>
      </Box>

      {/* Main Navbar */}
      <AppBar
        position="sticky"
        sx={{
          backgroundColor: "white",
          boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
          height: "80px", // Fixed height
          display: "flex",
          alignItems: "center",
          px: 2,
          borderBottom: "1px solid #e0e0e0",
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          {/* Logo */}
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <img
              src={logo}
              alt="Logo"
              style={{ height: "60px", marginRight: "10px" }}
            />
          </Box>

          {/* Desktop Menu */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              flexGrow: 1,
              justifyContent: "center",
              gap: 2,
            }}
          >
            <ButtonBase
              sx={{
                color: "black",
                px: 2,
                fontWeight: "bold",
                borderRadius: "4px",
                transition: "background-color 0.3s",
                "&:hover": {
                  backgroundColor: "#f5f5f5",
                },
              }}
              href="#about"
            >
              About Us
            </ButtonBase>

            <Box
              sx={{
                position: "relative",
                height: "100%",
                display: "flex",
                alignItems: "center",
              }}
              onClick={toggleDropdown}
            >
              <ButtonBase
                sx={{
                  color: "black",
                  px: 2,
                  fontWeight: "bold",
                  borderRadius: "4px",
                  transition: "background-color 0.3s",
                  "&:hover": {
                    backgroundColor: "#f5f5f5",
                  },
                }}
                aria-controls="services-menu"
                aria-haspopup="true"
              >
                Services
                <KeyboardArrowDownIcon
                  className={`ml-1 transition-transform duration-200 ease ${
                    dropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </ButtonBase>

              <Box
                id="services-menu"
                sx={{
                  display: dropdownOpen ? "block" : "none",
                  position: "absolute",
                  top: "100%",
                  left: 0,
                  backgroundColor: "white",
                  color: "black",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                  borderRadius: "8px",
                  zIndex: 10,
                  minWidth: "200px",
                }}
              >
                {DropdownLinks.map((link) => (
                  <MenuItem
                    key={link.id}
                    component="a"
                    href={link.link}
                    sx={{
                      px: 2,
                      "&:hover": {
                        backgroundColor: "#f5f5f5",
                      },
                    }}
                  >
                    {link.logo && <Box sx={{ mr: 1 }}>{link.logo}</Box>}
                    {link.name}
                  </MenuItem>
                ))}
              </Box>
            </Box>

            <ButtonBase
              sx={{
                color: "black",
                px: 2,
                fontWeight: "bold",
                borderRadius: "4px",
                transition: "background-color 0.3s",
                "&:hover": {
                  backgroundColor: "#f5f5f5",
                },
              }}
              href="#portfolio"
            >
              Portfolio
            </ButtonBase>
            <ButtonBase
              sx={{
                color: "black",
                px: 2,
                fontWeight: "bold",
                borderRadius: "4px",
                transition: "background-color 0.3s",
                "&:hover": {
                  backgroundColor: "#f5f5f5",
                },
              }}
              href="#career"
            >
              Career
            </ButtonBase>
            <ButtonBase
              sx={{
                color: "black",
                px: 2,
                fontWeight: "bold",
                borderRadius: "4px",
                transition: "background-color 0.3s",
                "&:hover": {
                  backgroundColor: "#f5f5f5",
                },
              }}
              href="#contact"
            >
              Contact Us
            </ButtonBase>
          </Box>

          {/* Mobile Menu Icon */}
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ display: { xs: "block", md: "none" }, color: "black" }}
            onClick={toggleDrawer}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer}>
        <Box
          sx={{
            width: 250,
            display: "flex",
            flexDirection: "column",
            height: "100%",
            backgroundColor: "#f5f5f5",
            paddingTop: 2,
          }}
        >
          <IconButton
            onClick={toggleDrawer}
            sx={{ alignSelf: "flex-end", mb: 2 }}
          >
            <CloseIcon />
          </IconButton>
          <List>
            <ListItem
              button
              component="a"
              href="#about"
              onClick={toggleDrawer}
              sx={{
                "&:hover": {
                  backgroundColor: "#e0e0e0",
                },
              }}
            >
              <ListItemText primary="About Us" />
            </ListItem>
            {DropdownLinks.map((link) => (
              <ListItem
                button
                key={link.id}
                component="a"
                href={link.link}
                onClick={toggleDrawer}
                sx={{
                  "&:hover": {
                    backgroundColor: "#e0e0e0",
                  },
                }}
              >
                <ListItemText primary={link.name} />
              </ListItem>
            ))}
            <ListItem
              button
              component="a"
              href="#portfolio"
              onClick={toggleDrawer}
              sx={{
                "&:hover": {
                  backgroundColor: "#e0e0e0",
                },
              }}
            >
              <ListItemText primary="Portfolio" />
            </ListItem>
            <ListItem
              button
              component="a"
              href="#career"
              onClick={toggleDrawer}
              sx={{
                "&:hover": {
                  backgroundColor: "#e0e0e0",
                },
              }}
            >
              <ListItemText primary="Career" />
            </ListItem>
            <ListItem
              button
              component="a"
              href="#contact"
              onClick={toggleDrawer}
              sx={{
                "&:hover": {
                  backgroundColor: "#e0e0e0",
                },
              }}
            >
              <ListItemText primary="Contact Us" />
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </div>
  );
};

export default Navbar;
