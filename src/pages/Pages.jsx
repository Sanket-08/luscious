import React from "react";
import Home from "./Home";
import { Routes, Route, useLocation } from "react-router-dom";
import Cuisine from "./Cuisine";
import SearchFeed from "./SearchFeed";
import RecipeDetail from "./RecipeDetail";
import { AnimatePresence } from "framer-motion";

const Pages = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/cuisine/:type" element={<Cuisine />} />
        <Route path="/search/:searchTerm" element={<SearchFeed />} />
        <Route path="/recipe/:id" element={<RecipeDetail />} />
      </Routes>
    </AnimatePresence>
  );
};

export default Pages;