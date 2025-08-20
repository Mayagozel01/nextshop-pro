import styled, { useTheme } from "styled-components"
import { theme } from "../../styles/theme"
import type { ReactNode } from "react"


type ButtonTypes = {
    children:ReactNode;
    className?:string;
    padding?:string;
    background?:string;
    color?:string;
    onClick?:()=>void;
    fontSize?:string;
}

const Button = styled.button<ButtonTypes>`
color: ${props=>props.color || theme.colors.red_0};
padding: ${props=>props.padding || "1rem"};
background-color: ${props=>props.background || theme.colors.white_0};
border:none;
font-size:${props=>props.fontSize || theme.fontSizes.regular_14};
border-radius:5px;
`


const RedButton = ({children, color,padding, fontSize}:ButtonTypes)=>{
    const theme = useTheme();
    return(
        <Button color={color} background={theme.colors.red_0} padding={padding} fontSize={fontSize}>{children}</Button>
    )
}
export default RedButton;