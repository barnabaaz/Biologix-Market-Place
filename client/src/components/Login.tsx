import React from "react";
import styled from "styled-components";
import Button from "@mui/material/Button";

const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
  justify-content: center;
  align-items: center;
`;
const LoginContainer = styled.div`
  height: 70%;
  width: 430px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  padding: 30px 20px;
`;
const LogoContainer = styled.div``;
const HeaderContainer = styled.div``;
const Header = styled.h2``;

const Form = styled.form`
  border: 1px solid rgba(0, 0, 0, 0.9);
  display: flex;
  flex-direction: column;
`;

const Login = () => {
  return (
    <Container>
      <LoginContainer>
        <LogoContainer>Logo</LogoContainer>
        <HeaderContainer>
          <Header>Login</Header>
        </HeaderContainer>
      </LoginContainer>
    </Container>
  );
};

export default Login;
