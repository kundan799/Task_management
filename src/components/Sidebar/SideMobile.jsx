import { AppBar, Box, Grid, IconButton, Toolbar } from "@mui/material";
import React from "react";

import { useNavigate } from "react-router-dom";
import dashbord from "../../assest/Dashboard.svg";
import createproject from "../../assest/create-project.svg";
import projectlist from "../../assest/Project-list-active.svg";
import logout from "../../assest/Logout.svg";

const SideMobile = () => {
  const navigate = useNavigate();
  //logout
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };
  const handledashbord = () => {
    navigate("/dashbord");
  };
  const handleProjectlist = () => {
    navigate("/projectlist");
  };
  const handleCreateProject = () => {
    navigate("/createproject");
  };
  return (
    <>
      <Box
        sx={{
          height: "auto",
          width: "38%",
          margin: "auto",
          padding: "15px",
          display: "flex",
          justifyContent: "center",

          // border:"1px solid red"
        }}
      >
        <Grid container spacing={4}>
          <Grid item>
            <img src={dashbord} alt="dashbordimg" onClick={handledashbord} />
          </Grid>
          <Grid item>
            <img
              src={projectlist}
              alt="projectlist"
              onClick={handleProjectlist}
            />
          </Grid>
          <Grid item>
            <img
              src={createproject}
              alt="createlogo"
              onClick={handleCreateProject}
            />
          </Grid>
        </Grid>
      </Box>
      <Box
        sx={{
          marginTop: "70px",
          border: "1px solid green",
          padding: "20px",
          "@media (max-width:600px)": {
            display: "none",
          },
        }}
      >
        <img src={logout} alt="logoutlogo" onClick={handleLogout} />
      </Box>
    </>
  );
};

export default SideMobile;
