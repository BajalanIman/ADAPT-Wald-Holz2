import React from "react";
import adapt from "./../../assets/final_wortbildmarke_adaptwaldholz_2023.jpg";
import image2 from "./../../assets/page2.png";

import Footer from "./Footer";

import { Link } from "react-router-dom";
import { Box, Typography, colors } from "@mui/material";

const PageTwo = () => {
  return (
    <Box sx={{ width: "100%", px: { xs: 2, md: 6, lg: 12 }, mb: 8 }}>
      <Box sx={{ textAlign: "center", mt: 4 }}>
        <Link to="/">
          <img src={adapt} alt="adapt" className="w-80" />
        </Link>
      </Box>
      <Box>
        <Typography
          variant="h2"
          sx={{
            my: 4,
            fontWeight: "bold",
            color: "#2b2b2b",
            textAlign: { xs: "center", md: "start" },
            fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem", lg: "3rem" },
          }}
        >
          Page2-title: Die Module
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Box
            component="img"
            src={image2}
            alt="example1"
            sx={{
              maxHeight: { xs: "300px", md: "500px", lg: "700px" },
              width: "100%",
              objectFit: "contain",
            }}
          />
        </Box>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2, my: 4 }}>
        <Typography
          variant="h6"
          sx={{ display: "inline", textAlign: "justify" }}
        >
          Page2-P1: Das innovative, regionale Forschungscluster Klima-Wald-Holz
          entsteht am Waldcampus Eberswalde. Alle Verbundpartner bringen ihre
          komplementären Kompetenzen in das Forschungscluster und die
          Innovationsgruppe ein und kooperieren in transdisziplinär
          zusammengesetzten Modulen. Die Vernetzung von Akteur*innen und von
          Daten nimmt dabei eine zentrale Rolle ein. Die geplanten
          Forschungsarbeiten sind in drei Hauptmodule unterteilt
          <Link to="pagefive">
            <Typography
              variant="h6"
              sx={{
                display: "inline",
                paddingX: 1,
                color: "#4169E1",
              }}
            >
              (A) Adaptives Waldmanagement,
            </Typography>
          </Link>
          <Link to="pagesix">
            <Typography
              variant="h6"
              sx={{
                display: "inline",
                paddingX: 1,
                color: "#4169E1",
              }}
            >
              (B) Holzernte, Logistik und Datenvernetzung sowie,
            </Typography>
          </Link>
          <Link to="pageseven">
            <Typography
              variant="h6"
              sx={{
                display: "inline",
                paddingX: 1,
                color: "#4169E1",
              }}
            >
              (C) Neuartige Holzverwendung
            </Typography>
          </Link>
          im Bauwesen.
        </Typography>
      </Box>
      <Footer />
    </Box>
  );
};

export default PageTwo;
