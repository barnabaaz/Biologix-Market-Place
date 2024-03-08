import React from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import styled from "styled-components";

const Container = styled.div`
  position: relative;
  padding-top: 20px;
  transition: 1s ease;
  transform: translateX(0);
  @media (max-width: 820px) {
    position: absolute;
    height: 100%;
    width: 320px;
    top: 0;
    background-color: #fafafa;
    flex-direction: column;
    margin-bottom: 0;
    z-index: 1;
    left: 0;
    transform: translateX(-100%);
    transition: 0.3 ease;
  }
`;
const Categories = styled.div`
  @media (max-width: 768px) {
    display: flex;
    column-gap: 10px;
    overflow-x: scroll;
    width: 100vw;
    width: 100%;
    justify-content: space-evenly;
    & > div:first-child {
      width: 200px;
    }
  }
`;

const FilterLabel = styled.h5`
  color: #003766;
  font-size: 24px;
  font-weight: 700;
  letter-spacing: 0.15px;
  text-transform: capitalize;
  padding-bottom: 15px;
  text-align: left;
`;
const Label = styled.div`
  text-align: left;
  border: 1px solid #ececec;
  cursor: pointer;
  transition: border-color 0.4s;
  padding: 10px;
  padding-left: 20px;

  &:hover {
    border-color: #0077ae;
    box-shadow: 0 1px 9px rgba(0, 119, 174, 0.28);
  }
  /* @media (max-width: 768px) {
    font-size: 10px;
    border-radius: 40px;
    display: flex;
    height: 100%;
    width: 100%;
    align-items: center;
    margin-bottom: 10px;
    white-space: nowrap;
    align-items: start;
    padding: 0 10px;
  } */
`;

const Item = styled.label`
  display: flex;
  column-gap: 5px;
  font-size: 14px;
  margin-bottom: 15px;
  color: #003766;
  height: 100%;
  font-weight: 600;
  text-transform: capitalize;
  cursor: pointer;
  width: 100%;
  @media (max-width: 768px) {
    font-size: 12px;
    display: block;
    padding: 0;
    width: 100%;
    text-align: center;
    margin-bottom: 0;
    padding: 10px;
    & > span {
      display: none;
    }
  }
`;
const IconContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: right;
  padding-right: 20px;
  margin-bottom: 40px;
`;
const Icon = styled.i`
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;
`;
const Sidebar = () => {
  return (
    <Container>
      <IconContainer>
        <Categories>
          <h3>Categories</h3>
        </Categories>
        <Icon>
          <FaTimes />
        </Icon>
      </IconContainer>
      <div>
        <Label>
          <Item>
            Gift Cards
            <span>(10)</span>
          </Item>
        </Label>
        <Label>
          <Item>
            Gift Cards
            <span>(10)</span>
          </Item>
        </Label>
        <Label>
          <Item>
            Gift Cards
            <span>(10)</span>
          </Item>
        </Label>
        <Label>
          <Item>
            Gift Cards
            <span>(10)</span>
          </Item>
        </Label>
      </div>
    </Container>
  );
};

export default Sidebar;
