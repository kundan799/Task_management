import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import Headerbg from "../../assest/Header-bg.svg";
import logout from "../../assest/Logout.svg";
import { useNavigate } from "react-router-dom";
import Searchitem from "../Search/SearchItem";

import axios from "axios";
import SideMobile from "../Sidebar/SideMobile";

const ProjectlistMobile = () => {
  const [data, setData] = useState([]);
  const [sortBy, setSortBy] = useState("");
  const navigate = useNavigate();
  // <--------------------------------------data fetch------------------->
  const url = "https://tame-school-uniform-bear.cyclic.app/api/project";
  const getdata = () => {
    axios
      .get(url)
      .then((res) => setData(res.data.message))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getdata();
  }, []);
  //logout
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  // handle start
  const handlestart = (id) => {
    const updatedata = {
      ...data,
      status: "Running",
    };
    axios
      .patch(`${url}/${id}`, updatedata)
      .then(() => {
        getdata();
      })
      .catch((err) => console.log("getting error by update to start"));
  };

  // handle close
  const handleClose = (id) => {
    const updatedata = {
      ...data,
      status: "Closed",
    };
    axios
      .patch(`${url}/${id}`, updatedata)
      .then(() => {
        getdata();
      })
      .catch((err) => console.log("getting error by update to Close"));
  };
  // handle cancel
  const handleCancel = (id) => {
    const updatedata = {
      ...data,
      status: "Cancel",
    };
    axios
      .patch(`${url}/${id}`, updatedata)
      .then(() => {
        getdata();
      })
      .catch((err) => console.log("getting error by update to Cancel"));
  };

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
    <Box sx={{ width: "100%", height: "auto" }}>
      <Box
        sx={{
          height: "46px",
          position: "relative",
          backgroundImage: `url(${Headerbg})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            position: "absolute",
            top: "32%",
            left: " 28%",
            transform: "translate(-50%, -50%)",
            // border: "1px solid red",
            width: "55%",
          }}
        >
          <Typography
            sx={{
              color: "white",

              fontSize: "20px",
              marginLeft: "5%",
              //   border: "1px solid red",
              display: "flex",
              justifyItems: "center",
              alignItems: "center",
            }}
          >
            Project Listing
          </Typography>
        </Box>
        <Box
          sx={{
            marginLeft: "290px",
            position: "absolute",
            top: "10px",
            //   border: "1px solid green",
          }}
        >
          <img src={logout} alt="logoutlogo" onClick={handleLogout} />
        </Box>
      </Box>
      <Box sx={{ height: "auto", width: "100%" }}>
        <Box
          sx={{
            width: "100%",

            height: "90px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box sx={{ width: "50%" }}>
            <Searchitem data={data} setData={setData} />
          </Box>

          <Box
            sx={{ width: "50%", display: "flex", padding: "10px 0px 0px 10px" }}
          >
            {/* <Sort data={data} setData={setData} /> */}
            <Typography>Sort By</Typography>
            <FormControl
              variant="standard"
              sx={{
                minWidth: 120,
                height: "20px",
              }}
            >
              <InputLabel id="demo-simple-select-standard-label">
                Priority
              </InputLabel>
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
        </Box>
        {data &&
          data.map((el) => (
            <Card
              sx={{
                width: "85%",
                margin: "auto",
                boxShadow:
                  "0px 0px 15px -10px rgba(0, 0, 0, 0.75), 0px 0px 10px rgba(0, 0, 0, 0.5)",
                marginTop: "10px",
              }}
            >
              <CardContent>
                <Typography
                  variant="body2"
                  sx={{ display: "flex", justifyContent: "space-between" }}
                >
                  <span>{el.Name}</span>
                  <span>{el.status}</span>
                </Typography>
                <Typography component="div" sx={{ color: "grey" }}>
                  {el.startDate} to {el.enddate}
                </Typography>
                <Typography sx={{ mb: 0.5 }} color="text.secondary">
                  {`Reason : ${el.reason}`}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ display: "flex", mb: 0.5, gap: "20px", color: "grey" }}
                >
                  <span> {`Type : ${el.type}`}</span>
                  <span> {`Catogery : ${el.category}`}</span>
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ display: "flex", gap: "20px", color: "grey", mb: 0.5 }}
                >
                  <span> {`Div : ${el.division}`}</span>
                  <span> {`Dept : ${el.department}`}</span>
                </Typography>
                <Typography color="grey">
                  {`Reason : ${el.location}`}
                </Typography>
                <Typography color="grey">{`Reason : ${el.prority}`}</Typography>
              </CardContent>
              <CardActions sx={{ display: "flex", gap: "20px" }}>
                <Button
                  variant="contained"
                  href="#contained-buttons"
                  style={{ borderRadius: "40px" }}
                  onClick={() => handlestart(el._id)}
                >
                  Start
                </Button>
                <Button
                  variant="outlined"
                  style={{ borderRadius: "40px" }}
                  onClick={() => handleClose(el._id)}
                >
                  Close
                </Button>
                <Button
                  variant="outlined"
                  style={{ borderRadius: "40px" }}
                  onClick={() => handleCancel(el._id)}
                >
                  Cancel
                </Button>
              </CardActions>
            </Card>
          ))}
      </Box>
      <Box
        sx={{
          position: "fixed",
          bottom: 0,
          top: "93%",
          width: "100%",
          height: "50px",
          boxShadow: "0px 0px 15px -10px rgba(0, 0, 0, 0.75)",
          backgroundColor: "white",
          // border: "1px solid blue",
          zIndex: 999,
        }}
      >
        <SideMobile />
      </Box>
    </Box>
  );
};

export default ProjectlistMobile;
