import { Box, Divider } from "@mui/material";
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
    <Box
      sx={{
        marginTop: 20,
        paddingBottom: { md: "40px" },
        paddingX: { xs: "20px", md: "0px" },
      }}
    >
      <Divider></Divider>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          paddingY: "60px",
        }}
      >
        <img src={hnee} alt="hnee" className=" w-64 h-28 mt-10 ml-8" />
        <img src={lefForst} alt="lefForst" className=" w-44 ml-8" />
        <img src={thuenen} alt="thuenen" className=" w-64 h-28 mt-10 ml-8" />
        <img src={zalf} alt="zalf" className=" w-86 h-32 mt-6 pl-10" />
        <img src={mpl} alt="mpl" className=" w-84 h-28 mt-10 ml-8" />
      </Box>
      <Divider></Divider>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          paddingY: "30px",
        }}
      >
        <img src={bmbfGefördert} alt="bmbfGefördert" className="h-56" />
        <img src={bmfFONA} alt="FONA" className="h-56" />
        <img src={regulus} alt="regulus" className="h-48" />
      </Box>
    </Box>
  );
};

export default Footer;
