import React from "react";
import adapt from "./../../assets/final_wortbildmarke_adaptwaldholz_2023.jpg";
// import example1 from "./../../assets/example1.jpg";
import imgBl1 from "./../../assets/IMG_1593.jpg";
import { CardMedia, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const BlockOne = () => {
  return (
    <div className="md:my-12">
      <Link to="/">
        <img src={adapt} alt="adapt" className="w-80" />
      </Link>{" "}
      <div className="relative  mt-12 border-2 border-white">
        <CardMedia
          sx={{ height: "500px", borderRadius: 4 }}
          component="img"
          image={imgBl1}
          title="text"
          alt="text"
        />
        <div className="absolute text-white top-44 left-52 translateX-50">
          <Typography variant="h2" sx={{ fontWeight: "bold" }}>
            This is a sample text in the image
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default BlockOne;
