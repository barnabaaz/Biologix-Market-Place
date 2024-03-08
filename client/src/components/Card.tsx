import React from "react";
import styled from "styled-components";
import { FaCartPlus } from "react-icons/fa";
import { Cart } from "../packageType";

import { FaDotCircle } from "react-icons/fa";
const Card = styled.div`
  height: 500px;
  width: 100%;
  border: 1px solid #ececec;
  border-radius: 10px;
  transition: border-color 0.4s;
  -webkit-box-flex: 0;
  -ms-flex: 0 0 auto;
  flex: 0 0 auto;
  width: calc(33.33333333% - 30px);
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;

  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;

  @media (max-width: 1160px) {
    width: calc(50% - 30px);
  }
  @media (max-width: 768px) {
    width: 300px;
  }

  &:hover {
    border-color: #0077ae;
    box-shadow: 0 1px 9px rgba(0, 119, 174, 0.28);
  }
`;
const CardContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
`;
const CardTitleContainer = styled.div`
  min-height: 50px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  padding: 15px;
  display: grid;
  background-color: #f6dada;
  /* background-color: #f2f8fb; */
  min-height: 50px;

  color: rgba(1, 7, 12, 0.66);
`;
const CardTitle = styled.div`
  color: #003766;
  font-weight: 600;
`;
const PriceContainer = styled.div`
  display: block;
`;
const OldPrice = styled.div`
  font-size: 12px;
  color: #ed4e4e;
  justify-self: flex-end;
  text-decoration: line-through;
`;
const Price = styled.div`
  /* color: #0077ae; */
  color: #003766;
  font-weight: 400;
  margin-left: 10px;
`;
const DiscountContainer = styled.div``;
const DiscountTag = styled.div`
  border-radius: 10px;
  padding: 2px 15px;
  font-size: 11px;
  background-color: #ed4e4e;
  font-weight: 700;
  color: white;
`;
const TestCountContainer = styled.div`
  display: flex;
  padding: 10px 15px;
  color: rgba(3, 32, 56, 0.66);
  justify-content: space-between;
`;
const ProductTestContainer = styled.div<Height>`
  max-height: ${(props) => (props.active ? "180px" : "100px")};
  padding-left: 15px;
  padding-right: 15px;
  padding-bottom: 20px;
`;
const ProductScroll = styled.div`
  height: 180px;
  width: 100%;
  overflow-y: auto;
  padding-right: 3px;
  scrollbar-color: #e8e8e8 transparent;
  scrollbar-width: thin;
  scroll-margin-right: 10px;
  &::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.03);
    border-radius: 10px;
    background-color: #f5f5f5;
  }

  &::-webkit-scrollbar {
    width: 8px;
    background-color: #f5f5f5;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 9px;

    background-color: #aec2cd;
  }
`;
export const TestContainer = styled.div`
  width: 100%;
  display: flex;
  column-gap: 5px;
  word-break: break-word;
  text-align: left;
  justify-content: start;
  align-items: center;
  padding-bottom: 10px;
`;
export const TestTitle = styled.div`
  color: #003766;
  font-size: 13px;
  font-weight: 300;
  font-style: italic;
  letter-spacing: 0.15px;
`;
const ProductDescription = styled.div`
  color: rgba(0, 55, 102, 0.66);
  font-size: 12px;
  font-weight: 400;
  font-style: normal;
  letter-spacing: 0.15px;
  padding: 0 15px;
  text-align: left;
`;
const Description = styled.div`
  padding-bottom: 15px;
`;
export const AddToCartButtonContainer = styled.div`
  margin-bottom: 15px;
  padding-left: 15px;
  padding-right: 15px;
  position: absolute;
  display: grid;
  bottom: 0;
  left: 0;
  width: calc(100% - 30px);
`;
export const AddToCartButton = styled.button<Active>`
  font-weight: 700;
  font-style: normal;
  letter-spacing: 0.17px;
  transition: background-color 0.4s;
  font-size: 14px;
  border-radius: 100px;
  height: 40px;
  width: 100%;
  justify-content: center;
  align-items: center;
  display: flex;
  outline: none;
  border: none;

  cursor: ${(props) => (props.active ? "pointer" : "not-allowed")};
  color: white;
  background-color: ${(props) => (props.active ? "#ed4e4e;" : "#666")};
  &:hover {
    background-color: ${(props) => (props.active ? "#ae3a3a;" : "#666")};
  }
`;
type AppProps = {
  description: string;
  title: string;
  price: number;
  discount: number;
  listOfTest: string[];
  discountTag: boolean;
  addToCart: (parameter: Cart, category: string) => void;
  cartData: Cart[];
  id: number;
  selected: boolean;
  category: string;
  tag: string;
};
interface Active {
  active: boolean;
}
interface Height {
  active: boolean;
}
const Card2 = ({
  price,
  description,
  title,
  listOfTest,
  discountTag,
  tag,
  addToCart,
  cartData,
  discount,
  id,
  selected,
  category,
}: AppProps) => {
  const itemObject = { price, listOfTest, title, id, selected, category };
  const [active, setActive] = React.useState<boolean>(false);
  return (
    <Card>
      <CardContainer>
        <CardTitleContainer>
          {discountTag && <OldPrice>&#8358;{price.toLocaleString()}</OldPrice>}
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <CardTitle>{title}</CardTitle>
            <PriceContainer>
              <Price>
                {tag === "exoseq" ? (
                  "CALL"
                ) : discountTag ? (
                  <span>
                    {" "}
                    &#8358;
                    {Math.ceil(price * (1 - discount / 100)).toLocaleString()}
                  </span>
                ) : (
                  <span>&#8358;{price.toLocaleString()}</span>
                )}
              </Price>
            </PriceContainer>
          </div>
        </CardTitleContainer>
        <TestCountContainer style={{ color: "#ed4e4e", fontSize: "14px" }}>
          {listOfTest.length === 0 ? 1 + " Test" : listOfTest.length + " Tests"}
          {discountTag && (
            <DiscountContainer>
              <DiscountTag>10% off</DiscountTag>
            </DiscountContainer>
          )}
        </TestCountContainer>
        <ProductTestContainer active={listOfTest.length > 0 ? true : false}>
          <ProductScroll>
            {listOfTest.map((item, index) => (
              <TestContainer key={index}>
                <FaDotCircle style={{ color: "#ed4e4e", fontSize: "14px" }} />
                <TestTitle>{item}</TestTitle>
              </TestContainer>
            ))}
          </ProductScroll>
        </ProductTestContainer>
        <ProductDescription>
          <Description>{description}</Description>
        </ProductDescription>
        <AddToCartButtonContainer>
          <AddToCartButton
            onClick={() => addToCart(itemObject, category)}
            active={selected}
            disabled={!selected}
          >
            <span style={{ paddingRight: "10px" }}>
              <i>
                <FaCartPlus />
              </i>
            </span>
            {selected ? "Add To" : "Added To"} Cart
          </AddToCartButton>
        </AddToCartButtonContainer>
      </CardContainer>
    </Card>
  );
};

export default Card2;
