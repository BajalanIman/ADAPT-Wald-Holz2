import React from "react";
import adapt from "./../../assets/final_wortbildmarke_adaptwaldholz_2023.jpg";
import imgBl1 from "./../../assets/IMG_1593.jpg";
import { CardMedia, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import TopLogo from "./TopLogo";

const BlockOne = () => {
  return (
    <div className="md:my-12">
      {/* <TopLogo /> */}
      <div className="relative mt-12 ml-9 md:ml-0 border-2 border-white w-[680px] md:w-full">
        <CardMedia
          sx={{
            height: { xs: "300px", md: "350px" },
            width: "full",
            paddingX: 3,
            borderRadius: 0,
          }}
          component="img"
          image={imgBl1}
          title="text"
          alt="text"
        />

        <div className="absolute  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <Typography
            variant="h2"
            sx={{
              fontFamily: "Alfa Slab One",
              color: "black",
              opacity: "85%",
              fontSize: { xs: 20, md: 25, lg: 45 },
              WebkitTextStrokeWidth: "1px", // Adjust stroke width
              WebkitTextStrokeColor: "white", // Adjust stroke color
            }}
          >
            ADAPT-Wald-Holz
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default BlockOne;
