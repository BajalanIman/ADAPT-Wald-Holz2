import React from "react";
import adapt from "./../../assets/final_wortbildmarke_adaptwaldholz_2023.jpg";
import example1 from "./../../assets/example1.jpg";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const PageOne = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isMediumScreen = useMediaQuery(theme.breakpoints.between("sm", "md"));

  return (
    <Box
      sx={{
        width: "100%",
        padding: isSmallScreen ? 2 : isMediumScreen ? 4 : 6,
        mb: 8,
      }}
    >
      <Link to="/">
        <img
          src={adapt}
          alt="adapt"
          style={{ width: isSmallScreen ? "100px" : "200px" }}
        />
      </Link>
      <Box>
        <Typography
          variant={isSmallScreen ? "h4" : "h2"}
          sx={{
            my: 4,
            fontWeight: "bold",
            color: "#2b2b2b",
            textAlign: { xs: "center", md: "start" },
            fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem", lg: "3rem" },
          }}
        >
          Page1-title: Die Projektidee
        </Typography>
        <img
          src={example1}
          alt="example1"
          style={{ maxHeight: "500px", width: "100%", objectFit: "cover" }}
        />
      </Box>
      <Box sx={{ marginY: 4 }}>
        <Typography variant="h6" sx={{ textAlign: "justify", marginBottom: 2 }}>
          Page1-P1: Im Projekt ADAPT-Wald-Holz wird ein adaptives, also
          anpassungsfähiges, Wald-Holz-Managementsystem für die Region
          Brandenburg-Berlin am Beispiel der Waldkiefer entwickelt. Im Fokus
          steht eine ökosystem- und ressourcenschonende regionale
          Wertschöpfungskette – von der Waldbewirtschaftung über die
          Holzbereitstellung bis zur Holzverarbeitung. Im transdisziplinären
          Innovationsforum werden gemeinsam mit der Praxis Forschungsbedarfe
          identifiziert, bearbeitet und Ergebnisse der Öffentlichkeit
          vermittelt.
        </Typography>
        {/* Additional paragraphs can be included here */}
      </Box>

      <Box sx={{ marginY: 4 }}>
        <Typography
          variant={isSmallScreen ? "h6" : "h5"}
          sx={{ marginY: 2, fontWeight: "bold", textAlign: "center" }}
        >
          Page1-Subtitle2: Wälder schützen und Kiefernholz nachhaltig nutzen
        </Typography>
        <Typography variant="h6" sx={{ textAlign: "justify", marginBottom: 2 }}>
          Page1-P2: Die Erhaltung der Wälder und deren erforderliche Anpassung
          an den Klimawandel sind Schlüsselaufgaben im integrativen Klimaschutz.
          Hinzu kommt eine möglichst langfristige Kohlenstoffbindung durch die
          Erhöhung und Verlängerung der stofflichen Nutzung von Holz. Die Region
          Brandenburg-Berlin, mit ihren historisch bedingten kieferndominierten
          Wäldern, ist durch den Klimawandel und die Extremwitterung der letzten
          Jahre besonders gefährdet. Vor dem Hintergrund zurückgehender
          Nadelholzbestände und einer gleichzeitig steigenden Nachfrage nach
          Holz, ist in der Projektregion eine enge Verzahnung von adaptivem
          Waldmanagement und effizienter stofflicher Holznutzung von enormer
          Bedeutung. Dazu wird im Verbundprojekt ADAPT-Wald-Holz ein
          transdisziplinär arbeitendes Wald-Reallabor eingerichtet, um den
          Einfluss unterschiedlicher Waldbewirtschaftungsstrategien auf die
          zentralen Ökosystemleistungen zu untersuchen: Holzproduktion
          (Nutzung), Kohlenstoffbindung (Klimaschutz) sowie Grund- und
          Trinkwasserbereitstellung (Wasserhaushalt). Die regionale
          Wertschöpfung von Kiefernholz im Holzbau soll durch eine möglichst
          passgenaue, kundenspezifische Holzbereitstellung gestärkt werden. Die
          Entwicklung neuer Verwendungsmöglichkeiten für regionale Holzprodukte,
          die Weiterentwicklung von Normen zum konstruktiven Holzbau und der
          Ausbau eines interdisziplinären Dialogs (zwischen Forstwirtschaft,
          Materialwissenschaft, Design, Architektur, Bauingenieurswesen) legen
          den Grundstein, um die Holzbauquote in Berlin-Brandenburg zu steigern.
        </Typography>

        <Typography
          variant={isSmallScreen ? "h6" : "h5"}
          sx={{ marginY: 2, fontWeight: "bold", textAlign: "center" }}
        >
          Page1-Subtitle3: Der Nachwuchs schafft Innovationen
        </Typography>

        <Typography variant="h6" sx={{ textAlign: "justify", marginBottom: 2 }}>
          Page1-P3: Die Innovationsgruppe, bestehend aus wissenschaftlichen
          Nachwuchskräften, wird räumlich zusammengeführt und bildet ein agiles
          transdisziplinäres Forschungsteam. Die Forscherinnen und Forscher
          generieren Werkzeuge, die der Wald- und Holzwirtschaft entlang der
          gesamten Wertschöpfungskette eine Anpassung an die Herausforderungen
          des Klimawandels ermöglichen. Das öffnet neue Wege der Kooperation
          zwischen den Verbundpartnern sowie mit den Praxispartnern. Durch die
          Forschungsumgebung Wald-Reallabor und die räumlich zusammengeführte
          Innovationsgruppe entstehen Synergien zwischen Akteuren der Wald- und
          Holzforschung in Brandenburg. Diese Synergien sind die Grundlage für
          die langfristige Etablierung der Forschungsgruppe und weitere,
          dauerhaft angelegte Forschungs- und Transferaktivitäten.
        </Typography>
      </Box>
      <Footer />
    </Box>
  );
};

export default PageOne;
