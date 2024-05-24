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
  const imageStyle = {
    width: "100px",
    height: "100px",
    objectFit: "contain",
  };

  return (
    <Box sx={{ mt: 10, pb: 5, px: { xs: 2, md: 0 } }}>
      <Divider />
      <Grid container spacing={4} justifyContent="center" sx={{ py: 6 }}>
        <Grid item xs={6} sm={4} md={2}>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <img
              src={hnee}
              alt="hnee"
              style={{ width: "180px", height: "140px", objectFit: "contain" }}
            />
          </Box>
        </Grid>
        <Grid item xs={6} sm={4} md={2}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <img
              src={lefForst}
              alt="lefForst"
              style={{ width: "150px", height: "150px", objectFit: "contain" }}
            />
          </Box>
        </Grid>
        <Grid item xs={12} sm={4} md={2}>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <img
              src={regulus}
              alt="regulus"
              style={{ width: "170px", height: "150px", objectFit: "contain" }}
            />
          </Box>
        </Grid>
        <Grid item xs={6} sm={4} md={2}>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <img
              src={zalf}
              alt="zalf"
              style={{ width: "100px", height: "140px", objectFit: "contain" }}
            />
          </Box>
        </Grid>
        <Grid item xs={12} sm={4} md={3}>
          <Box sx={{ textAlign: "center" }}>
            <img
              src={bmfFONA}
              alt="FONA"
              style={{ width: "180px", height: "140px", objectFit: "contain" }}
            />
          </Box>
        </Grid>
      </Grid>
      <Divider />
      <Grid container spacing={4} justifyContent="center" sx={{ py: 3 }}>
        <Grid item xs={12} sm={4} md={3}>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <img
              src={bmbfGefördert}
              alt="bmbfGefördert"
              style={{ width: "180px", height: "140px", objectFit: "contain" }}
            />
          </Box>
        </Grid>
        <Grid item xs={6} sm={4} md={3}>
          <Box sx={{ display: "flex", justifyContent: "start" }}>
            <img
              src={mpl}
              alt="mpl"
              style={{ width: "300px", height: "140px", objectFit: "contain" }}
            />
          </Box>
        </Grid>
        <Grid item xs={6} sm={4} md={2}>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <img
              src={thuenen}
              alt="thuenen"
              style={{ width: "180px", height: "140px", objectFit: "contain" }}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
