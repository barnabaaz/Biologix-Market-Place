import React from "react";
import styled from "styled-components";
import {
  BsFillBellFill,
  BsFillEnvelopeFill,
  BsPersonCircle,
  BsSearch,
  BsJustify,
} from "react-icons/bs";
import { Card } from "@mui/material";
const Container = styled(Card)`
  grid-area: header;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px 0 30px;
  box-shadow: 0 6px 7px -3px rgba(0, 0, 0, 0.35);
`;
const Icon = styled.i`
  vertical-align: middle;
  line-height: 1px;
  font-size: 20px;
  margin-right: 5px;
`;
const MenuIcon = styled.div`
  display: none;
  @media screen and (max-width: 992px) {
    display: inline;
    cursor: pointer;
  }
`;
const HeaderLeft = styled.div`
  @media screen and (max-width: 576px) {
    display: none;
  }
`;
interface AppProps {
  setOpenSidebarToggle: React.Dispatch<React.SetStateAction<boolean>>;
  openSidebar: boolean;
}
const HeaderRight = styled.div``;
const Header = ({ setOpenSidebarToggle, openSidebar }: AppProps) => {
  const handleOpenSidebar = () => {
    setOpenSidebarToggle(!openSidebar);
    console.log("i was clicked");
  };
  return (
    <Container>
      <MenuIcon>
        <Icon onClick={handleOpenSidebar}>
          <BsJustify />
        </Icon>
      </MenuIcon>
      <HeaderLeft>
        <Icon>
          <BsSearch />
        </Icon>
      </HeaderLeft>
      <HeaderRight>
        <Icon>
          <BsFillBellFill />
        </Icon>
        <Icon>
          <BsFillEnvelopeFill />
        </Icon>
        <Icon>
          <BsPersonCircle />
        </Icon>
      </HeaderRight>
    </Container>
  );
};

export default Header;
