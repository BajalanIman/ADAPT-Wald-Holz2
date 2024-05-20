import { Box, Button, CardMedia, Typography } from "@mui/material";
import React from "react";
import example1 from "./../../assets/example1.jpg";
import { Link, useNavigate } from "react-router-dom";

const BlockTwo = ({ data, index }) => {
  const navigate = useNavigate();

  const panoClickHandler = () => {
    navigate(data.navigate, {
      state: {
        title: data.title,
      },
    });
  };

  return (
    <div
      className={`${
        index % 2 === 0
          ? "h-[750px] px-3 md:pr-6 flex flex-col gap-10"
          : "h-[750px] px-3 md:pl-6 flex flex-col gap-10"
      }`}
    >
      <Box sx={{ height: "45%", width: "100%" }}>
        <Button onClick={panoClickHandler}>
          <CardMedia
            sx={{
              borderRadius: 4,
              height: "40vh",
              width: "80vh",
              display: "inline-grid",
              overflow: "hidden",
              "&:hover": {
                transform: "scale(1.02)",
                transformOrigin: "40% 20%",
              },
            }}
            component="img"
            image={data.image}
            title="text"
            alt="text"
          />
        </Button>
      </Box>
      <Box
        sx={{
          height: "40%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: 4,
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          {data.title}
        </Typography>
        <Typography variant="p">{data.text}</Typography>
        {/* {data.textTwo && (
        <Typography
          variant="p"
          sx={{
            maxWidth: "100ch",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          {data.textTwo}
        </Typography>
      )} */}
      </Box>
      <Box sx={{ height: "15%" }}>
        <Link to={data.navigate}>
          <Button
            sx={{
              border: "3px solid green",
              paddingX: 5,
              paddingY: 1,
              fontWeight: "bold",
              fontSize: 15,
              fontFamily: "sans",
              color: "green",
              "&:hover": {
                color: "#6495ED",
                backgroundColor: "#F0F8FF",
              },
            }}
          >
            {data.btn}
          </Button>
        </Link>
      </Box>
    </div>
  );
};

export default BlockTwo;
