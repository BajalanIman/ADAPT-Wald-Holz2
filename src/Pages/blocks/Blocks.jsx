import React, { useEffect, useState } from "react";
import BlockOne from "./BlockOne";
import BlockTwo from "./BlockTwo";
import { Box } from "@mui/material";
import CostumData from "./CostumData";
import Footer from "./Footer";

const Blocks = () => {
  return (
    <div className=" w-full ml-24 pr-24 mb-8">
      <BlockOne />
      <Box
        sx={{
          display: { xs: "flex", md: "grid" },
          gridTemplateColumns: "repeat(auto-fit, minmax(50%, 1fr))",
          width: "100%",
        }}
      >
        {CostumData.map((e, index) => (
          <div
            key={e.id}
            className={`${
              index % 2 === 0
                ? "w-full border border-t-0 border-l-0 border-r-2 pt-10 border-b-3 border-gray-300"
                : "w-full border border-t-0 border-r-0 border-b-3 pt-10 border-gray-300"
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
