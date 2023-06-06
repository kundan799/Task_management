import React from "react";
import {
  Box,
  Typography,

  useMediaQuery,

} from "@mui/material";
import Headerbg from "../assest/Header-bg.svg";
import logo from "../assest/Logo.svg";
import Sidebar from "./Sidebar/Sidebar";
import Form from "./Form/Form";
import SideMobile from "./Sidebar/SideMobile";
import { useNavigate } from "react-router-dom";
import logout from "../assest/Logout.svg";

const CreateProject = () => {
  const navigate = useNavigate();
  //logout
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };
  const isMobile1 = useMediaQuery("(max-width: 600px)");
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  const boxStyle = {
    width: isMobile ? "100%" : "95%",
    height: isMobile ? "auto" : "100vh", 
  };
  const height = isMobile ? "1200px" : "auto";

  return (
    <Box
      sx={{
        display: "flex",

        height: height,
      }}
    >
      {!isMobile && (
        <Box
          sx={{
            width: "5%",
            height: "99vh",
            boxShadow: "0px 0px 15px -10px rgba(0, 0, 0, 0.75)",
          }}
        >
          <Sidebar />
        </Box>
      )}

      {isMobile && (
        <Box
          sx={{
            position: "fixed",
            bottom: 0,
            top: "93%",
            width: "100%",
            height: "50px",
            boxShadow: "0px 0px 15px -10px rgba(0, 0, 0, 0.75)",
            // border: "1px solid blue",
            zIndex: 999,
          }}
        >
          <SideMobile />
        </Box>
      )}

      <Box sx={boxStyle}>
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
              width: isMobile1 ? "55%" : "55%",
            }}
          >
            <Typography
              sx={{
                color: "white",
                fontWeight: "bold",
                fontSize: { xs: "16px", sm: "18px", md: "20px" },
                marginLeft: { xs: "2%", sm: "10%" },
                //   border: "1px solid red",
                display: "flex",
                justifyItems: "center",
                alignItems: "center",
              }}
            >
              Create Project
            </Typography>
            <Box
              sx={{
                display: isMobile1 ? "none" : "flex",
                // border: "1px solid red",
                justifyContent: "center",
                alignItems: isMobile1 ? "center" : "center",
              }}
            >
              <img src={logo} alt="logo" />
            </Box>
          </Box>
          {!isMobile1 ? null : (
            <Box
              sx={{
                marginLeft: "290px",
                //   border: "1px solid green",
                padding: "20px",
              }}
            >
              <img src={logout} alt="logoutlogo" onClick={handleLogout} />
            </Box>
          )}
          {/* <------------------------------form-----------------------------------> */}
          <Box
            sx={{
              width: "90%",
              height: "auto",
              padding: "20px",
              boxShadow: "0px 0px 15px -10px rgba(0, 0, 0, 0.75)",
              position: "absolute",
              top: "70%",
              left: 0,
              right: 0,
              margin: "auto",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "10px",
              backgroundColor: "white",
            }}
          >
            <Form />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default CreateProject;
