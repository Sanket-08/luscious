import React, { useState } from "react";
import { InputBase, IconButton, Paper } from "@mui/material";
import { FiSearch } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (searchTerm) {
      navigate(`/search/${searchTerm}`);
      setSearchTerm("");
    }
  };

  return (
    <div className="search-bar">
      <Paper
        component="form"
        onSubmit={handleSubmit}
        sx={{
          p: "2px 5px",
          display: "flex",
          alignItems: "center",
          width: 400,
          background: "linear-gradient(35deg, #494949, #313131)",
          borderRadius: "1rem",
        }}
      >
        <InputBase
          sx={{ ml: 1, flex: 1, fontFamily: "Poppins", color: "#fff" }}
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <IconButton type="submit" sx={{ p: "8px" }}>
          <FiSearch color="#fff" />
        </IconButton>
      </Paper>
    </div>
  );
};

export default SearchBar;