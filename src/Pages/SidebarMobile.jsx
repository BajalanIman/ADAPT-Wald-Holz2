import React, { useState } from "react";
import {
  Alert,
  AlertTitle,
  Box,
  Button,
  Dialog,
  Divider,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import DensityMediumIcon from "@mui/icons-material/DensityMedium";
import adapt from "./../assets/final_wortbildmarke_adaptwaldholz_2023.jpg";
import { Link, useNavigate } from "react-router-dom";
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
            <Link to="/pageone">
              <ListItem button sx={{ ":hover": { color: "#039be5" } }}>
                <ListItemText primary="N2:Adaptives Waldressourcen-Management für eine zukunftsfähige Holzwirtschaft in der Region Brandenburg-Berlin" />
              </ListItem>
            </Link>
            <Divider />
            <Link to="/pagetwo">
              <ListItem button sx={{ ":hover": { color: "#039be5" } }}>
                <ListItemText primary="N3: Die Module" />
              </ListItem>
            </Link>
            <List sx={{ pl: 4 }}>
              <Link to="/pagethree">
                <ListItem button sx={{ ":hover": { color: "#039be5" } }}>
                  <ListItemText primary="N3.1: Waldmanagement" />
                </ListItem>
              </Link>
              <Link to="/pagefour">
                <ListItem button sx={{ ":hover": { color: "#039be5" } }}>
                  <ListItemText primary="N3.2: Holzbereitstellung" />
                </ListItem>
              </Link>
              <Link to="/pagefive">
                <ListItem button sx={{ ":hover": { color: "#039be5" } }}>
                  <ListItemText primary="N3.3: Holzverwendung" />
                </ListItem>
              </Link>
            </List>
            <Divider />
            <Link to="/pagesix">
              <ListItem button sx={{ ":hover": { color: "#039be5" } }}>
                <ListItemText primary="N4: InnoForum Wald und Holz" />
              </ListItem>
            </Link>
            <Divider />
            <Link to="/pageseven">
              <ListItem button sx={{ ":hover": { color: "#039be5" } }}>
                <ListItemText primary="N5: Projektkonsortium" />
              </ListItem>
            </Link>
            <Divider />
            <Link to="/pageeight">
              <ListItem button sx={{ ":hover": { color: "#039be5" } }}>
                <ListItemText primary="N6: REGULUS" />
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
