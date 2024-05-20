import React from "react";
import { Link } from "react-router-dom";
import { Box, Typography } from "@mui/material";

import adapt from "./../../assets/final_wortbildmarke_adaptwaldholz_2023.jpg";
import image3 from "./../../assets/page3.jpg";
import Footer from "./Footer";

const PageThree = () => {
  return (
    <div className=" w-full ml-24 pr-24 mb-8">
      <Link to="/">
        <img src={adapt} alt="adapt" className="w-80" />
      </Link>
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
          Page3-title: InnoFoum Wald und Holz
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            borderRadius: 5,
          }}
        >
          <img src={image3} alt="image3" className="max-h-[700px] rounded-md" />
        </Box>
      </Box>
      <Box
        sx={{ display: "flex", flexDirection: "column", gap: 2, marginY: 6 }}
      >
        <Typography variant="h6" sx={{ textAlign: "justify" }}>
          Page3-P1: Das regionale Forschungscluster Wald-Holz am Standort
          Eberswalde liefert durch seine Vernetzung mit Schlüsselakteuren der
          brandenburgischen Wald- und Holzwirtschaft die Basis für erfolgreichen
          Wissenstransfer und damit für eine Transformation der Wald- und
          Holzwirtschaft.
        </Typography>
        <Typography variant="h6" sx={{ textAlign: "justify" }}>
          Page3-P2: Mit dem Aufbau eines Innovationsforums (InnoForum Wald und
          Holz), in dem forst- und holzwirtschaftliche mit nicht-forstlichen
          Akteuren zusammenarbeiten, wird eine transfer-freundliche Umgebung
          langfristig in der Region etabliert. Dabei werden Rahmenbedingungen
          für eine übertragbare, kohärente Strategie zur Lenkung der Stoffströme
          von Holz entwickelt. Zielgröße ist der größtmögliche
          volkswirtschaftliche und ökologische Nutzen, vor allem für die in den
          nächsten zwei bis drei Jahrzehnten in Brandenburg weiterhin
          dominierende Waldkiefer. Im InnoForum Wald und Holz werden die
          gewonnenen Erkenntnisse mit Akteuren der Wald- und Holzwirtschaft
          sowie weiteren Interessensgruppen diskutiert, während gleichzeitig
          Forschungs- und Diskussionsbedarfe der Praxisakteure in das Vorhaben
          transdisziplinär zurückgeführt und dort integriert und bearbeitet
          werden..
        </Typography>
      </Box>

      {/*  <Box>
        <Typography variant="h5" sx={{ marginY: 3, fontWeight: "bold" }}>
          Page3-Subtitle2:
        </Typography>
        <Box
          sx={{ display: "flex", flexDirection: "column", gap: 2, marginY: 4 }}
        ></Box>
      </Box> */}
      <Footer />
    </div>
  );
};

export default PageThree;
