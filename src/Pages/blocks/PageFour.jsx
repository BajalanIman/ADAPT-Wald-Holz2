import React from "react";
import adapt from "./../../assets/final_wortbildmarke_adaptwaldholz_2023.jpg";
import image4 from "./../../assets/page4.jpg";
import Footer from "./Footer";
import TopLogo from "./TopLogo";

import { Link, useLocation } from "react-router-dom";
import { Box, Typography, Grid } from "@mui/material";

const PageFour = () => {
  const location = useLocation();
  const { state } = location;

  return (
    <Box sx={{ width: "100%", px: { xs: 2, sm: 4, md: 6, lg: 8 }, mb: 8 }}>
      <TopLogo />
      {/* <Box sx={{ textAlign: "center", mt: 4 }}>
        <Link to="/">
          <img src={adapt} alt="adapt" className="w-60" />
        </Link>
      </Box> */}
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
        Page4-title: REGULUS
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "center", mb: 8 }}>
        <Box
          component="img"
          src={image4}
          alt="image4"
          sx={{
            maxHeight: { xs: "40vh", md: "40vh", lg: "50vh" },
            width: "100%",
            objectFit: "contain",
          }}
        />
      </Box>
      <Box sx={{ my: 4 }}>
        <Typography variant="h6" sx={{ textAlign: { md: "justify" }, mb: 2 }}>
          Page4-P1: Wälder leisten Herausragendes für unsere Lebensgrundlagen.
          Sie schützen Klima, Wasser und Biodiversität. Sie bieten Erholungsraum
          und liefern mit dem Rohstoff Holz eine Ressource mit zentraler
          Bedeutung für die Wirtschaft. Die aktuellen Herausforderungen für die
          Wälder durch Stürme, Trockenheit und Schädlinge sind mit wachsenden
          und immer vielfältigeren Ansprüchen der Gesellschaft verbunden. In der
          Folge stehen das Waldmanagement und die Holzwirtschaft vor drängenden
          Fragen, die nicht mehr durch sektorale Forschungsansätze bearbeitet
          werden können.
        </Typography>
        <Typography variant="h6" sx={{ textAlign: { md: "justify" }, mb: 2 }}>
          Page4-P2: Daher besteht das zentrale Anliegen der
          <a
            target="_blank"
            className="pointer text-blue-500 px-2"
            href="https://regulus-waldholz.de/ "
          >
            REGULUS -Forschung
          </a>
          darin, inter- und transdisziplinäre Forschung zu stärken und die
          Forschungslandschaft Wald und Holz aktiv zu gestalten, um
          zukunftsweisende Strategien für eine klimaschützende Wald- und
          Holzwirtschaft zu entwickeln. Derzeit wird in Deutschland in zehn
          regionalen
          <a
            target="_blank"
            className="pointer text-blue-500 px-2"
            href="https://regulus-waldholz.de/innovationsgruppen/ "
          >
            REGULUS-Innovationsgruppen
          </a>
          an konkreten Lösungskonzepten für eine nachhaltige und klimaschützende
          Wald- und Holzwirtschaft geforscht. Dabei werden klimaangepasste
          Wald-Holz-Managementsysteme und die Entwicklung multifunktionaler
          Wälder auf Schadflächen, Möglichkeiten zum Erhalt von
          Ökosystemleistungen unter Trockenstress und die stoffliche
          Altholznutzung erforscht. Darüber hinaus werden digitale Instrumente
          entwickelt, um die Dynamiken von Waldökosystemen zu verstehen..
        </Typography>
        <Typography variant="h6" sx={{ textAlign: { md: "justify" }, mb: 2 }}>
          Page4-P3: Derzeit wird in zehn regionalen REGULUS-Innovationsgruppen
          in ganz Deutschland inter- und transdisziplinär geforscht. Die
          unterschiedlichen REGULUS-Innovationsgruppen, zusammengesetzt aus
          verschiedenen Institutionen und Praxispartnern haben die Umsetzbarkeit
          und potenzielle Wirkung ihrer Arbeiten und Ergebnisse im Fokus. Die
          gezielte Förderung von Innovationsprozessen ist ein Merkmal, das durch
          die Vernetzung maßgeblich unterstützt wird. Auf der
          <a
            target="_blank"
            className="pointer text-blue-500 px-2"
            href="https://regulus-waldholz.de/innovationsgruppen/#standortkarte "
          >
            REGULUS-Standortkarte
          </a>
          sind alle Gruppen und die jeweiligen Beteiligungen aufgeführt..
        </Typography>
      </Box>
      <Footer />
    </Box>
  );
};

export default PageFour;
