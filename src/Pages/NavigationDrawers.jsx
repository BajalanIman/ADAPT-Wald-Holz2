import React, { useState } from "react";
import {
  Box,
  Button,
  Divider,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import DensityMediumIcon from "@mui/icons-material/DensityMedium";
import { Link } from "react-router-dom";

import adapt from "./../assets/final_wortbildmarke_adaptwaldholz_2023.jpg";

const NavigationDrawers = () => {
  const [sideBarSize, setSideBarSize] = useState(true);

  const toggleSidebarSize = () => {
    setSideBarSize(!sideBarSize);
  };

  return (
    <Box sx={{ display: { xs: "none", md: "flex" } }}>
      <Box
        sx={{
          position: "fixed",
          display: "flex",
          top: "35px",
          zIndex: 999,
        }}
      >
        {!sideBarSize && (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column-reverse",
              justifyContent: "center",
            }}
          >
            <Link to="/">
              <img
                src={adapt}
                alt="Logo"
                style={{
                  cursor: "pointer",
                  width: "40px",
                  height: "auto",
                  border: "1px solid gray",
                  borderRadius: "100%",
                  boxShadow: "2px 1px 3px  darkred",
                  marginLeft: 15,
                }}
              />
            </Link>
            <Button
              onClick={toggleSidebarSize}
              sx={{
                color: "green",
                backgroundColor: "none",
                "&:hover": {
                  color: "#4169E1",
                  backgroundColor: "none",
                },
              }}
            >
              <DensityMediumIcon fontSize="large" />
            </Button>
          </Box>
        )}
      </Box>
      <Box
        sx={{
          width: sideBarSize ? "380px" : "0",
          overflowX: "hidden",
          transition: "width 0.5s ease",
          position: "fixed",
          top: "10px",
          height: "calc(100% - 20px)",
          bgcolor: "lightgray",
          boxShadow: 3,
          p: 1,
        }}
      >
        <List sx={{ mt: 0 }}>
          <Box sx={{ display: "flex", my: 2 }}>
            <ListItem>
              <Link to="/">
                <img
                  src={adapt}
                  alt="Logo"
                  style={{
                    cursor: "pointer",
                    width: "35%",
                    height: "auto",
                    border: "1px solid gray",
                    borderRadius: "100%",
                    boxShadow: "2px 1px 3px  darkred",
                  }}
                />
              </Link>
            </ListItem>
            <Button
              onClick={toggleSidebarSize}
              sx={{
                color: "green",
                backgroundColor: "none",
                "&:hover": {
                  color: "#4169E1",
                  backgroundColor: "none",
                },
              }}
            >
              <DensityMediumIcon fontSize="large" />
            </Button>
          </Box>
          <Divider />
          <Link to="/projektidee">
            <ListItem button sx={{ ":hover": { color: "#039be5" } }}>
              <ListItemText primary="Die Projektidee" />
            </ListItem>
          </Link>
          <Divider />
          <Link to="/module">
            <ListItem button sx={{ ":hover": { color: "#039be5" } }}>
              <ListItemText primary="Die Module" />
            </ListItem>
          </Link>
          <List sx={{ pl: 4 }}>
            <Link to="/waldmanagement">
              <ListItem button sx={{ ":hover": { color: "#039be5" } }}>
                <ListItemText primary="Waldmanagement" />
              </ListItem>
            </Link>
            <Link to="/holzbereitstellung">
              <ListItem button sx={{ ":hover": { color: "#039be5" } }}>
                <ListItemText primary="Holzbereitstellung" />
              </ListItem>
            </Link>
            <Link to="/holzverwendung">
              <ListItem button sx={{ ":hover": { color: "#039be5" } }}>
                <ListItemText primary="Holzverwendung" />
              </ListItem>
            </Link>
          </List>
          <Divider />
          <Link to="/innoForum">
            <ListItem button sx={{ ":hover": { color: "#039be5" } }}>
              <ListItemText primary="InnoForum Wald und Holz" />
            </ListItem>
          </Link>
          <Divider />
          <a
            href="https://vr-easy.com/tour/hneeberswalde/240524-adaptwaldholz/"
            target="blank"
          >
            <ListItem button sx={{ ":hover": { color: "#039be5" } }}>
              <ListItemText primary="360° Virtual Tour" />
            </ListItem>
          </a>
          <Divider />
          <Link to="/team">
            <ListItem button sx={{ ":hover": { color: "#039be5" } }}>
              <ListItemText primary="Team" />
            </ListItem>
          </Link>
          <Divider />
          <Link to="/projektkonsortium">
            <ListItem button sx={{ ":hover": { color: "#039be5" } }}>
              <ListItemText primary="Projektkonsortium" />
            </ListItem>
          </Link>
          <Divider />
          <Link to="/regulus">
            <ListItem button sx={{ ":hover": { color: "#039be5" } }}>
              <ListItemText primary="REGULUS" />
            </ListItem>
          </Link>
          <Divider />
          <Link to="/imprint">
            <ListItem button sx={{ ":hover": { color: "#039be5" } }}>
              <ListItemText primary="Impressum" />
            </ListItem>
          </Link>
        </List>
      </Box>
      <Box
        sx={{
          flexGrow: 1,
          p: 1,
          marginLeft: sideBarSize ? "380px" : "0",
          transition: "margin-left 0.5s ease",
        }}
      ></Box>
    </Box>
  );
};

export default NavigationDrawers;
