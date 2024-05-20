import React, { useEffect, useState } from "react";
import BlockOne from "./BlockOne";
import BlockTwo from "./BlockTwo";
import { Box } from "@mui/material";
import CostumData from "./CostumData";
import Footer from "./Footer";

const Blocks = () => {
  return (
    <div className=" w-full lg:ml-24 lg:pr-24 mb-8">
      <BlockOne />
      <Box
        sx={{
          display: { xs: "flex", md: "grid" },
          justifyItems: "center",
          alignContent: "center",
          flexDirection: "column",
          gridTemplateColumns: "repeat(auto-fit, minmax(50%, 1fr))",
          width: { xs: "170%", md: "100%" },
        }}
      >
        {CostumData.map((e, index) => (
          <div
            key={e.id}
            className={`${
              index % 2 === 0
                ? "w-full border md:border-t-0 md:border-l-0 md:border-r-2 pt-5 md:border-b-3 md:border-gray-300"
                : "w-full border md:border-t-0 md:border-r-0 md:border-b-3 pt-5 md:border-gray-300"
            }
                ${
                  index === CostumData.length - 1 ||
                  index === CostumData.length - 2
                    ? "border-b-0"
                    : ""
                }
                `}
          >
            <BlockTwo data={e} index={index} />
          </div>
        ))}
      </Box>
      <Footer />
    </div>
  );
};

export default Blocks;
