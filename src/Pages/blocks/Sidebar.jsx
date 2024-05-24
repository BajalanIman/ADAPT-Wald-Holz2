// Sidebar.js
import React from "react";

import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  Typography,
  Box,
  Toolbar,
} from "@mui/material";

const Sidebar = () => {
  return (
    <div className=" relative flex h-[200] bg-red-300 transition-all duration-300">
      <Drawer
        variant="permanent"
        sx={{
          width: 240,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: 240, boxSizing: "border-box" },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: "auto" }}>
          <List>
            <ListItem>
              <img
                src="/path-to-your-logo.png"
                alt="Logo"
                style={{ width: "100%", height: "auto" }}
              />
            </ListItem>
            <ListItem button>
              <ListItemText primary="Title 1" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Title 2" />
            </ListItem>
            <List sx={{ pl: 4 }}>
              <ListItem button>
                <ListItemText primary="Subtitle 2.1" />
              </ListItem>
              <ListItem button>
                <ListItemText primary="Subtitle 2.2" />
              </ListItem>
              <ListItem button>
                <ListItemText primary="Subtitle 2.3" />
              </ListItem>
            </List>
            <ListItem button>
              <ListItemText primary="Title 3" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="Title 4" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="Title 5" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="Title 6" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="Title 7" />
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </div>
  );
};

export default Sidebar;
