import React, { useState } from "react";
import {
  Box,
  Button,
  Divider,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import DensityMediumIcon from "@mui/icons-material/DensityMedium";
import adapt from "./../assets/final_wortbildmarke_adaptwaldholz_2023.jpg";
import { Link } from "react-router-dom";

const NavigationDrawers = () => {
  const [sideBarSize, setSideBarSize] = useState(true); // State to track sidebar size

  const toggleSidebarSize = () => {
    setSideBarSize(!sideBarSize);
  };

  return (
    <Box className="relative flex h-screen transition-all duration-300 ">
      <Box
        sx={{
          position: "fixed",
          display: "flex",
          top: "35px",
          zIndex: 999,
        }}
      >
        {!sideBarSize && (
          <img
            onClick={toggleSidebarSize}
            src={adapt}
            alt="Logo"
            style={{
              cursor: "pointer",
              width: "40px",
              height: "auto",
              border: "1px solid gray",
              borderRadius: "100%",
              boxShadow: "2px 1px 3px  darkred",
            }}
          />

          // <Button
          //   onClick={toggleSidebarSize}
          //   sx={{
          //     color: "green",
          //     backgroundColor: "none",
          //     "&:hover": {
          //       color: "#4169E1",
          //       backgroundColor: "none",
          //     },
          //   }}
          // >
          //   <DensityMediumIcon fontSize="large" />
          // </Button>
        )}
      </Box>
      {/* Sidebar */}
      <Box
        sx={{
          width: sideBarSize ? "380px" : "0", // Adjust sidebar width based on state
          overflowX: "hidden", // Hide overflow when sidebar is closed
          transition: "width 0.5s ease", // Smooth transition for resizing
          position: "fixed",
          top: "10px",
          height: "calc(100% - 20px)", // Take full height of viewport and leave space for the button
          bgcolor: "lightgray",
          boxShadow: 3,
          p: 1,
        }}
      >
        <List sx={{ mt: 0 }}>
          <Box sx={{ display: "flex", my: 2 }}>
            <ListItem>
              <img
                onClick={toggleSidebarSize}
                src={adapt}
                alt="Logo"
                style={{
                  cursor: "pointer",
                  width: "35%",
                  height: "auto",
                  border: "1px solid gray",
                  borderRadius: "100%",
                  boxShadow: "2px 1px 3px  darkred",
                }}
              />
            </ListItem>
            <Button
              onClick={toggleSidebarSize}
              sx={{
                color: "green",
                backgroundColor: "none",
                "&:hover": {
                  color: "#4169E1",
                  backgroundColor: "none",
                },
              }}
            >
              <DensityMediumIcon fontSize="large" />
            </Button>
          </Box>
          {/* <Divider />

          <ListItem button>
            <ListItemText primary="N1: Adapt-wald-holz" />
          </ListItem> */}
          <Divider />
          <Link to="pageone">
            <ListItem button sx={{ ":hover": { color: "#039be5" } }}>
              <ListItemText primary="N2:Adaptives Waldressourcen-Management für eine zukunftsfähige Holzwirtschaft in der Region Brandenburg-Berlin" />
            </ListItem>
          </Link>
          <Divider />
          <Link to="pagetwo">
            <ListItem button sx={{ ":hover": { color: "#039be5" } }}>
              <ListItemText primary="N3: Die Module" />
            </ListItem>
          </Link>
          <List sx={{ pl: 4 }}>
            <Link to="pagefive">
              <ListItem button sx={{ ":hover": { color: "#039be5" } }}>
                <ListItemText primary="N3.1: Waldmanagement" />
              </ListItem>
            </Link>
            <Link to="pagesix">
              <ListItem button sx={{ ":hover": { color: "#039be5" } }}>
                <ListItemText primary="N3.2: Holzbereitstellung" />
              </ListItem>
            </Link>
            <Link to="pageseven">
              <ListItem button sx={{ ":hover": { color: "#039be5" } }}>
                <ListItemText primary="N3.3: Holzverwendung" />
              </ListItem>
            </Link>
          </List>
          <Divider />
          <ListItem button sx={{ ":hover": { color: "#039be5" } }}>
            <ListItemText primary="N4: InnoForum Wald und Holz" />
          </ListItem>
          <Divider />
          <Link to="pageeight">
            <ListItem button sx={{ ":hover": { color: "#039be5" } }}>
              <ListItemText primary="N5: Projektkonsortium" />
            </ListItem>
          </Link>
          <Divider />
          <Link to="pagefour">
            <ListItem button sx={{ ":hover": { color: "#039be5" } }}>
              <ListItemText primary="N6: REGULUS" />
            </ListItem>
          </Link>
          <Divider />
          <Link to="imprint">
            <ListItem button sx={{ ":hover": { color: "#039be5" } }}>
              <ListItemText primary="Impressum" />
            </ListItem>
          </Link>
        </List>
      </Box>
      {/* Main Content */}
      <Box
        sx={{
          flexGrow: 1,
          p: 1,
          marginLeft: sideBarSize ? "380px" : "0",
          transition: "margin-left 0.5s ease",
        }}
      ></Box>
    </Box>
  );
};

export default NavigationDrawers;

// <Box sx={{ display: "flex", overflow: "hidden" }}>
//   <Box
//     sx={{
//       width: "40vh",
//       marginTop: 1,
//       marginLeft: 1,
//       height: "full",
//       paddingTop: 3,
//       paddingLeft: 3,
//       display: "flex",
//       flexDirection: "column",
//       transition: "right 0.5s ease",
//       backgroundColor: "lightgray",
//     }}
//   >
//     <Box
//       sx={{
//         borderBottom: "2px dashed gray",
//         width: 230,
//         paddingBottom: 1,
//       }}
//     >
//       <Typography
//         variant="h5"
//         sx={{
//           fontWeight: "bold",
//           paddingBottom: "10px",
//           fontFamily: "Lilita One",
//           fontWeight: 400,
//           fontStyle: "normal",
//         }}
//       >
//         ADAPT-Wald-Holz
//       </Typography>
//     </Box>
//     <Box sx={{ marginY: 3 }}>
//       <Link to="pageone">
//         <Typography
//           variant="p"
//           sx={{
//             cursor: "pointer",
//             fontFamily: "Roboto",
//             fontWeight: 700,
//             lineHeight: 2,
//             "&:hover": { color: "#4169E1" },
//           }}
//         >
//           N2: Adaptives Waldressourcen-Management für eine
//           zukunftsfähige Holzwirtschaft in der Region Brandenburg-Berlin
//         </Typography>
//       </Link>
//     </Box>
//     <Divider sx={{ marginRight: "40px" }}></Divider>
//     <Box
//       sx={{
//         marginY: 3,
//         width: "230px",
//       }}
//     >
//       <Link to="pagetwo">
//         <Typography
//           variant="p"
//           sx={{
//             fontFamily: "Roboto",
//             fontWeight: 700,
//             "&:hover": { color: "#4169E1" },
//           }}
//         >
//           N3: Die Module
//         </Typography>
//       </Link>
//       <Box
//         sx={{
//           display: "flex",
//           flexDirection: "column",
//           pl: 3,
//           pt: 2,
//           // py: 2,
//           gap: 2,
//         }}
//       >
//         <Link to="pagefive">
//           <Typography
//             variant="p"
//             sx={{
//               fontFamily: "Roboto",
//               fontWeight: 500,
//               "&:hover": {
//                 color: "#4169E1",
//               },
//             }}
//           >
//             N3: Die ModuleN3.1.Waldmanagement
//           </Typography>
//         </Link>
//         <Link to="pagesix">
//           <Typography
//             variant="p"
//             sx={{
//               fontFamily: "Roboto",
//               fontWeight: 500,
//               "&:hover": { color: "#4169E1" },
//             }}
//           >
//         N3: Die ModuleN3.1.Waldmanagement N3.2Holzbereitstellung
//           </Typography>
//         </Link>
//         <Link to="pageseven">
//           <Typography
//             variant="p"
//             sx={{
//               fontFamily: "Roboto",
//               fontWeight: 500,
//               "&:hover": { color: "#4169E1" },
//             }}
//           >
//             N3: Die ModuleN3.1.Waldmanagement N3.2Holzbereitstellung N3.3Holzverwendung
//           </Typography>
//         </Link>
//       </Box>
//     </Box>

//     <Box
//       sx={{
//         borderTop: "2px solid #C0C0C0",
//         marginRight: 6,
//         paddingY: 2,
//         // paddingX: 2,
//       }}
//     >
//       <Typography
//         variant="p"
//         sx={{
//           fontFamily: "Roboto",
//           fontWeight: 700,
//         }}
//       >
//         N4: InnoForum Wald und Holz
//       </Typography>
//     </Box>
//     <Box
//       sx={{
//         borderTop: "2px solid #C0C0C0",
//         paddingY: 2,
//         marginRight: 6,
//       }}
//     >
//       <Link to="pageeight">
//         <Typography
//           variant="p"
//           sx={{
//             fontFamily: "Roboto",
//             fontWeight: 700,
//             "&:hover": { color: "#4169E1" },
//           }}
//         >
//           N5: Projektkonsortium
//         </Typography>
//       </Link>
//     </Box>
//     <Box
//       sx={{
//         borderTop: "2px solid #C0C0C0",
//         marginRight: 6,
//         paddingY: 2,
//       }}
//     >
//       <Link to="pagefour">
//         <Typography
//           variant="p"
//           sx={{
//             fontFamily: "Roboto",
//             fontWeight: 700,
//             "&:hover": { color: "#4169E1" },
//           }}
//         >
//           N6: REGULUS
//         </Typography>
//       </Link>
//     </Box>
//     <Box
//       sx={{
//         borderTop: "2px solid #C0C0C0",
//         marginRight: 6,
//         paddingY: 2,
//       }}
//     >
//       <Link to="imprint">
//         <Typography
//           variant="p"
//           sx={{
//             fontFamily: "Roboto",
//             fontWeight: 700,
//             "&:hover": { color: "#4169E1" },
//           }}
//         >
//           Impressum
//         </Typography>
//       </Link>
//     </Box>
//   </Box>
// </Box>
