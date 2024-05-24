import React, { useEffect, useState } from "react";
import BlockOne from "./BlockOne";
import BlockTwo from "./BlockTwo";
import { Box, Button, Typography } from "@mui/material";
import CostumData from "./CostumData";
import Footer from "./Footer";
import BodyBlock from "./BodyBlock";
import SidebarMobile from "../SidebarMobile";
import DensityMediumIcon from "@mui/icons-material/DensityMedium";
import adapt from "./../../assets/final_wortbildmarke_adaptwaldholz_2023.jpg";
import SidbarMobileHandler from "../SidbarMobileHandler";

const Blocks = () => {
  // const [open, setOpen] = useState(false);

  // const handleopen = () => {
  //   setOpen(true);
  // };
  // const handleClose = () => {
  //   setOpen(false);
  // };

  return (
    <div className="w-full ml-4 md:ml-24 pr-4 md:pr-24 mb-8 sm:px-4 md:px-0 flex flex-col items-center">
      <SidbarMobileHandler />
      {/* <Box
        sx={{
          display: { xs: "flex", md: "none" },
          width: "100%",
          paddingx: 10,
          paddingTop: 5,
          justifyContent: "space-between",
        }}
      >
        <img
          src={adapt}
          alt="Logo"
          style={{
            cursor: "pointer",
            width: "50px",
            height: "50px",
            height: "auto",
            border: "1px solid gray",
            borderRadius: "100%",
            boxShadow: "2px 1px 3px  darkred",
          }}
        />
        <Button onClick={handleopen}>
          <DensityMediumIcon />
        </Button>
      </Box>
      <SidebarMobile onClose={handleClose} open={open} /> */}
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
