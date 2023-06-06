import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, Typography, Grid } from "@mui/material";
import dashbord from "../../assest/Dashboard.svg";
import createproject from "../../assest/create-project.svg";
import projectlist from "../../assest/Project-list-active.svg";
import logout from "../../assest/Logout.svg";

function Sidebar() {
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
          //   border: "1px solid blue",
          height: "170px",
          marginTop: "280px",
          padding: "13px",
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
          //   border: "1px solid green",
          padding: "20px",
        }}
      >
        <img src={logout} alt="logoutlogo" onClick={handleLogout} />
      </Box>
    </>
  );
}

export default Sidebar;
