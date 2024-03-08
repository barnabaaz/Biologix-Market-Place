import React from "react";
import Main from "./Main";
import Sidebar from "./Sidebar";
import Header from "./Header";

import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
const MainContainer = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 240px 1fr;
  @media (max-width: 820px) {
    grid-template-columns: 1fr;
  }
`;
const Layout = () => {
  return (
    <Container>
      <Header />
      <MainContainer>
        <Sidebar />
        <Main></Main>
      </MainContainer>
    </Container>
  );
};

export default Layout;
