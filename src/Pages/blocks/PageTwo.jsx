import React from "react";
import adapt from "./../../assets/final_wortbildmarke_adaptwaldholz_2023.jpg";
import image2 from "./../../assets/page2.png";
import Footer from "./Footer";

import { Link } from "react-router-dom";
import { Box, CardMedia, Typography, colors } from "@mui/material";
import TopLogo from "./TopLogo";
import SidbarMobileHandler from "../SidbarMobileHandler";

const PageTwo = () => {
  return (
    <div className="w-full ml-4 md:ml-24 pr-4 md:pr-24 mb-8">
      <SidbarMobileHandler />
      {/* <TopLogo /> */}
      <Box>
        <Typography
          variant="h5"
          sx={{
            my: { xs: 4, md: 8 },
            fontWeight: "bold",
            color: "#2b2b2b",
            textAlign: { xs: "center", md: "start" },
          }}
        >
          Page2-title: Die Module
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center", my: 4 }}>
          <CardMedia
            component="img"
            src={image2}
            alt="example1"
            sx={{
              maxHeight: { xs: "45vh", md: "50vh", lg: "50vh" },
              width: "100%",
              objectFit: "contain",
            }}
          />
        </Box>
      </Box>
      <Box
        sx={{ display: "flex", flexDirection: "column", gap: 2, marginY: 4 }}
      >
        <Typography
          variant="body2"
          sx={{ textAlign: { md: "justify" }, mb: 1 }}
        >
          Page2-P1: Das innovative, regionale Forschungscluster Klima-Wald-Holz
          entsteht am Waldcampus Eberswalde. Alle Verbundpartner bringen ihre
          komplementären Kompetenzen in das Forschungscluster und die
          Innovationsgruppe ein und kooperieren in transdisziplinär
          zusammengesetzten Modulen. Die Vernetzung von Akteur*innen und von
          Daten nimmt dabei eine zentrale Rolle ein. Die geplanten
          Forschungsarbeiten sind in drei Hauptmodule unterteilt {""}
          <Link
            to="pagefive"
            style={{
              color: "#4169E1",
            }}
          >
            {""}(A) Adaptives Waldmanagement,
          </Link>
          <Link
            to="pagesix"
            style={{
              color: "#4169E1",
            }}
          >
            {""} (B) Holzernte, Logistik und Datenvernetzung sowie,{""}
          </Link>
          <Link
            to="pageseven"
            style={{
              color: "#4169E1",
            }}
          >
            {""} (C) Neuartige Holzverwendung {""}
          </Link>
          im Bauwesen.
        </Typography>
      </Box>
      <Footer />
    </div>
  );
};

export default PageTwo;
