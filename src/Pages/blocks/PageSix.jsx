import React from "react";
import adapt from "./../../assets/final_wortbildmarke_adaptwaldholz_2023.jpg";
import image6 from "./../../assets/page6.png";
import Footer from "./Footer";

import { Link } from "react-router-dom";
import { Box, Typography } from "@mui/material";

const PageSix = () => {
  return (
    <Box sx={{ width: "100%", px: { xs: 2, sm: 4, md: 6, lg: 8 }, mb: 8 }}>
      <Box sx={{ textAlign: "center", mt: 4 }}>
        <Link to="/">
          <img src={adapt} alt="adapt" className="w-60" />
        </Link>
      </Box>
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
        Holzernte-, Holzlogistik- und Datenaustauschkonzepte für die
        Holzbereitstellungskette
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "center", my: 4 }}>
        <Box
          component="img"
          src={image6}
          alt="image6"
          sx={{
            maxHeight: { xs: "60vh", md: "70vh", lg: "70vh" },
            width: "100%",
            objectFit: "contain",
          }}
        />
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2, my: 4 }}>
        <Typography variant="h6" sx={{ textAlign: "justify", mb: 2 }}>
          Page6-P1: Kernstück der Bemühungen zur Optimierung der
          Rohstoffversorgung und des zugehörigen Datenaustauschs sowie zur
          Erhöhung von Transparenz und Vertrauen zwischen der Wald- und der
          Holzwirtschaft ist der Entwurf einer geeigneten interoperablen
          (Infra-)Struktur für Datenaustausch und Datenanalyse (i.W. Plattform).
          Als Bindeglied zwischen dem Waldmanagement (
          <Link to="/pagefive" style={{ color: "#4169E1" }}>
            Schnittstelle Modul A
          </Link>
          ) und der Holzverwendung (
          <Link to="/pageseven" style={{ color: "#4169E1" }}>
            Schnittstelle Modul C
          </Link>
          ) sollen relevante Daten aller Akteure gleichermaßen erfasst werden.
          Neben generierten Daten aus der Holzernte und -logistik (z. B.
          Holzvermessung) verbindet die Plattform insbesondere Daten aus dem
          digitalen Waldmonitoring und der Waldbewirtschaftung (
          <Link to="/pagefive" style={{ color: "#4169E1" }}>
            Schnittstelle Modul A
          </Link>
          ) sowie der Materialcharakterisierung (
          <Link to="/pageseven" style={{ color: "#4169E1" }}>
            Schnittstelle Modul C
          </Link>
          ).
        </Typography>
        <Typography variant="h6" sx={{ textAlign: "justify", mb: 2 }}>
          Page6-P2: Es werden relevante Elemente der Holzbereitstellungskette
          detailliert untersucht und optimiert. So sollen die
          Einsatzmöglichkeiten von teilmechanisierten Holzernteverfahren unter
          wissenschaftlicher Begleitung tiefgehend untersucht und beispielhaft
          umgesetzt werden. Unter Zugrundelegung des Waldreallabor-Ansatzes
          werden auf dieser Basis in Abstimmung und unter maßgeblicher
          Beteiligung der Praxispartner des Projekts Holzernteansätze entwickelt
          und neue Einsatzbereiche in die Praxis umgesetzt. Diese Konzepte
          werden im praktischen Forstbetrieb umgesetzt und wissenschaftlich
          mittels Zeitstudien, ökonomischen Begleituntersuchungen und
          ergonomische Untersuchungen ganzheitlich analysiert.
        </Typography>
      </Box>
      <Footer />
    </Box>
  );
};

export default PageSix;
