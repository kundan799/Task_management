import {
  Box,
  Typography,
  Card,
  CardContent,
  useMediaQuery,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import Headerbg from "../assest/Header-bg.svg";
import logo from "../assest/Logo.svg";

import ChartData from "./Chart/ChartData";
import Sidebar from "./Sidebar/Sidebar";
import axios from "axios";
import { useTheme } from "@emotion/react";
import SideMobile from "./Sidebar/SideMobile";
import { useNavigate } from "react-router-dom";
import logout from "../assest/Logout.svg";
import Dcard from "./Card/Dcard";
import { Scrollbars } from "react-custom-scrollbars";

import styled from "@emotion/styled";

const Dashbord = () => {
  const CustomScrollbar = styled(Box)`
    overflow-x: scroll;
    scrollbar-width: thin;
    scrollbar-color: gray transparent;

    &::-webkit-scrollbar {
      width: 8px;
    }

    &::-webkit-scrollbar-track {
      background-color: transparent;
    }

    &::-webkit-scrollbar-thumb {
      background-color: gray;
      border-radius: 4px;
    }
  `;
  const theme = useTheme();
  const navigate = useNavigate();
  //logout
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [data, setData] = useState([]);

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

  // total status cancel
  const cancelledData = data.filter((obj) => obj.status === "Cancel");
  console.log("cancelledData", cancelledData.length);

  // total status close
  const closedData = data.filter((obj) => obj.status === "Closed");
  // start
  const StartData = data.filter((obj) => obj.status === "Running");

  return (
    <Box
      sx={{
        display: "flex",
      }}
    >
      {/* <-------------------------------sidebar------------------------------------> */}

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
      {/* <-----------------------------------background image-----------------------> */}
      <Box
        sx={{
          width: "95%",
          height: "99vh",

          //   border: "1px solid red",
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
            // border: "1px solid red",
            width: isMobile ? "104.9%" : "auto",
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
              width: isMobile ? "62%" : "55%",
            }}
          >
            <Typography
              sx={{
                color: "white",
                fontWeight: "bold",
                padding: "2px",
                fontSize: "20px",
                marginLeft: "5%",
                // border: "1px solid red",
                display: "flex",
                justifyItems: "center",
                alignItems: "center",
              }}
            >
              Dashbord
            </Typography>
            <Box
              sx={{
                display: isMobile ? "none" : "flex",
                // border: "1px solid red",
                justifyContent: "center",
                alignItems: isMobile ? "center" : "center",
              }}
            >
              <img src={logo} alt="logo" />
            </Box>
          </Box>
          {!isMobile ? null : (
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
          {/* <-----------------------project data---------------------------> */}
          {/* <Box
            sx={{
             
              position: "absolute",

              top: "82%",
              left: "2%",
              width: "97%",
              display: "flex",
              justifyContent: "space-between",
              flexDirection: isMobile ? "row" : "row",
              height: isMobile ? "200px" : "auto",
              
            }}
          >
            {isMobile ? (
              <CustomScrollbar
                sx={{
                  width: "100%",
                  height: "100px",
                  border: "1px solid green",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    flexDirection: "row",
                    border: "1px solid blue",
                    width: "100%",
                    height: "100%",
                  }}
                >
                  <Dcard
                    data={data}
                    cancelledData={cancelledData}
                    closedData={closedData}
                    StartData={StartData}
                  />
                </Box>
              </CustomScrollbar>
            ) : (
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  flexDirection: "row",
                  flexWrap: "wrap",
                  width: "100%",
                  border: "1px solid red",
                }}
              >
                <Dcard
                  data={data}
                  cancelledData={cancelledData}
                  closedData={closedData}
                  StartData={StartData}
                />
              </Box>
            )}
          
          </Box> */}
          <Box
            sx={{
              position: "absolute",
              top: "82%",
              left: isMobile ? "0%" : "2%",
              width: "97%",
              display: "flex",
              justifyContent: "space-between",
              flexDirection: isMobile ? "row" : "row",
              height: isMobile ? "200px" : "auto",
            }}
          >
            {isMobile ? (
              <Scrollbars
                style={{
                  width: "100%",
                  height: "100px",
                  // border: "1px solid green",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    // border: "1px solid blue",
                    width: "100%",
                    height: "90%",
                    overflow: "scroll",
                  }}
                >
                  <Dcard
                    data={data}
                    cancelledData={cancelledData}
                    closedData={closedData}
                    StartData={StartData}
                  />
                </Box>
              </Scrollbars>
            ) : (
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  flexDirection: "row",
                  flexWrap: "wrap",
                  width: "100%",
                  // border: "1px solid red",
                }}
              >
                <Dcard
                  data={data}
                  cancelledData={cancelledData}
                  closedData={closedData}
                  StartData={StartData}
                />
              </Box>
            )}
          </Box>
        </Box>
        {/* <----------------------------------chart total vs closed----------------------> */}
        <Typography mt="90px" ml="40px" fontWeight={"bold"}>
          Department wise- Total vs Closed
        </Typography>
        <Box>
          <ChartData />
        </Box>
      </Box>
    </Box>
  );
};

export default Dashbord;
