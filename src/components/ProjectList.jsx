import { Box, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import Headerbg from "../assest/Header-bg.svg";
import logo from "../assest/Logo.svg";

import Sidebar from "./Sidebar/Sidebar";
import TableData from "./Table/TableData";
import ProjectlistMobile from "./Projectlist/ProjectlistMobile";
import { useTheme } from "@emotion/react";

const ProjectList = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Box
      sx={{
        display: "flex",
      }}
    >
      {isMobile ? (
        <ProjectlistMobile />
      ) : (
        <>
          {/* <-------------------------------sidebar-----------------------------------> */}
          <Box
            sx={{
              width: "5%",
              height: "99vh",
              boxShadow: "0px 0px 15px -10px rgba(0, 0, 0, 0.75)",
            }}
          >
            <Sidebar />
          </Box>
          <Box
            sx={{
              width: "95%",
              height: "99vh",
            }}
          >
            {/* <img src={Headerbg} alt="headerbg"/> */}
            <Box
              sx={{
                height: "140px",
                position: "relative",
                backgroundImage: `url(${Headerbg})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                //   border: "1px solid red",
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
                    fontWeight: "bold",
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
                <img src={logo} alt="logo" />
              </Box>
              {/* <------------------------------form-----------------------------------> */}
              <Box
                sx={{
                  width: "95%",
                  height: "500px",
                  boxShadow: "0px 0px 15px -10px rgba(0, 0, 0, 0.75)",
                  position: "absolute",
                  top: "70%",
                  left: 0,
                  right: 0,
                  margin: "auto",

                  borderRadius: "10px",
                  backgroundColor: "white",
                }}
              >
                <Box sx={{ marginTop: "30px" }}>
                  <TableData />
                </Box>
              </Box>
            </Box>
          </Box>
        </>
      )}
    </Box>
  );
};

export default ProjectList;
