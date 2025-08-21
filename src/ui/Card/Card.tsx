import type { ReactNode } from "react";
import styled from "styled-components";
import { theme } from "../../styles/theme";

const CardBox = styled.div<CardTypes>`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 340px;
  height: 250px;
  background-color: #F5F5F5;
  background-image: url(${props => props.image});
  background-position: center;
  background-repeat: no-repeat;
  padding: 10px 10px;
  border-radius: 8px;
  box-sizing: border-box;
  position: relative;
  overflow: hidden; /* Ensure the button doesn't overflow outside the card */
`;

const BottomButton = styled.div`
  background-color: black;
  color: ${theme.colors.white_0};
  text-align: center;
  padding: 10px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  margin: 0;
  opacity: 0; /* Hidden by default */
  transform: translateY(100%); /* Start below the card */
  transition: opacity 0.3s ease, transform 0.3s ease; /* Smooth transition */
  
  /* Show and rise on hover of CardBox */
  ${CardBox}:hover & {
    opacity: 1;
    transform: translateY(0); /* Move to its original position */
  }
`;

export type CardTypes = {
  children?: ReactNode;
  image?: string;
};

const Card = ({ children, image }: CardTypes) => {
  return (
    <CardBox image={image}>
      {children}
      <BottomButton>Add to cart</BottomButton>
    </CardBox>
  );
};

export default Card;