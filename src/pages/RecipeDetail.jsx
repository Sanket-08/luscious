import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Box, Stack, Skeleton, Typography } from "@mui/material";
import Tabs from "../components/Tabs";
import { motion } from "framer-motion";
import { apiKey } from "../utils/constant";

const RecipeDetail = () => {
  const [recipe, setRecipe] = useState([]);
  const searchTerm = useParams();

  useEffect(() => {
    axios
      .get(
        `https://api.spoonacular.com/recipes/${searchTerm.id}/information?apiKey=${apiKey}`
      )
      .then((res) => setRecipe(res.data));
  }, []);



  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {!recipe.title ? (
        <Skeleton
          variant="text"
          animation="wave"
          width="150px"
          sx={{ fontSize: "30px", marginBottom: "1rem" }}
        />
      ) : (
        <Typography
          variant="h6"
          sx={{ fontFamily: "Poppins", marginBottom: "1rem" }}
        >
          {recipe.title}
        </Typography>
      )}

      <Stack direction={{ xs: "column", md: "row" }} spacing={2}>
        <Box sx={{ width: { md: 400 } }}>
          {!recipe.image ? (
            <Skeleton variant="rectangular" height={250} animation="wave" />
          ) : (
            <img
              src={recipe.image}
              alt={recipe.id}
              style={{ objectFit: "cover", width: "100%" }}
            />
          )}
        </Box>
        <Box sx={{ width: { md: 500 } }}>
          <Tabs recipe={recipe} />
        </Box>
      </Stack>
    </motion.div>
  );
};

export default RecipeDetail;