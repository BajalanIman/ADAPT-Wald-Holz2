import React from "react";
import { Link } from "react-router-dom";
import { Box, CardMedia, Typography } from "@mui/material";

import image3 from "./../../assets/page3.jpg";
import Footer from "./Footer";
import TopLogo from "./TopLogo";
import SidbarMobileHandler from "../SidbarMobileHandler";

const PageThree = () => {
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
          Page3-title: InnoFoum Wald und Holz
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            marginY: 4,
          }}
        >
          <CardMedia
            component="img"
            src={image3}
            alt="example1"
            sx={{
              height: { xs: "200px", md: "500px" },
              width: "full",
              borderRadius: 0,
            }}
          />
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          my: 4,
        }}
      >
        <Typography
          variant="body2"
          sx={{ textAlign: { md: "justify" }, mb: 1 }}
        >
          Page3-P1: Das regionale Forschungscluster Wald-Holz am Standort
          Eberswalde liefert durch seine Vernetzung mit Schlüsselakteuren der
          brandenburgischen Wald- und Holzwirtschaft die Basis für erfolgreichen
          Wissenstransfer und damit für eine Transformation der Wald- und
          Holzwirtschaft.
        </Typography>
        <Typography
          variant="body2"
          sx={{ textAlign: { md: "justify" }, mb: 1 }}
        >
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
      <Footer />
    </div>
  );
};

export default PageThree;
