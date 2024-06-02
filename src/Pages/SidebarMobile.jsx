import React from "react";
import { Link, useNavigate } from "react-router-dom";

import {
  Box,
  Button,
  Dialog,
  Divider,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import adapt from "./../assets/final_wortbildmarke_adaptwaldholz_2023.jpg";
import { Close } from "@mui/icons-material";

const SidebarMobile = (props) => {
  const { onClose, open } = props;
  const navigate = useNavigate("");

  const closePopupHandler = () => {
    navigate("/");
    window.location.reload();
  };

  return (
    <div>
      <Dialog onClose={onClose} open={open} className="bg-gray-500 opacity-98">
        <Box
          sx={{
            px: 4,
            display: "flex",
            justifyContent: "space-between",
            my: 1,
          }}
        >
          <ListItem>
            <img
              onClick={onClose}
              src={adapt}
              alt="Logo"
              style={{
                cursor: "pointer",
                width: "25%",
                height: "auto",
                border: "1px solid gray",
                borderRadius: "100%",
                boxShadow: "2px 1px 3px  darkred",
              }}
            />
          </ListItem>

          <Button
            onClick={onClose}
            sx={{
              color: "gray",
              backgroundColor: "none",
              "&:hover": {
                color: "#4169E1",
                backgroundColor: "none",
              },
            }}
          >
            <Close fontSize="large" />
          </Button>
        </Box>
        <Box
          color={"success"}
          sx={{
            px: 4,
          }}
        >
          <List sx={{ mt: 0 }}>
            <Divider />
            <Link to="/projektidee">
              <ListItem button sx={{ ":hover": { color: "#039be5" } }}>
                <ListItemText primary="Adaptives Waldressourcen-Management für eine zukunftsfähige Holzwirtschaft in der Region Brandenburg-Berlin" />
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
      </Dialog>{" "}
    </div>
  );
};

export default SidebarMobile;
