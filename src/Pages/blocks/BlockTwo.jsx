import { Box, Button, CardMedia, Typography } from "@mui/material";
import React from "react";
import example1 from "./../../assets/example1.jpg";
import { Link, useNavigate } from "react-router-dom";

//
import { useState, useEffect, useRef } from "react";

const BlockTwo = ({ data, index }) => {
  const navigate = useNavigate();

  const isEven = index % 2 === 0;

  const boxRef = useRef(null);
  const [boxWidth, setBoxWidth] = useState(0);

  useEffect(() => {
    const resizeObserver = new ResizeObserver((entries) => {
      if (entries[0]) {
        setBoxWidth(entries[0].contentRect.width);
      }
    });

    if (boxRef.current) {
      resizeObserver.observe(boxRef.current);
    }

    return () => {
      if (boxRef.current) {
        resizeObserver.unobserve(boxRef.current);
      }
    };
  }, []);

  useEffect(() => {
    console.log(boxWidth);
  }, [boxWidth]);

  const panoClickHandler = () => {
    navigate(data.navigate, {
      state: {
        title: data.title,
      },
    });
  };
  // className={`${
  //   index % 2 === 0
  //     ? "h-[750px] px-3 md:pr-6 flex flex-col gap-10 bg-pink-500 md:w-[500px] lg:w-[500px]"
  //     : "h-[750px] px-3 md:pl-6 flex flex-col gap-10 bg-gray-500 md:w-[500px] lg:w-[500px]"
  // }`}
  return (
    <Box
      // ref={boxRef}
      sx={{
        height: "800px",
        width: { xs: "500px" },
        // bgcolor: "red",
        px: 3,
        display: "flex",
        flexDirection: "column",
        gap: 3,
        ...(isEven ? { pr: 6 } : { pl: 6 }),
      }}
    >
      <Box
        sx={{
          height: "45%",
          width: "100%",
          // bgcolor: "red"
        }}
      >
        <Button onClick={panoClickHandler}>
          <CardMedia
            sx={{
              borderRadius: 4,
              height: "350px",
              width: "100%",
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
          height: { xs: "40%", lg: "35%", xl: "25%" },
          width: "100%",
          // bgcolor: "blue",
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          {data.title}
        </Typography>

        {boxWidth > 350}
        <Typography variant="p">{data.text}</Typography>
      </Box>

      <Box
        sx={{
          height: "10%",
          // bgcolor: "wheat"
        }}
      >
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
    </Box>
  );
};

export default BlockTwo;
