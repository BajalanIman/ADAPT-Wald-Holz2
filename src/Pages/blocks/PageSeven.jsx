import React from "react";
import { Link } from "react-router-dom";
import { Box, Typography } from "@mui/material";

import adapt from "./../../assets/final_wortbildmarke_adaptwaldholz_2023.jpg";
import image7 from "./../../assets/page7.jpg";
import Footer from "./Footer";

const PageSeven = () => {
  return (
    <Box className="w-full ml-24 pr-24 mb-8">
      <Link to="/">
        <img src={adapt} alt="adapt" className="w-80" />
      </Link>
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
        Konzepte zukünftiger Holzverwendung im Hinblick auf eine regionale
        Ressourcen-Bereitstellung
      </Typography>

      <Box sx={{ display: "flex", justifyContent: "center", marginY: 8 }}>
        <img
          src={image7}
          alt="image7"
          className="max-h-[700px] sm:full md:w-4/5 rounded-md"
        />
      </Box>
      <Box
        sx={{ display: "flex", flexDirection: "column", gap: 2, marginY: 4 }}
      >
        <Typography variant="h6" sx={{ textAlign: "justify" }}>
          Page7-P1: Mit dem Anspruch der langjährigen C-Bindung und einer
          Kaskadennutzung wird eine Nutzung der Hölzer in langfristigen
          Produkten, insbesondere im Holzbau angestrebt und die Wiederverwendung
          und -verwertung nach der Lebensdauer mitgedacht.
        </Typography>
        <Typography variant="h6" sx={{ textAlign: "justify" }}>
          Page7-P2: Wesentliche Einflussfaktoren auf physikalische Eigenschaften
          sind die Holzart sowie Standort- und Klimafaktoren während des
          Baumwachstums. An Bäumen des Waldreallabors sollen insbesondere
          Astigkeit, Faserverläufe, Dichten, Jahrringbreiten, Früh-, Spät- und
          Druckholzanteile sowie Zellulosefibrillenwinkel untersucht werden, die
          für die Mechanik, aber auch für das Quell- und Schwindverhalten eine
          zentrale Rolle spielen. Dabei werden die Einflüsse der jeweiligen
          Umweltbedingungen im Waldreallabor sowie des Standortes und der
          Wuchsform erfasst und mit den gewonnenen Kennwerten in Bezug gesetzt
          werden (
          <Link to="/pagefive" style={{ color: "#4169E1" }}>
            Schnittstelle Modul A{" "}
          </Link>
          und{" "}
          <Link to="/pagesix" style={{ color: "#4169E1" }}>
            Modul B
          </Link>
          ).
        </Typography>
        <Typography variant="h6" sx={{ textAlign: "justify" }}>
          Page7-P3: Basierend auf der Materialanalyse des ganzen Baumes werden
          neben den hochwertigen Segmenten für den Holzbau auch innovative
          Produkte aus Restholz und Rinde entwickelt: im Rahmen von
          Studierenden- und Promotionsprojekten werden experimentelle
          architektonische Anwendungsmöglichkeiten für das Material des gesamten
          Baumes untersucht und ggf. mit materialwissenschaftlichen Methoden
          ergänzt.
        </Typography>
        <Typography variant="h6" sx={{ textAlign: "justify" }}>
          Page7-P4: Basierend auf der Materialanalyse des ganzen Baumes werden
          neben den hochwertigen Segmenten für den Holzbau auch innovative
          Produkte aus Restholz und Rinde entwickelt: im Rahmen von
          Studierenden- und Promotionsprojekten werden experimentelle
          architektonische Anwendungsmöglichkeiten für das Material des gesamten
          Baumes untersucht und ggf. mit materialwissenschaftlichen Methoden
          ergänzt.
        </Typography>
        <Typography variant="h6" sx={{ textAlign: "justify" }}>
          Page7-P5: Um zu einer effizienteren Nutzung des Rohstoffes Kiefer zu
          gelangen, ist es notwendig, dass die Kiefer in ihren
          Festigkeitseigenschaften, die von den Wuchsmerkmalen abhängen,
          untersucht (standortabhängig) und beschrieben wird. Unter Einbeziehung
          der Strukturanalytik werden praktikable Methoden zur
          Festigkeitssortierung der Kiefer entwickelt. Zusätzlich gilt es in
          diesem Projekt, die Holzbauinitiative Berlin/Brandenburg über den
          Projektergebnissen zu informieren, um die jeweiligen Protagonisten zu
          erreichen. Zusammen mit der Holzbauinitiative und den anderen
          Protagonisten des Projektes werden entsprechende Schulungsmaßnahmen
          für Architektinnen und Architekten sowie Planerinnen und Planer
          entwickelt und in entsprechenden Veranstaltungen der interessierten
          Öffentlichkeit bekannt gegeben.
        </Typography>
      </Box>
      <Footer />
    </Box>
  );
};

export default PageSeven;
