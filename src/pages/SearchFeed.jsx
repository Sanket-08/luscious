import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Box, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import Cards from "../components/Cards";
import { apiKey } from "../utils/constant";

const SearchFeed = () => {
  const [feed, setFeed] = useState([]);
  const { searchTerm } = useParams();

  useEffect(() => {
    const check = localStorage.getItem(searchTerm.search);

    if (check) {
      setFeed(JSON.parse(check));
    } else {
      axios
        .get(
          `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&query=${searchTerm}`
        )
        .then((res) =>
          localStorage.setItem(
            searchTerm,
            JSON.stringify(res.data.results),
            setFeed(res.data.results)
          )
        );
    }
  }, [searchTerm]);

  // console.log("Feed", feed);
  // console.log("Term", searchTerm);

  return (
    <Box sx={{ marginBottom: "1rem" }}>
      <h3>Search Result for: {searchTerm}</h3>
      <Grid container spacing={2}>
        {feed.map((feed) => (
          <Grid item xs={12} sm={6} md={4} lg={4} key={feed.id}>
            <Link to={`/recipe/${feed.id}`}>
              <Cards data={feed} />
            </Link>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default SearchFeed;