import React from "react";
import styled from "styled-components";
import SidebarView from "./Sidebar";
import Main from "./Main";
import Header from "./Header";
import { useStore } from "../../context";
import { useNavigate } from "react-router-dom";
const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: grid;
  grid-template-areas: "sidebar header header header" "sidebar main main main";
  grid-template-columns: 260px 1fr 1fr 1fr;
  grid-template-rows: 0.2fr 3fr;
  background-color: #1d2634;
  @media screen and (max-width: 992px) {
    grid-template-columns: 1fr;
    grid-template-rows: 0.2fr 3fr;
    grid-template-areas:
      "header"
      "main";
  }
`;
const Layout = (): React.JSX.Element => {
  const [openSidebarToggle, setOpenSidebarToggle] =
    React.useState<boolean>(false);
  const navigate = useNavigate();
  const {
    authentication: { isAuthenticated },
  } = useStore();
  if (!isAuthenticated) {
    navigate("/login");
  }

  return (
    <Container>
      {isAuthenticated && (
        <>
          <Header
            setOpenSidebarToggle={setOpenSidebarToggle}
            openSidebar={openSidebarToggle}
          />
          <SidebarView
            openSidebarToggle={openSidebarToggle}
            setOpenSidebarToggle={setOpenSidebarToggle}
          />
          <Main />)
        </>
      )}
    </Container>
  );
};

export default Layout;
