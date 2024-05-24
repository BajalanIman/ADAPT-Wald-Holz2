import React, { useEffect, useState } from "react";
import BlockOne from "./BlockOne";
import BlockTwo from "./BlockTwo";
import { Box } from "@mui/material";
import CostumData from "./CostumData";
import Footer from "./Footer";
import BodyBlock from "./BodyBlock";

const Blocks = () => {
  return (
    <div className="w-full ml-4 md:ml-24 pr-4 md:pr-24 mb-8">
      <BlockOne />
      <Box
        sx={{
          display: { xs: "flex", lg: "grid" },
          justifyItems: "center",
          alignContent: "center",
          flexDirection: { xs: "column", lg: "unset" },
          gridTemplateColumns: "repeat(auto-fit, minmax(50%, 1fr))",
          width: "100%",
        }}
      >
        {CostumData.map((e, index) => (
          <div
            key={e.id}
            className={`${
              index % 2 === 0
                ? "w-full border md:border-t-0 md:border-l-0 md:border-r-2 pt-5 md:border-b-3 md:border-gray-300 "
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
            {/* <BlockTwo data={e} index={index} /> */}
            <BodyBlock data={e} index={index} />
          </div>
        ))}
      </Box>
      <Footer />
    </div>
  );
};

export default Blocks;
