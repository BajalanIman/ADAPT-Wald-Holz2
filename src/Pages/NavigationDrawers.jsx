import { Box, Button, Divider, Typography } from "@mui/material";
import DensityMediumIcon from "@mui/icons-material/DensityMedium";
import React, { useState } from "react";

const NavigationDrawers = () => {
  const [sideBarSize, setSideBarSize] = useState(false);

  const showSidebarHandler = () => {
    setSideBarSize(!sideBarSize);
  };
  return (
    <div className=" relative flex justify-start items-start h-screen">
      <Button
        onClick={showSidebarHandler}
        sx={{
          position: "absolute",
          display: "flex",
          color: "green",
          "&:hover": {
            color: "blue",
            backgroundColor: "white",
          },
          top: 10,
          left: sideBarSize ? "410px" : "15px",
        }}
      >
        <DensityMediumIcon fontSize="large" />
      </Button>
      {sideBarSize && (
        <Box
          sx={{
            width: 400,
            marginTop: 1,
            marginLeft: 1,
            height: "full",
            paddingTop: 3,
            paddingLeft: 3,
            transition: "right 0.5s ease",
            backgroundColor: "lightgray",
          }}
        >
          <Box
            sx={{
              borderBottom: "2px dashed #4169E1",
              width: 230,
              paddingBottom: 1,
            }}
          >
            <Typography
              variant="h5"
              sx={{ fontWeight: "bold", paddingBottom: "10px" }}
            >
              ADAPT-Wald-Holz
            </Typography>
          </Box>
          <Typography
            variant="h6"
            sx={{ marginY: "40px", "&:hover": { color: "blue" } }}
          >
            Klimaangepasste Impulse für das Ökosystem Wald
          </Typography>
          <Divider sx={{ marginRight: "40px" }}></Divider>
          <Box
            sx={{
              marginTop: 6,
              borderBottom: "2px dashed #4169E1",
              width: "200px",
              paddingBottom: 1,
            }}
          >
            <Typography
              variant="h5"
              sx={{
                fontWeight: "bold",
              }}
            >
              Die Teilprojekte
            </Typography>
          </Box>
          <Box sx={{ marginTop: 5, paddingLeft: 4 }}>
            <Box
              sx={{
                borderTop: "2px solid #C0C0C0",
                marginRight: 6,
                paddingY: 1,
              }}
            >
              <Typography>1</Typography>
            </Box>
            <Box
              sx={{
                borderTop: "2px solid #C0C0C0",
                marginRight: 6,
                paddingY: 1,
              }}
            >
              <Typography>2</Typography>
            </Box>
            <Box
              sx={{
                borderTop: "2px solid #C0C0C0",
                marginRight: 6,
                paddingY: 1,
              }}
            >
              <Typography>3</Typography>
            </Box>
            <Box
              sx={{
                borderTop: "2px solid #C0C0C0",
                marginRight: 6,
                paddingY: 1,
              }}
            >
              <Typography>4</Typography>
            </Box>
            <Box
              sx={{
                borderTop: "2px solid #C0C0C0",
                marginRight: 6,
                paddingY: 1,
              }}
            >
              <Typography>5</Typography>
            </Box>
            <Box
              sx={{
                borderTop: "2px solid #C0C0C0",
                marginRight: 6,
                paddingY: 1,
              }}
            >
              <Typography>6</Typography>
            </Box>
            <Button
              sx={{
                border: "3px solid green",
                paddingX: 5,
                paddingY: 1,
                fontWeight: "bold",
                fontSize: 16,
                fontFamily: "sans",
                marginTop: 6,
              }}
            >
              ALLE
            </Button>
          </Box>
        </Box>
      )}
      {!sideBarSize && (
        <Box
          sx={{
            width: 16,
            marginTop: 1,
            height: "100vh",
            transition: "left 0.5s ease",
            paddingTop: 3,
            backgroundColor: "lightgray",
          }}
        ></Box>
      )}
    </div>
  );
};

export default NavigationDrawers;
