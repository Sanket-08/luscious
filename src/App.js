import React from "react";
import Pages from "./pages/Pages";
import Category from "./components/Category";
import { BrowserRouter } from "react-router-dom";
import SearchBar from "./components/SearchBar";
import Navbar from "./pages/Navbar";
import { Box } from "@mui/material";

const App = () => {
  return (
    <Box
      sx={{
        margin: { xs: "0 20px", sm: "0 40px", md: "0 70px", lg: "0 200px" },
      }}
    >
      <BrowserRouter>
        <Navbar />
        <SearchBar />
        <Category />
        <Pages />
      </BrowserRouter>
    </Box>
  );
};

export default App;
