import React, { useEffect, useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import DensityMediumIcon from "@mui/icons-material/DensityMedium";
import adapt from "./../assets/final_wortbildmarke_adaptwaldholz_2023.jpg";
import SidebarMobile from "./SidebarMobile";
import { Link } from "react-router-dom";

const SidbarMobileHandler = () => {
  const [open, setOpen] = useState(false);

  const handleopen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Box
        sx={{
          display: { xs: "flex", md: "none" },
          width: "90%",
          px: 3,
          py: 1,
          mt: 1,
          justifyContent: "space-between",
          bgcolor: "lightgray",
          borderRadius: 20,
          boxShadow: "2px 2px 2px",
        }}
      >
        <Link to="/">
          <img
            src={adapt}
            alt="Logo"
            style={{
              cursor: "pointer",
              width: "50px",
              height: "50px",
              height: "auto",
              border: "1px solid gray",
              borderRadius: "100%",
              boxShadow: "2px 1px 3px  darkred",
            }}
          />
        </Link>
        <Button onClick={handleopen}>
          <DensityMediumIcon />
        </Button>
      </Box>
      <SidebarMobile onClose={handleClose} open={open} />
    </>
  );
};

export default SidbarMobileHandler;
