import type { ReactNode } from "react";
import styled from "styled-components"
import { theme } from "../../styles/theme";

const CardBox = styled.div<CardTypes>`
display:flex;
justify-content:space-between;
flex-direction:column;
width:340px;
height:250px;
background-color:#F5F5F5;
background-image:url(${props=>props.image});
background-position: center; 
background-repeat: no-repeat;
padding: 10px 10px;
border-radius: 8px;
box-sizing: border-box;
position:relative;
`

const BottomButton = styled.div`
background-color:black;
color:${theme.colors.white_0};
position: absolute;
text-align:center;
    bottom: 0;
    left: 0;
    right: 0;
    margin: 0;
    padding:10px;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
`

export type CardTypes = {
    children?:ReactNode;
    image?:string;
}


const Card = ({children, image}:CardTypes)=>{
    return(
        <CardBox image={image} >
            {children}
            <BottomButton>Add to cart</BottomButton>
        </CardBox>

    )
}
export default Card;