import React from "react";
import { Link } from "react-router-dom";
import { Box, Divider, List, ListItem, ListItemText } from "@mui/material";

const DetailsSidebar = () => {
  return (
    <>
      <Box>
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
            <ListItemText primary="Teammitglieder" />
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
        <Divider />
        <Link to="/datenschutz">
          <ListItem button sx={{ ":hover": { color: "#039be5" } }}>
            <ListItemText primary="Datenschutz" />
          </ListItem>
        </Link>
      </Box>
    </>
  );
};

export default DetailsSidebar;
