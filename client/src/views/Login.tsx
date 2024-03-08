import React from "react";
import styled from "styled-components";
import { useStore } from "../context";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import {
  Card,
  TextField,
  Box,
  Typography,
  CircularProgress,
} from "@mui/material";
import logo from "../logoBio.png";
import { position } from "stylis";

interface Loading {
  loading: boolean;
}

const Container = styled.div`
  display: flex;

  height: 100vh;
  width: 100%;
`;
const LoginContainer = styled.div<Loading>`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: auto;
  & .MuiCircularProgress-circle {
    display: ${(props) => (props.loading ? "block" : "none")};
    color: grey;
  }
`;
const LoginForm = styled.form`
  display: grid;
  gap: 10px;
  width: 100%;
`;

const Login = () => {
  const {
    loginData: { password, username, setPassword, setUsername },
    authentication: { setIsAuthenticated },
  } = useStore();
  const navigate = useNavigate();
  // states
  const [helperText, setHelperText] = React.useState({
    error: false,
    text: "",
  });

  const [loading, setLoading] = React.useState(false);

  const handleChangePassword = (event: any) => {
    event.preventDefault();
    setPassword(event.target.value);
  };
  const handleChangeUsername = (event: any) => {
    event.preventDefault();
    setUsername(event.target.value);
  };

  const handleLoginFormSubmit = (
    event: React.FormEvent,
    setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    event.preventDefault();
    setLoading(true);

    axios
      .post("http://localhost:8000/auth/token/", { username, password })
      .then((res) => {
        if (res.status === 200) {
          //set refresh and access token to local storage
          console.log(res.data);
          localStorage.setItem("access", res.data.access);
          localStorage.setItem("refresh", res.data.refresh);
          setIsAuthenticated(true);
          //set is Authenticated, true  and redirect to Dashboard
          setLoading(false);
          navigate("/dashboard");

          //
        }
      })
      .catch((err) => {
        setLoading(false);
        setHelperText({
          error: true,
          text: "invalid Username or Password",
        });
      });
  };
  return (
    <Container>
      <LoginContainer loading={loading}>
        <Card
          sx={{
            width: 400,
            height: 500,
            p: 3,
            display: "flex",
          }}
        >
          <Box
            sx={{
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Box sx={{ alignSelf: "start", mb: 4 }}>
              <img src={logo} height={50} />
            </Box>
            <Typography variant="h4" sx={{ mb: 4, textAlign: "left" }}>
              Login
            </Typography>
            <LoginForm
              onSubmit={(event) =>
                handleLoginFormSubmit(event, setIsAuthenticated)
              }
            >
              <TextField
                placeholder="enter username"
                value={username}
                onChange={handleChangeUsername}
                label="Email"
                size="small"
                error={helperText.error}
                helperText={
                  helperText.error ? helperText.text : "Enter your email"
                }
                required
              />
              <TextField
                size="small"
                placeholder="enter password"
                type="password"
                required
                autoComplete="current-password"
                label="password"
                value={password}
                error={helperText.error}
                helperText={
                  helperText.error ? helperText.text : "Enter your Password"
                }
                onChange={handleChangePassword}
              />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  position: "relative",
                }}
              >
                <Button variant="contained" type="submit" disabled={loading}>
                  Login
                </Button>

                <CircularProgress
                  size={25}
                  color="secondary"
                  sx={{
                    position: "absolute",
                    left: "45%",
                    top: "22%",
                  }}
                />
              </Box>
            </LoginForm>
            <Box sx={{ justifySelf: "left" }}>
              <Typography
                position="absolute"
                top="95%"
                left="45%"
                variant="body2"
                color="GrayText"
              >
                &copy; copyright 2024
              </Typography>
            </Box>
          </Box>
        </Card>
      </LoginContainer>
    </Container>
  );
};

export default Login;
