import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const Pagenotfound = () => {
  const navigate = useNavigate();
  const Headerbg =
    "https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif";
  return (
    <Box
      sx={{
        height: "100vh",
        position: "relative",
        backgroundImage: `url(${Headerbg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <Box
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Typography sx={{ fontSize: "90px", textAlign: "center" }}>
          404
        </Typography>
      </Box>
      <Box sx={{ textAlign: "center", marginTop: "27%" }}>
        <Typography variant="h3">Look like you're lost</Typography>
        <Typography>The page you are looking for is not available!</Typography>
        <Button
          variant="contained"
          color="success"
          onClick={() => navigate("/")}
        >
          Go to Home
        </Button>
      </Box>
    </Box>
  );
};

export default Pagenotfound;
