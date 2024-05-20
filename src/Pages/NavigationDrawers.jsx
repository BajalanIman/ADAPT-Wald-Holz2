import { Box, Button, Divider, Typography } from "@mui/material";
import DensityMediumIcon from "@mui/icons-material/DensityMedium";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const NavigationDrawers = () => {
  const [sideBarSize, setSideBarSize] = useState(true);

  const showSidebarHandler = () => {
    setSideBarSize(!sideBarSize);
  };
  return (
    <div className=" relative flex justify-start items-start h-screen ">
      <Button
        onClick={showSidebarHandler}
        sx={{
          position: "absolute",
          display: "flex",
          color: "green",
          "&:hover": {
            color: "#4169E1",
            backgroundColor: "white",
          },
          top: 10,
          left: sideBarSize ? "41vh" : "1.5vh",
        }}
      >
        <DensityMediumIcon fontSize="large" />
      </Button>
      {sideBarSize && (
        <Box
          sx={{
            width: "40vh",
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
              borderBottom: "2px dashed gray",
              width: 230,
              paddingBottom: 1,
            }}
          >
            <Typography
              variant="h5"
              sx={{
                fontWeight: "bold",
                paddingBottom: "10px",
                fontFamily: "Lilita One",
                fontWeight: 400,
                fontStyle: "normal",
              }}
            >
              ADAPT-Wald-Holz
            </Typography>
          </Box>
          <Box sx={{ marginY: 3 }}>
            <Link to="pagetwo">
              <Typography
                variant="p"
                sx={{
                  cursor: "pointer",
                  fontFamily: "Merriweather",
                  fontSize: "calc(0.8vw)",
                  fontWeight: "bold",
                  lineHeight: 2,
                  "&:hover": { color: "#4169E1" },
                }}
              >
                N2: Adaptives Waldressourcen-Management für eine zukunftsfähige
                Holzwirtschaft in der Region Brandenburg-Berlin
              </Typography>
            </Link>
          </Box>
          <Divider sx={{ marginRight: "40px" }}></Divider>
          <Box
            sx={{
              marginY: 3,
              width: "230px",
            }}
          >
            <Link to="pagetwo">
              <Typography
                variant="p"
                sx={{
                  fontWeight: "bold",
                  fontSize: "calc(0.8vw)",
                  fontFamily: "Merriweather",
                  "&:hover": { color: "#4169E1" },
                }}
              >
                N3: Die Module
              </Typography>
            </Link>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                pl: 3,
                pt: 2,
                // py: 2,
                gap: 2,
              }}
            >
              <Link to="pagefive">
                <Typography
                  variant="p"
                  sx={{
                    fontFamily: "Merriweather",
                    fontWeight: "bold",
                    fontSize: "calc(0.7vw)",
                    "&:hover": {
                      color: "#4169E1",
                    },
                  }}
                >
                  Waldmanagement
                </Typography>
              </Link>
              <Link to="pagesix">
                <Typography
                  variant="p"
                  sx={{
                    fontFamily: "Merriweather",
                    fontSize: "calc(0.7vw)",
                    fontWeight: "bold",
                    "&:hover": { color: "#4169E1" },
                  }}
                >
                  Holzbereitstellung
                </Typography>
              </Link>
              <Link to="pageseven">
                <Typography
                  variant="p"
                  sx={{
                    fontFamily: "Merriweather",
                    fontSize: "calc(0.7vw)",
                    fontWeight: "bold",
                    "&:hover": { color: "#4169E1" },
                  }}
                >
                  Holzverwendung
                </Typography>
              </Link>
            </Box>
          </Box>

          <Box
            sx={{
              borderTop: "2px solid #C0C0C0",
              marginRight: 6,
              paddingY: 2,
              // paddingX: 2,
            }}
          >
            <Typography
              variant="p"
              sx={{
                fontFamily: "Merriweather",
                fontSize: "calc(0.8vw)",
                fontWeight: "bold",
              }}
            >
              N4: InnoForum Wald und Holz
            </Typography>
          </Box>
          <Box
            sx={{
              borderTop: "2px solid #C0C0C0",
              paddingY: 2,
              marginRight: 6,
            }}
          >
            <Link to="pageeight">
              <Typography
                variant="p"
                sx={{
                  fontFamily: "Merriweather",
                  fontSize: "calc(0.8vw)",
                  fontWeight: "bold",
                  "&:hover": { color: "#4169E1" },
                }}
              >
                N5: Projektkonsortium
              </Typography>
            </Link>
          </Box>
          <Box
            sx={{
              borderTop: "2px solid #C0C0C0",
              marginRight: 6,
              paddingY: 2,
            }}
          >
            <Link to="pagefour">
              <Typography
                variant="p"
                sx={{
                  fontFamily: "Merriweather",
                  fontSize: "calc(0.8vw)",
                  fontWeight: "bold",
                  "&:hover": { color: "#4169E1" },
                }}
              >
                N6: REGULUS
              </Typography>
            </Link>
          </Box>
          <Box
            sx={{
              borderTop: "2px solid #C0C0C0",
              marginRight: 6,
              paddingY: 2,
            }}
          >
            <Link to="imprint">
              <Typography
                variant="p"
                sx={{
                  fontFamily: "Merriweather",
                  fontSize: "calc(0.8vw)",
                  fontWeight: "bold",
                  "&:hover": { color: "#4169E1" },
                }}
              >
                Impressum
              </Typography>
            </Link>
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
