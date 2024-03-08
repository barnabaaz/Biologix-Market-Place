import React from "react";
import styled from "styled-components";
import { useStore } from "../context";
import Card from "./Card";

const Container = styled.div`
  height: 500px;
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 30px;
  height: 100%;
  align-items: center;
`;
const HeaderHero = styled.div``;
const CardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  @media (max-width: 768px) {
    justify-content: center;
  }
`;
const Main = () => {
  const {
    packages,
    cart: { addItem, cart, setCart, addQuantity, deleteItem, removeQuantity },
  } = useStore();
  console.log(packages);

  return (
    <Container>
      <HeaderHero>
        <h2>Hello</h2>
      </HeaderHero>
      <CardContainer>
        {packages.packages.map((item, index) => (
          <Card
            addToCart={addItem}
            cartData={cart}
            category={item.packageCategory}
            description={item.testDescription}
            discount={item.discount ? item.discount : 0}
            discountTag={item.discountTag ? item.discountTag : false}
            id={item.id}
            listOfTest={item.listOfTest}
            price={item.price}
            selected={item.selected ? item.selected : false}
            tag={item.tag ? item.tag : ""}
            title={item.packageName}
            key={index}
          />
        ))}
      </CardContainer>
    </Container>
  );
};

export default Main;
