import type { ReactNode } from "react"
import styled from "styled-components"
import Flex from "../Flex/Flex";

const RedTitle = styled.h2`
padding:10px;
font-size:${props=>props.theme.fontSizes.regular_14};
color:${props=>props.theme.colors.red_0}`

type SectionTitleProps = {
    children: ReactNode;
}

const RedRectangle = styled.div`
border-radius:5px;
border:10px solid ${props=>props.theme.colors.red_0};
height:40px;

`

const SectionTitle = ({children}:SectionTitleProps)=>{
    return(
        <Flex gap="10px" right="0" left="0" justify="flex-start">
        <RedRectangle/>
        <RedTitle>{children}</RedTitle>
        </Flex>
    )
}

export default SectionTitle;