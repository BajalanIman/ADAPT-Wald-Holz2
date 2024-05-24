import React from "react";
import image5 from "./../../assets/page5.jpg";
import Footer from "./Footer";

import { Link } from "react-router-dom";
import { Box, CardMedia, Typography } from "@mui/material";
import TopLogo from "./TopLogo";
import SidbarMobileHandler from "../SidbarMobileHandler";

const PageFive = () => {
  return (
    <Box className="w-full ml-4 md:ml-24 pr-4 md:pr-24 mb-8">
      <SidbarMobileHandler />
      {/* <TopLogo /> */}
      <Typography
        variant="h5"
        sx={{
          my: { xs: 4, md: 8 },
          fontWeight: "bold",
          color: "#2b2b2b",
          textAlign: { xs: "center", md: "start" },
        }}
      >
        Potenziale und Grenzen eines adaptiven Waldmanagements in Brandenburg
        unter Berücksichtigung der zukünftig erforderlichen Ökosystemleistungen
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          marginY: 4,
        }}
      >
        <Typography
          variant="body2"
          sx={{ textAlign: { md: "justify" }, mb: 1 }}
        >
          Page5-P1: Ziel des Moduls ist die Erprobung und Analyse adaptiver
          Waldmanagement-Verfahren zur Umsetzung des ökologischen Waldumbaus von
          Kiefernreinbeständen in biodiverse und resiliente Misch- und
          Laubwaldbestände.
        </Typography>
        <Typography
          variant="body2"
          sx={{ textAlign: { md: "justify" }, mb: 1 }}
        >
          Page5-P2: Hierzu erfolgt der Aufbau eines regionalen Waldreallabors
          mit verschiedenen Strukturen und Altersgruppen der Kiefernwälder in
          Brandenburg. Auf der ca. 30 ha großen Kernfläche des Waldreallabors in
          der Schorfheide (Nordostbrandenburg) werden anhand real umgesetzter
          sowie simulierter Behandlungsvarianten (Variationen in
          Eingriffsstärke, -turnus, räumlichem Strukturdesign,
          Verjüngungssteuerung etc.) die Effekte unterschiedlicher, zuvor
          definierter und simulierter Managementszenarien auf die
          Bestandesvitalität und –produktivität, auf Holzernteverfahren
          (Schnittstelle Modul B) sowie auf Holzqualität und -quantität
          (Schnittstelle Modul C) und auf zukünftig relevante
          Waldökosystemleistungen in der Region Brandenburg-Berlin analysiert.
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center", my: 4 }}>
          <CardMedia
            component="img"
            src={image5}
            alt="image5"
            sx={{
              height: { xs: "200px", md: "500px" },
              width: "full",
              borderRadius: 0,
            }}
          />
        </Box>
        <Typography
          variant="body2"
          sx={{ textAlign: { md: "justify" }, mb: 1 }}
        >
          Page5-P3: Die auf der Kernfläche des Waldreallabors implementierten
          Managementszenarien bzw. die enthaltenen waldbaulichen Strategien
          werden durch kommunale und private Partnerbetriebe wiederholt, in
          ihrer Praxistauglichkeit analysiert und mit den Ergebnissen aus der
          Kernfläche verglichen und bewertet. Das Zusammenspiel der Kernfläche
          des Projektes mit den Satellitenflächen der Partnerbetriebe stellt das
          Waldreallabor als Ganzes dar. Zusätzlich werden im sogenannten
          „Praxisnetzwerk“, das über Dachverbände und Netzwerke eine größere
          Zahl von Stakeholdern im Bereich Wald und Forst erreicht,
          Waldbesitzende in geringerer Intensität und Frequenz am Projekt
          beteiligt.
        </Typography>
        <Typography
          variant="body2"
          sx={{ textAlign: { md: "justify" }, mb: 1 }}
        >
          Page5-P4: Die Daten der Messungen des Bestandesklimas, der
          Bodenfeuchte und -temperatur, Ansprachen der Zersetzung der Streu, der
          Totholz- und Vegetationsaufnahmen sowie der Verjüngung werden
          ausgewertet. Diese Erhebungen lassen Auswirkung der
          Nutzungsintensitäten auf Klima, Biodiversität und Wasserbereitstellung
          zu und werden mit Wiederholungsaufnahmen am Boden und der
          Zeitreihenanalysen aus Fernerkundungsdaten kombiniert. Zusätzlich
          werden die erhobenen Daten in das Waldwachstumsmodell BWINPro
          eingebunden um dieses weiterzuentwickeln.
        </Typography>
        <Typography
          variant="body2"
          sx={{ textAlign: { md: "justify" }, mb: 1 }}
        >
          Page5-P5: Die unterschiedlichen Waldbestände im Reallabor werden mit
          einem tragbaren SLAM-LiDAR-Scanner (PLS) vom Boden und mit einem
          RTK-UAV aus der Luft digital erfasst und diese digitalen
          Vollinventurdaten den weiteren Arbeitspaketen im Projekt zur Verfügung
          gestellt. Dabei liefert der PLS hochaufgelöste (~1cm) Punkte-wolken
          des Stammbereichs, der Bodenvegetation und der unteren Krone. Die
          Punktewolken der UAV-Aufnahmen komplettieren den oberen Kronenbereich
          und dienen zur Georeferenzierung der gesamten 3D Punktewolke. Durch
          Wiederholungs-aufnahmen nach den durchgeführten
          Bewirtschaftungsmaßnahmen werden die Punktewolken um eine temporale
          Dimension erweitert (4D-Punktewolken). Diese ermöglichen die Analyse
          und Visualisierung von Zuwachs und Kronendynamiken, sowie
          Verjüngungsmonitoring innerhalb der 4D Punktewolken anhand noch zu
          entwickelnder digitaler Algorithmik.
        </Typography>
      </Box>
      <Footer />
    </Box>
  );
};

export default PageFive;
