import React from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";

const Cards = ({ data }) => {
  return (
    <Card sx={{ maxWidth: 345, borderRadius: "10px" }}>
      <CardMedia
        component="img"
        sx={{ width: 360, height: 180, background: "gray" }}
        image={data.image}
        alt={data.title}
      />
      <CardContent
        sx={{ background: "#494949", height: "70px", padding: "10px" }}
      >
        <Typography variant="subtitle1" fontFamily="Poppins" color="#f1f1f1">
          {data.title}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Cards;