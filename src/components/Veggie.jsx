import React, { useState, useEffect } from "react";
import axios from "axios";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { Box, Card, CardMedia, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { apiKey } from "../utils/constant";

const Veggie = () => {
  const [veggie, setVeggie] = useState([]);

  useEffect(() => {
    const check = localStorage.getItem("veggie");

    if (check) {
      setVeggie(JSON.parse(check)); 
    } else {
      axios
        .get(
          `https://api.spoonacular.com/recipes/random?apiKey=${apiKey}&number=9&tags=vegetarian`
        )
        .then((res) =>
          localStorage.setItem(
            "veggie",
            JSON.stringify(res.data.recipes), 
            setVeggie(res.data.recipes)
          )
        );
    }
  }, []);

  return (
    <div>
      <h3>Our Vegetarian Picks</h3>
      <Splide
        options={{
          perPage: 3,
          breakpoints: {
            640: {
              perPage: 1,
              gap: "1.5rem",
            },
            768: {
              perPage: 2,
              gap: "2rem",
            },
            1024: {
              perPage: 3,
            },
          },
          arrows: false,
          pagination: false,
          drag: "free",
          gap: "2.5rem",
        }}
      >
        {veggie.map((recipe) => (
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
                  height="150"
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

export default Veggie;