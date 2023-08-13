import React, { useState } from "react";
import { Box, Skeleton, Tab } from "@mui/material";
import { TabContext } from "@mui/lab";
import { TabList } from "@mui/lab";
import { TabPanel } from "@mui/lab";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#313131",
    },
  },
});

const Tabs = ({ recipe }) => {
  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ width: "100%", typography: "body1", fontFamily: "Poppins" }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList
              onChange={handleChange}
              indicatorColor={theme.primary}
              textColor={theme.primary}
            >
              <Tab
                className="tab-selected"
                label="Instruction"
                value="1"
                sx={{ fontFamily: "Poppins" }}
              />
              <Tab
                className="tab-selected"
                label="Ingrediants"
                value="2"
                sx={{ fontFamily: "Poppins" }}
              />
            </TabList>
          </Box>
          <TabPanel value="1" sx={{ padding: "0 10px" }}>
            {!recipe.instructions ? (
              <Skeleton
                variant="text"
                animation="wave"
                width={{ md: 480 }}
                sx={{ fontSize: "1rem", marginTop: "10px" }}
              />
            ) : (
              <h3
                dangerouslySetInnerHTML={{ __html: recipe.instructions }}
              ></h3>
            )}
          </TabPanel>
          <TabPanel value="2" sx={{ padding: "0 10px" }}>
            {!recipe.extendedIngredients ? (
              <Skeleton
                variant="text"
                animation="wave"
                width={{ md: 480 }}
                sx={{ fontSize: "1rem", marginTop: "10px" }}
              />
            ) : (
              recipe.extendedIngredients.map((ingrediant) => (
                <li key={ingrediant.id} className="ingrediant-list">
                  {ingrediant.original}
                </li>
              ))
            )}
          </TabPanel>
        </TabContext>
      </Box>
    </ThemeProvider>
  );
};

export default Tabs;