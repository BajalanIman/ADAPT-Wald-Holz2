import React from "react";
import adapt from "./../../assets/final_wortbildmarke_adaptwaldholz_2023.jpg";
import example1 from "./../../assets/example1.jpg";

import { Link, useLocation } from "react-router-dom";
import { Box, Typography } from "@mui/material";

const example = () => {
  const location = useLocation();
  const { state } = location;

  return (
    <div className=" w-full ml-24 pr-24 mb-8">
      <Link to="/">
        <img src={adapt} alt="adapt" className="w-80" />
      </Link>
      <Box>
        <Typography variant="h2" sx={{ marginY: 10, fontWeight: "bold" }}>
          Das Waldlabor Oberrhein
        </Typography>
        <img src={example1} alt="example1" className="max-h-[500px] w-full" />
      </Box>
    </div>
  );
};

export default example;
