import { Box, Divider, Grid } from "@mui/material";
import React from "react";
import bmbfGefördert from "./../../assets/BMBF_gefördert_deutsch.jpg";
import bmfFONA from "./../../assets/BMBF_FONA_Logo_4c.jpg";
import zalf from "./../../assets/logo-zalf-deutsch.jpg";
import lefForst from "./../../assets/LFE forst_logo_4c_normal_lang.jpg";
import hnee from "./../../assets/HNEE_Logo_Dt_gruen.jpg";
import thuenen from "./../../assets/THUENEN_PRINT_CMYK.jpg";
import mpl from "./../../assets/MPI_Logo_Kolloid-und Grenzflächenforschung_DE_CMYK_black.jpg";
import regulus from "./../../assets/logo-regulus_mit_subline.png";

const Footer = () => {
  return (
    <Box sx={{ mt: 10, pb: 5, px: { xs: 2, md: 0 } }}>
      <Divider />
      <Grid container spacing={4} justifyContent="center" sx={{ py: 6 }}>
        <Grid item xs={6} sm={4} md={2}>
          <Box sx={{ textAlign: "center" }}>
            <img
              src={hnee}
              alt="hnee"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </Box>
        </Grid>
        <Grid item xs={6} sm={4} md={2}>
          <Box sx={{ textAlign: "center" }}>
            <img
              src={lefForst}
              alt="lefForst"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </Box>
        </Grid>
        <Grid item xs={6} sm={4} md={2}>
          <Box sx={{ textAlign: "center" }}>
            <img
              src={thuenen}
              alt="thuenen"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </Box>
        </Grid>
        <Grid item xs={6} sm={4} md={2}>
          <Box sx={{ textAlign: "center" }}>
            <img
              src={zalf}
              alt="zalf"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </Box>
        </Grid>
        <Grid item xs={6} sm={4} md={2}>
          <Box sx={{ textAlign: "center" }}>
            <img
              src={mpl}
              alt="mpl"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </Box>
        </Grid>
      </Grid>
      <Divider />
      <Grid container spacing={4} justifyContent="center" sx={{ py: 3 }}>
        <Grid item xs={12} sm={4} md={3}>
          <Box sx={{ textAlign: "center" }}>
            <img
              src={bmbfGefördert}
              alt="bmbfGefördert"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </Box>
        </Grid>
        <Grid item xs={12} sm={4} md={3}>
          <Box sx={{ textAlign: "center" }}>
            <img
              src={bmfFONA}
              alt="FONA"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </Box>
        </Grid>
        <Grid item xs={12} sm={4} md={3}>
          <Box sx={{ textAlign: "center" }}>
            <img
              src={regulus}
              alt="regulus"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
