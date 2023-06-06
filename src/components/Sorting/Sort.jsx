import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

const Sort = ({ data, setData }) => {
  const [sortBy, setSortBy] = useState("");
  const handleSortChange = (event) => {
    const selectedSortBy = event.target.value;
    setSortBy(selectedSortBy);

    // Sort the data array based on the selected sorting option
    let sortedData = [...data];
    if (selectedSortBy === "Name") {
      sortedData.sort((a, b) => a.Name.localeCompare(b.Name));
    } else if (selectedSortBy === "reason") {
      sortedData.sort((a, b) => a.reason.localeCompare(b.reason));
    } else if (selectedSortBy === "type") {
      sortedData.sort((a, b) => a.type.localeCompare(b.type));
    } else if (selectedSortBy === "division") {
      sortedData.sort((a, b) => a.division.localeCompare(b.division));
    } else if (selectedSortBy === "category") {
      sortedData.sort((a, b) => a.category.localeCompare(b.category));
    } else if (selectedSortBy === "prority") {
      sortedData.sort((a, b) => a.prority.localeCompare(b.prority));
    }
    if (selectedSortBy === "department") {
      sortedData.sort((a, b) => a.department.localeCompare(b.department));
    }
    if (selectedSortBy === "location") {
      sortedData.sort((a, b) => a.location.localeCompare(b.location));
    }
    if (selectedSortBy === "status") {
      sortedData.sort((a, b) => a.status.localeCompare(b.status));
    }
    console.log("sortedData", sortedData);

    setData(sortedData);
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
    
      }}
    >
      <Typography>Sort By</Typography>
      <FormControl
        variant="standard"
        sx={{
          m: 1,
          minWidth: 120,
          "& .MuiSelect-select": { borderBottom: "none" },
        }}
      >
        <InputLabel id="demo-simple-select-standard-label">Priority</InputLabel>
        <Select value={sortBy} onChange={handleSortChange}>
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={"Name"}>Project Name</MenuItem>
          <MenuItem value={"reason"}>Reason</MenuItem>
          <MenuItem value={"type"}>Type</MenuItem>
          <MenuItem value={"division"}>Division</MenuItem>
          <MenuItem value={"category"}>Catogery</MenuItem>
          <MenuItem value={"prority"}>Prority</MenuItem>
          <MenuItem value={"department"}>Dept</MenuItem>
          <MenuItem value={"location"}>Location</MenuItem>
          <MenuItem value={"status"}>Status</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default Sort;
