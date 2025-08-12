import styled, { useTheme } from "styled-components"
import { theme } from "../../styles/theme"
import type { ReactNode } from "react"


const Button = styled.button<ButtonTypes>`
color: ${props=>props.color || theme.colors.red_0};
padding: ${props=>props.padding || "10rem"};
background-color: ${props=>props.background || theme.colors.white_0};
border:none;
border-radius:5px;
`

type ButtonTypes = {
    children:ReactNode;
    className?:"string";
    padding?:"string";
    background?:"string";
    color?:"string";
}


const RedButton = ({children}:ButtonTypes)=>{
    const theme = useTheme();
    return(
        <Button color={theme.colors.white_0}>{children}</Button>
    )
}