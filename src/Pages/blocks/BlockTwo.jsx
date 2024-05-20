import { Button, CardMedia, Typography } from "@mui/material";
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
          ? "h-[1000px] px-6 md:pr-12 flex flex-col gap-10"
          : "h-[1000px] px-6 md:pl-12 flex flex-col gap-10"
      }`}
    >
      <Button onClick={panoClickHandler}>
        <CardMedia
          sx={{
            borderRadius: 4,
            height: 450,
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
      <Typography variant="h5" sx={{ fontWeight: "bold" }}>
        {data.title}
      </Typography>
      <Typography
        variant="p"
        sx={{
          fontSize: 17,
        }}
      >
        {data.text}
      </Typography>
      {data.textTwo && (
        <Typography
          variant="p"
          sx={{
            fontSize: 17,
            maxWidth: "100ch",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          {data.textTwo}
        </Typography>
      )}

      <div>
        <Link to={data.navigate}>
          <Button
            sx={{
              border: "3px solid green",
              paddingX: 5,
              paddingY: 1,
              fontWeight: "bold",
              fontSize: 16,
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
      </div>
    </div>
  );
};

export default BlockTwo;
