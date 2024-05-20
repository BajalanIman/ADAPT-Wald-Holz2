import Footer from "./Footer";
import adapt from "./../../assets/final_wortbildmarke_adaptwaldholz_2023.jpg";

import React from "react";
import { Typography, Box, Link } from "@mui/material";

const Imprint = () => {
  return (
    <div className=" w-full ml-24 pr-24 mb-8">
      <Box sx={{ textAlign: "center", mt: 4 }}>
        <Link to="/">
          <img src={adapt} alt="adapt" className="w-80" />
        </Link>
      </Box>

      <Box mt={5}>
        <Typography variant="h5" gutterBottom>
          Haftungshinweis
        </Typography>
        <Typography variant="body1" gutterBottom>
          Wir bemühen uns, auf unserer Website richtige, aktuelle und
          vollständige Informationen bereit zu stellen und behalten uns vor, die
          Informationen jederzeit ohne vorherige Ankündigung zu ändern oder zu
          ergänzen.
          <br />
          Wir übernehmen keine Gewähr für die Aktualität, Richtigkeit und
          Vollständigkeit der Informationen. Dies gilt auch für die Inhalte
          externer Websites, auf die in dieser Website über Hyperlinks direkt
          oder indirekt verwiesen wird und auf deren Inhalt und Gestaltung wir
          keinen Einfluss haben.
          <br />
          Der Inhalt dieser Website ist urheberrechtlich geschützt. Er darf frei
          verwendet werden, solange der Verfasser und die Quelle eindeutig
          benannt werden und ein Backlink zur Quelle{" "}
          <Link
            href="http://www.Wald-Reallabor.de"
            target="_blank"
            rel="noopener"
          >
            www.Wald-Reallabor.de
          </Link>
          im Rahmen der Verwendung angebracht wird.
        </Typography>
        <Box sx={{}}>
          <Typography variant="h4" gutterBottom>
            Impressum
          </Typography>
          <Typography variant="body1" gutterBottom>
            <strong>ADAPT-Wald-Holz</strong>
            <br />
            Dr. Ferréol Berendt
            <br />
            Hochschule für nachhaltige Entwicklung Eberswalde
            <br />
            Schicklerstr. 5<br />
            16225 Eberswalde
            <br />
            Tel. +49 761 203-3681
            <br />
          </Typography>
          <Typography variant="body1" gutterBottom>
            Verantwortliche für die Website: Ferréol Berendt
            <br />
            Kontakt per <Link href="mailto:email@example.com">E-Mail</Link>
          </Typography>
        </Box>
      </Box>
      <Footer />
    </div>
  );
};

export default Imprint;
