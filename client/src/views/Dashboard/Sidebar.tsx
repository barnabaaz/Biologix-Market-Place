import React from "react";
import styled from "styled-components";
import {
  BsCart,
  BsGrid1X2Fill,
  BsFillArchiveFill,
  BsFillGrid3X3GapFill,
  BsListCheck,
  BsPeopleFill,
  BsFillGearFill,
  BsMenuButtonWideFill,
} from "react-icons/bs";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Card } from "@mui/material";

interface Show {
  show: boolean;
}
const Container = styled(Card)<Show>`
  grid-area: sidebar;
  height: 100%;
  background-color: #263043;
  overflow-y: auto;
  transition: all 0.5s;
  -webkit-transition: all 0.5s;
  display: ${(props) => props.show && "inline !important"};
  position: ${(props) => props.show && "absolute"};
  z-index: ${(props) => props.show && "12 !important"};
  @media screen and (max-width: 992px) {
    display: none;
  }
  /*
    we want the z-index of the sidebar higher so that
    the charts are not showing over the sidebar 
    on small screens
  */
`;
const SidebarTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 30px 0px 30px;
  margin-bottom: 30px;
  & > span {
    display: none;
    @media screen and (max-width: 992px) {
      display: inline;
    }
  }
`;
const SidebarBrand = styled.div`
  margin-top: 15px;
  font-size: 20px;
  font-weight: 700;
`;
const SidebarList = styled.ul`
  padding: 0;
  list-style-type: none;
`;
const IconHeader = styled.i`
  vertical-align: middle;
  line-height: 1px;
  font-size: 26px;
`;
const SidebarListItem = styled.li`
  padding: 20px 20px 20px 20px;
  font-size: 18px;
  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
    cursor: pointer;
  }
  & > a {
    text-decoration: none;
    color: #9e9ea4;
  }
`;
const StyledLink = styled(Link)`
  color: #9e9ea4;
  width: 100%;
  height: 100%;
`;
const CloseIcon = styled.span`
  color: red;
  margin-left: 30px;
  margin-top: 10px;
  cursor: pointer;
`;
interface AppProps {
  openSidebarToggle: boolean;
  setOpenSidebarToggle: React.Dispatch<React.SetStateAction<boolean>>;
}

const Sidebar = ({ openSidebarToggle, setOpenSidebarToggle }: AppProps) => {
  const handleClose = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };
  return (
    <Container
      id="sidebar"
      show={openSidebarToggle}
      className={openSidebarToggle ? "sidebar-responsive" : ""}
    >
      <SidebarTitle className="sidebar-title">
        <SidebarBrand className="sidebar-brand">
          <IconHeader>
            <BsCart /> SHOP
          </IconHeader>
        </SidebarBrand>
        <CloseIcon className="icon close_icon" onClick={handleClose}>
          <FaTimes />
        </CloseIcon>
      </SidebarTitle>

      <SidebarList className="sidebar-list">
        <StyledLink to="">
          <SidebarListItem className="sidebar-list-item">
            <BsGrid1X2Fill className="icon" /> Dashboard
          </SidebarListItem>
        </StyledLink>
        <StyledLink to="products">
          <SidebarListItem className="sidebar-list-item">
            <BsFillArchiveFill className="icon" /> Products
          </SidebarListItem>
        </StyledLink>
        {/* <SidebarListItem className="sidebar-list-item">
          <a href="">
            <BsFillGrid3X3GapFill className="icon" /> Categories
          </a>
        </SidebarListItem>
        <SidebarListItem className="sidebar-list-item">
          <a href="">
            <BsPeopleFill className="icon" /> Customers
          </a>
        </SidebarListItem>
        <SidebarListItem className="sidebar-list-item">
          <a href="">
            <BsListCheck className="icon" /> Inventory
          </a>
        </SidebarListItem>
        <SidebarListItem className="sidebar-list-item">
          <a href="">
            <BsMenuButtonWideFill className="icon" /> Reports
          </a>
        </SidebarListItem>
        <SidebarListItem className="sidebar-list-item">
          <a href="">
            <BsFillGearFill className="icon" /> Setting
          </a>
        </SidebarListItem> */}
      </SidebarList>
    </Container>
  );
};

export default Sidebar;
