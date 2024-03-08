import React from "react";
import styled from "styled-components";

import { Outlet } from "react-router-dom";
import Loading from "../../components/Loading";
import { useStore } from "../../context";
const Container = styled.div`
  grid-area: main;
  overflow-y: auto;
  padding: 20px 30px;
  color: rgba(255, 255, 255, 0.95);
  background-color: #eceaea;
  position: relative;
`;
const MainTitle = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Main = () => {
  const {
    loading: { isLoading, setIsLoading },
  } = useStore();
  return (
    <Container>
      {isLoading && <Loading />}
      <Outlet />
    </Container>
  );
};

export default Main;
