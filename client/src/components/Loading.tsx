import { Typography } from "@mui/material";
import React, { SetStateAction } from "react";
import styled from "styled-components";
import { CircularProgress } from "@mui/material";
const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10000;
`;
interface AppProps {}
const Loading = () => {
  return (
    <Container>
      <CircularProgress size={40} color="primary" />
    </Container>
  );
};

export default Loading;
