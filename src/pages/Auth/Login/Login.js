import React, { useState } from "react";
import { Box, Container, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ButtonMain from "../../../components/Button/ButtonMain";
import LogoLogin from "../../../img/logo192.png"
function Login(props) {
  const navigate = useNavigate();
  const [username, setUserName] = useState("admin");
  const [password, setPassword] = useState("1");
  const [error, setError] = useState("");

  const onLogin = (e) => {
    e.preventDefault();
    if (!username || !password) {
      setError("Input your account to login");
      return;
    }
    if (username === "admin" && password === "1") {
      localStorage.setItem("isLogin", "true");
      navigate("/home");
    } else {
      setError("Wrong username or password");
    }
  };
  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          minHeight: "calc(100vh - 200px)",
          width: "500px",
        }}
      >

        <img src={LogoLogin} alt="LogoLogin" />
        <h1>Login</h1>
        <Box
          component="form"
          noValidate
          sx={{ mt: 1, width: "100%" }}
          onSubmit={onLogin}
        >
          <TextField
            autoComplete="off"
            margin="normal"
            required
            fullWidth
            label="Username"
            name="username"
            autoFocus
            value={username}
            onChange={(e) => {
              if (error) {
                setError(false);
              }
              setUserName(e.target.value);
            }}
            onKeyDown={(e) => {
              if (e.keyCode === 13) {
                onLogin(e);
              }
            }}
            sx={{
              "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":
                {
                  borderColor: "#FF963C",
                },
              "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                {
                  borderColor: "#FF963C",
                },
            }}
          />
          <TextField
            inputProps={{
              autoComplete: "new-password",
              form: {
                autoComplete: "off",
              },
            }}
            autoComplete="off"
            margin="normal"
            required
            fullWidth
            label="Password"
            type="password"
            id="password"
            value={password}
            onChange={(e) => {
              if (error) {
                setError(false);
              }
              setPassword(e.target.value);
            }}
            onKeyDown={(e) => {
              if (e.keyCode === 13) {
                onLogin(e);
              }
            }}
            sx={{
              "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":
                {
                  borderColor: "#FF963C",
                },
              "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                {
                  borderColor: "#FF963C",
                },
            }}
          />
          {error && (
            <Typography label="My TextField" color="error">
              {error}
            </Typography>
          )}
          <Box
            sx={{
              marginTop: "20px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <ButtonMain
              type={"submit"}
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={onLogin}
            >
              Sign In
            </ButtonMain>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}

export default Login;
