import { useTheme } from "@emotion/react";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  Select,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const theme1 = useTheme();
  const navigate = useNavigate();
  const [theme, setTheme] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedendDate, setSelectedendDate] = useState("");
  const [division, setDivision] = useState("");
  const [category, setCategory] = useState("");
  const [type, setTyppe] = useState("");
  const [reason, setReason] = useState("");
  const [prority, setPrority] = useState("");
  const [department, setDepartment] = useState("");
  const [location, setLocation] = useState("");
  const [error, setError] = useState(false);
  const [date, setDate] = useState(false);
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  const containerStyle = {
    display: "flex",
    gap: "20px",
    width: "100%",
    marginTop: "20px",
    flexDirection: isSmallScreen ? "column" : "row",
  };

  const formControlStyle = {
    minWidth: isSmallScreen ? "100%" : "350px",
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (theme.trim() === "") {
      setError(true);
    } else {
      // Perform submission logic
      setError(false);
      // ...
    }
    if (selectedDate > selectedendDate) {
      setDate(true);
    } else {
      setDate(false);

      const data = {
        Name: theme,
        startDate: selectedDate,
        enddate: selectedendDate,
        division: division,
        category: category,
        type: type,
        reason: reason,
        prority: prority,
        department: department,
        location: location,
        status: "Register",
      };

      console.log(data);
      const url = "https://tame-school-uniform-bear.cyclic.app/api/project";
      axios
        .post(url, data)
        .then((res) => {
          alert("data posted");
          navigate("/projectlist");
        })
        .catch((err) => console.log("getting error while posting data"));
    }
  };
  return (
    <Box
      sx={{
        // border: "1px solid red",
        width: "95%",
        height: "450px",
      }}
    >
      <form onSubmit={handleSubmit}>
        <Box
          sx={{
            maxWidth: "100%",
            display: "flex",
            // border: "1px solid blue",
            width: "100%",
          }}
        >
          <Box
            sx={{
              width: "60%",

              [theme1.breakpoints.down("sm")]: {
                width: "100%",
              },
            }}
          >
            <TextField
              sx={{ width: "100%" }}
              placeholder="Enter project theme"
              value={theme}
              onChange={(e) => setTheme(e.target.value)}
              error={error}
            />
            {error && (
              <Typography variant="caption" color="error">
                Enter project theme is required
              </Typography>
            )}
          </Box>
          <Button
            variant="contained"
            sx={{
              marginLeft: "140px",
              height: "40px",
              marginTop: "7px",
              borderRadius: "20px",
              "@media (max-width:600px)": {
                display: "none",
              },
            }}
            type="submit"
          >
            Save project
          </Button>
        </Box>

        <Box
          sx={{
            width: "100%",
            height: "350px",
            //   border: "1px solid blue",
            marginTop: "40px",
          }}
        >
          <Box sx={containerStyle}>
            <Box>
              <InputLabel htmlFor="grouped-native-select">Reason</InputLabel>
              <FormControl sx={formControlStyle}>
                <Select
                  native
                  defaultValue=""
                  value={reason}
                  onChange={(e) => setReason(e.target.value)}
                >
                  <option value="">For personal</option>
                  <optgroup>
                    <option value={"Bussiness"}>Bussiness</option>
                    <option value={"Delearship"}>Delearship</option>
                    <option value={"Transport"}>Transport</option>
                  </optgroup>
                </Select>
              </FormControl>
            </Box>
            <Box>
              <InputLabel htmlFor="grouped-native-select">Type</InputLabel>
              <FormControl sx={formControlStyle}>
                <Select
                  native
                  defaultValue=""
                  value={type}
                  onChange={(e) => setTyppe(e.target.value)}
                >
                  <option value="" disabled>
                    External
                  </option>
                  <optgroup>
                    <option value={"External"}>External</option>
                    <option value={"Internal"}>Internal</option>
                  </optgroup>
                </Select>
              </FormControl>
            </Box>
            <Box>
              <InputLabel htmlFor="grouped-native-select">Devision</InputLabel>
              <FormControl sx={formControlStyle}>
                <Select
                  native
                  defaultValue=""
                  value={division}
                  onChange={(e) => setDivision(e.target.value)}
                >
                  <option value="" disabled>
                    Filter
                  </option>
                  <optgroup>
                    <option value={"Compraser"}>Compraser</option>
                    <option value={"Filter"}>Filter</option>
                    <option value={"Pump"}>Pump</option>
                  </optgroup>
                </Select>
              </FormControl>
            </Box>
          </Box>
          <Box sx={containerStyle}>
            <Box>
              <InputLabel htmlFor="grouped-native-select">Category</InputLabel>
              <FormControl sx={formControlStyle}>
                <Select
                  native
                  defaultValue=""
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                >
                  <option value="" disabled>
                    Qualty A
                  </option>
                  <optgroup>
                    <option value={"Qualty A"}>Qualty A</option>
                    <option value={"Qualty B"}>Qualty B</option>
                    <option value={"Qualty C"}>Qualty C</option>
                  </optgroup>
                </Select>
              </FormControl>
            </Box>
            <Box>
              <InputLabel htmlFor="grouped-native-select">Prority</InputLabel>
              <FormControl sx={formControlStyle}>
                <Select
                  native
                  defaultValue=""
                  value={prority}
                  onChange={(e) => setPrority(e.target.value)}
                >
                  <option value="" disabled>
                    High
                  </option>
                  <optgroup>
                    <option value={"High"}> High</option>
                    <option value={"Low"}>Low</option>
                  </optgroup>
                </Select>
              </FormControl>
            </Box>
            <Box>
              <InputLabel htmlFor="grouped-native-select">
                Department
              </InputLabel>
              <FormControl sx={formControlStyle}>
                <Select
                  native
                  defaultValue=""
                  value={department}
                  onChange={(e) => setDepartment(e.target.value)}
                >
                  <option value="" disabled>
                    Stratety
                  </option>
                  <optgroup>
                    <option value={"Stratety"}>Stratety</option>
                    <option value={"Financial"}>Financial</option>
                    <option value={"MAN<"}>MAN</option>
                  </optgroup>
                </Select>
              </FormControl>
            </Box>
          </Box>
          <Box sx={containerStyle}>
            <Box>
              <InputLabel htmlFor="grouped-native-select">
                Start date as per project plain
              </InputLabel>
              <TextField
                sx={formControlStyle}
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                error={error}
                helperText={
                  error ? (
                    "Start Date is required"
                  ) : date ? (
                    <span style={{ color: "red" }}>
                      Start date cannot be greater than the end date.
                    </span>
                  ) : (
                    ""
                  )
                }
              />
            </Box>
            <Box>
              <InputLabel htmlFor="grouped-native-select">
                End date as per project plain
              </InputLabel>
              <TextField
                sx={formControlStyle}
                type="date"
                value={selectedendDate}
                onChange={(e) => setSelectedendDate(e.target.value)}
                error={error}
                helperText={error && " End Date is required"}
              />
            </Box>
            <Box>
              <InputLabel htmlFor="grouped-native-select">Location</InputLabel>
              <FormControl sx={formControlStyle}>
                <Select
                  native
                  defaultValue=""
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                >
                  <option value="">Pune</option>
                  <optgroup>
                    <option value={"Ranchi"}>Ranchi</option>
                    <option value={"Patna"}>Patna</option>
                    <option value={"Bihar"}>Bihar</option>
                  </optgroup>
                </Select>
              </FormControl>
            </Box>
          </Box>
          <Typography sx={{ marginLeft: "920px", marginTop: "10px" }}>
            Status: <span style={{ fontWeight: "bold" }}>Register</span>
          </Typography>
          <Button
            variant="contained"
            sx={{
              width: "100%",
              height: "40px",
              marginTop: "-35px",
              display: "none",
              borderRadius: "20px",
              "@media (max-width:600px)": {
                display: "block",
              },
            }}
            type="submit"
          >
            Save project
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default Form;
