import React, { useState } from "react";
import logiImage from "../assest/login.svg";
import logo from "../assest/Logo.svg";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import {
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Typography,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [errorinput, setErrorinput] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  // font size
  const fontSize = isMobile ? "1rem" : "2rem";
  const marginTop = isMobile ? "38%" : "35%";

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  // handle input
  const handleChange = (e) => {
    const { name, value } = e.target;

    setData({ ...data, [name]: value });
  };

  // handle form
  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log("data", data);
    // <----------------------------empty check----------------->
    let newErrors = {};

    if (!data.email.trim()) {
      newErrors.email = "Email is required";
      return;
    }

    if (!data.password.trim()) {
      newErrors.password = "Password is required";
      return;
    }
    if (Object.keys(newErrors).length > 0) {
      setErrorinput(newErrors);
      return;
    }
    // <----------------------------data fatch------------------------->
    try {
      const url = "https://tame-school-uniform-bear.cyclic.app/api/auth";
      const { data: res } = await axios.post(url, data);
      localStorage.setItem("token", res.data);
      navigate("/dashbord");
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
      }
    }
  };
  return (
    <Box
      sx={{
        position: "relative",
        height: "72vh",
        backgroundImage: `url(${logiImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: "20%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <img
          src={logo}
          alt="Logo"
          sx={{
            width: isMobile ? "65px" : "85px",
            height: isMobile ? "56px" : "76px",
          }}
        />
      </Box>
      <Box
        sx={{
          position: "absolute",
          top: marginTop,
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <Typography style={{ color: "white", fontSize }}>
          Online Project Managment
        </Typography>
      </Box>

      <Box
        sx={{
          position: "absolute",
          backgroundColor: "white",
          top: "90%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          // width: "30%",
          width: "100%",
          height: "400px",
          boxShadow: "0px 0px 15px -10px rgba(0, 0, 0, 0.75)",
          borderRadius: "10px",
          // padding: "10px",
          maxWidth: "400px",
          boxSizing: "border-box",
        }}
      >
        <form onSubmit={handleSubmit}>
          <Typography
            variant="h5"
            sx={{
              textAlign: "center",
              marginTop: "40px",
            }}
          >
            Login to get started
          </Typography>
          <Box mt="20px" ml="30px">
            <InputLabel
              sx={{
                fontWeight: "bold",
                fontSize: "15px",
              }}
            >
              Email
            </InputLabel>

            <FormControl sx={{ width: "90%" }} variant="outlined">
              <OutlinedInput
                id="email-input"
                type="email"
                name="email"
                onChange={handleChange}
                value={data.email}
                required
              />
            </FormControl>
            {errorinput.email && (
              <Typography color="red">{errorinput.email}</Typography>
            )}
          </Box>
          <Box mt="20px" ml="30px">
            <InputLabel
              sx={{
                fontWeight: "bold",
                fontSize: "15px",
              }}
            >
              Password
            </InputLabel>

            <FormControl sx={{ width: "90%" }} variant="outlined">
              <OutlinedInput
                id="outlined-adornment-password"
                name="password"
                onChange={handleChange}
                value={data.password}
                required
                type={showPassword ? "text" : "password"}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
            {errorinput.email && (
              <Typography color="red">{errorinput.password}</Typography>
            )}
          </Box>
          <Box display="flex" justifyContent="center" m={4}>
            <Button
              variant="contained"
              sx={{ width: isMobile ? "100%" : "40%", borderRadius: "20px" }}
              type="submit"
            >
              Login
            </Button>
          </Box>
          {error && (
            <Typography mt="-10px" color={"red"} textAlign={"center"}>
              {error}
            </Typography>
          )}
        </form>
      </Box>
    </Box>
  );
};

export default Login;
