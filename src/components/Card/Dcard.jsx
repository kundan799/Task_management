import { useTheme } from "@emotion/react";
import { Card, CardContent, Typography, useMediaQuery } from "@mui/material";
import React from "react";

const Dcard = ({ data, cancelledData, closedData, StartData }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <>
      <Card
        sx={{
          width: isMobile ? "30%" : "17%",
          height: "80px",
          // border: "1px solid red",
          borderRadius: "10px",
          display: "flex",
        }}
      >
        <CardContent
          sx={{
            borderLeft: "7px solid #00baf2",
            width: "100%",
          }}
        >
          <Typography
            sx={{
              color: "grey",
              fontWeight: "bold",
              fontSize: {
                xs: "10px",
                sm: "12px",
                md: "14px",
                lg: "16px",
              },
            }}
          >
            Total Project
          </Typography>
          <Typography
            sx={{
              fontSize: {
                xs: "24px",
                sm: "12px",
                md: "14px",
                lg: "30px",
              },
              fontWeight: "bold",
            }}
          >
            {data.length}
          </Typography>
        </CardContent>
      </Card>
      <Card
        sx={{
          width: isMobile ? "30%" : "17%",
          height: "80px",
          // border: "1px solid red",
          borderRadius: "10px",
          display: "flex",
        }}
      >
        <CardContent
          sx={{
            borderLeft: "7px solid #00baf2",
            width: "100%",
          }}
        >
          <Typography
            sx={{ color: "grey", fontWeight: "bold", fontSize: "12px" }}
          >
            Closed
          </Typography>
          <Typography
            sx={{
              fontSize: {
                xs: "24px",
                sm: "12px",
                md: "14px",
                lg: "30px",
              },
              fontWeight: "bold",
            }}
          >
            {closedData.length}
          </Typography>
        </CardContent>
      </Card>
      <Card
        sx={{
          width: isMobile ? "30%" : "17%",
          height: "80px",
          // border: "1px solid red",
          borderRadius: "10px",
          display: "flex",
        }}
      >
        <CardContent
          sx={{
            borderLeft: "7px solid #00baf2",
            width: "100%",
          }}
        >
          <Typography
            sx={{ color: "grey", fontWeight: "bold", fontSize: "12px" }}
          >
            Running
          </Typography>
          <Typography
            sx={{
              fontSize: {
                xs: "24px",
                sm: "12px",
                md: "14px",
                lg: "30px",
              },
              fontWeight: "bold",
            }}
          >
            {StartData.length}
          </Typography>
        </CardContent>
      </Card>
      <Card
        sx={{
          width: isMobile ? "30%" : "17%",
          height: "80px",
          // border: "1px solid red",
          borderRadius: "10px",
          display: "flex",
        }}
      >
        <CardContent
          sx={{
            borderLeft: "7px solid #00baf2",
            width: "100%",
          }}
        >
          <Typography
            sx={{ color: "grey", fontWeight: "bold", fontSize: "10px" }}
          >
            Closure Delay
          </Typography>
          <Typography
            sx={{
              fontSize: {
                xs: "24px",
                sm: "12px",
                md: "14px",
                lg: "30px",
              },
              fontWeight: "bold",
            }}
          >
            0
          </Typography>
        </CardContent>
      </Card>
      <Card
        sx={{
          width: isMobile ? "30%" : "17%",
          height: "80px",
          // border: "1px solid red",
          borderRadius: "10px",
          display: "flex",
        }}
      >
        <CardContent
          sx={{
            borderLeft: "7px solid #00baf2",
            width: "100%",
          }}
        >
          <Typography
            sx={{ color: "grey", fontWeight: "bold", fontSize: "12px" }}
          >
            Cancelled
          </Typography>
          <Typography
            sx={{
              fontSize: {
                xs: "24px",
                sm: "12px",
                md: "14px",
                lg: "30px",
              },
              fontWeight: "bold",
            }}
          >
            {cancelledData.length}
          </Typography>
        </CardContent>
      </Card>
    </>
  );
};

export default Dcard;
