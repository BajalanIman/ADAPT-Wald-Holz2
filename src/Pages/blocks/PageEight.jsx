import React from "react";
import adapt from "./../../assets/final_wortbildmarke_adaptwaldholz_2023.jpg";
import image8 from "./../../assets/page8.jpg";
import Footer from "./Footer";

import { Link } from "react-router-dom";
import { Box, Typography } from "@mui/material";

const PageEight = () => {
  return (
    <div className="w-full ml-4 md:ml-24 pr-4 md:pr-24 mb-8">
      <Link to="/">
        <img src={adapt} alt="adapt" className="w-60" />
      </Link>
      <Box>
        <Typography
          variant="h2"
          sx={{
            marginY: { xs: 4, md: 10 },
            fontWeight: "bold",
            color: "#2b2b2b",
            textAlign: { xs: "center", md: "start" },
          }}
        >
          Projektkonsortium
        </Typography>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center", marginY: 8 }}>
        <Box
          component="img"
          src={image8}
          alt="image8"
          sx={{
            maxHeight: { xs: "60vh", md: "70vh", lg: "70vh" },
            width: "100%",
            objectFit: "contain",
          }}
        />
      </Box>
      <Box
        sx={{ display: "flex", flexDirection: "column", gap: 2, marginY: 4 }}
      >
        <Typography variant="h6" sx={{ textAlign: "justify" }}>
          Page8-P1: Das innovative, regionale Forschungscluster entsteht am
          Waldcampus Eberswalde. Federführend verknüpft die{" "}
          <a
            target="_blank"
            className="pointer text-[#4169E1] px-2"
            href="https://www.hnee.de"
          >
            Hochschule für nachhaltige Entwicklung Eberswalde
          </a>{" "}
          (HNEE) die Eberswalder Forschungseinrichtungen HNEE und das
          <a
            target="_blank"
            className="pointer text-[#4169E1] px-2"
            href="https://www.thuenen.de/de/fachinstitute/waldoekosysteme"
          >
            Thünen-Institut für Waldökosysteme
          </a>
          mit den Erfahrungen und Kenntnissen des Wissenstransferpartners LFE
          <a
            target="_blank"
            className="pointer text-[#4169E1] px-2"
            href="https://forst.brandenburg.de/lfb/de/ueber-uns/landeskompetenzzentrum-lfe"
          >
            (Landeskompetenzzentrum Forst Eberswalde)
          </a>
          sowie des
          <a
            target="_blank"
            className="pointer text-[#4169E1] px-2"
            href="https://www.mpikg.mpg.de"
          >
            Max-Planck-Instituts für Kolloid- und Grenzflächenforschung
          </a>
          und des
          <a
            target="_blank"
            className="pointer text-[#4169E1] px-2"
            href="https://www.zalf.de/de/Seiten/ZALF.aspx"
          >
            Leibniz-Zentrums für Agrarlandschaftsforschung (ZALF) e.V.
          </a>
          in einer Innovationsgruppe aus Nachwuchswissenschaftler*innen. Alle
          Verbundpartner bringen ihre komplementären Kompetenzen in das
          Forschungscluster und die Innovationsgruppe ein und kooperieren in
          transdisziplinär zusammengesetzten{" "}
          <Link to="/pagetwo" style={{ color: "#4169E1" }}>
            Modulen
          </Link>
          .
        </Typography>
      </Box>
      <Footer />
    </div>
  );
};

export default PageEight;
