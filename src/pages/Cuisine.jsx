import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Box, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Cards from "../components/Cards";
import { apiKey } from "../utils/constant";

const Cuisine = () => {
  const [cuisine, setCuisine] = useState([]);
  let params = useParams();

  useEffect(() => {
    const check = localStorage.getItem(params.type);

    if (check) {
      setCuisine(JSON.parse(check));
    } else {
      axios
        .get(
          `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&cuisine=${params.type}`
        )
        .then((res) =>
          localStorage.setItem(
            params.type,
            JSON.stringify(res.data.results),
            setCuisine(res.data.results)
          )
        );
    }
  }, [params.type]);


  return (
    <Box sx={{ marginBottom: "1rem" }}>
      <Grid container spacing={2}>
        {cuisine.map((recipe) => (
          <Grid item xs={12} sm={6} md={4} lg={4} key={recipe.id}>
            <Link to={`/recipe/${recipe.id}`}>
              <motion.div
                animate={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Cards data={recipe} />
              </motion.div>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Cuisine;