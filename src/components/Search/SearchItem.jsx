
import {
  Box,
  FormControl,
  Input,
  InputAdornment,
 
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import React, { useState } from "react";

const Searchitem = ({ data, setData }) => {
  const [search, setSearch] = useState("");
  console.log("search", search);
  const handleChange = (e) => {
    setSearch(e.target.value);
    const ProductFilter = data.filter(
      (data) =>
        data.Name.toLowerCase().includes(search.toLowerCase()) ||
        data.division.toLowerCase().includes(search.toLowerCase()) ||
        data.category.toLowerCase().includes(search.toLowerCase()) ||
        data.type.toLowerCase().includes(search.toLowerCase()) ||
        data.reason.toLowerCase().includes(search.toLowerCase()) ||
        data.prority.toLowerCase().includes(search.toLowerCase()) ||
        data.department.toLowerCase().includes(search.toLowerCase()) ||
        data.location.toLowerCase().includes(search.toLowerCase()) ||
        data.status.toLowerCase().includes(search.toLowerCase())
    );
    setData(ProductFilter);
  };
  return (
    <Box>
      <FormControl variant="standard">
        <Input
          sx={{ width: "290%" }}
          placeholder="Search"
          value={search}
          onChange={handleChange}
          startAdornment={
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          }
        />
      </FormControl>
    </Box>
  );
};

export default Searchitem;
