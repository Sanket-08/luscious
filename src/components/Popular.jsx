import React, { useState, useEffect } from "react";
import axios from "axios";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { Box, Card, CardMedia, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { apiKey } from "../utils/constant";

const Popular = () => {
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    const check = localStorage.getItem("popular");

    if (check) {
      setPopular(JSON.parse(check)); //convert string into object
    } else {
      axios
        .get(
          `https://api.spoonacular.com/recipes/random?apiKey=${apiKey}&number=9`
        )
        .then((res) =>
          localStorage.setItem(
            "popular",
            JSON.stringify(res.data.recipes), //convert object into string
            setPopular(res.data.recipes)
          )
        );
    }
  }, []);

  // console.log(popular);

  return (
    <div style={{ marginBottom: "1rem" }}>
      <h3>Popular Picks</h3>
      <Splide
        options={{
          perPage: 4,
          breakpoints: {
            640: {
              perPage: 2,
              gap: "1.5rem",
            },
            768: {
              perPage: 3,
              gap: "2rem",
            },
            1024: {
              perPage: 4,
            },
          },
          arrows: false,
          pagination: false,
          drag: "free",
          gap: "2.5rem",
        }}
      >
        {popular.map((recipe) => (
          <SplideSlide key={recipe.id}>
            <Link to={`/recipe/${recipe.id}`}>
              <Card
                sx={{
                  position: "relative",
                  zIndex: "3",
                  borderRadius: "10px",
                }}
              >
                <CardMedia
                  component="img"
                  height="180"
                  image={recipe.image}
                  alt={recipe.title}
                />
              </Card>
              <Typography
                variant="subtitle2"
                component="p"
                sx={{
                  position: "absolute",
                  zIndex: 10,
                  left: "50%",
                  bottom: "0%",
                  transform: "translate(-50%, 0%)",
                  width: "100%",
                  color: "#fff",
                  fontFamily: "Poppins",
                  textAlign: "center",
                }}
              >
                {recipe.title}
              </Typography>
              <Box
                sx={{
                  position: "absolute",
                  zIndex: "5",
                  width: "100%",
                  height: "100%",
                  background:
                    "linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))",
                  top: 0,
                  borderRadius: "10px",
                }}
              ></Box>
            </Link>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default Popular;