import Flex from "../../ui/Flex/Flex";
import Font from "../../ui/Font/Font";
import apple from "../../assets/pictures/homepage/1200px-Apple_gray_logo 1.png"
import styled, { useTheme } from "styled-components";

const FlexBanner = styled(Flex)`
  background-color: ${props => props.theme.colors.black_1};
  width:"70%";

`;


const Banner = ()=>{
    const theme = useTheme();
    return(
        <Flex justify="space-between">
        <Flex direction="column" items="start" justify="space-between" rightBorder="1px solid black"
        paddingTop="15px">
            <Font>Woman’s Fashion</Font>
            <Font>Men’s Fashion</Font>
            <Font>Electronics</Font>
            <Font>Home & Lifestyle</Font>
            <Font>Medicine</Font>
            <Font>Sports & Outdoor</Font>
            <Font>Baby’s & Toys</Font>
            <Font>Groceries & Pets</Font>
            <Font>Health & Beauty</Font>
        </Flex>
        <FlexBanner paddingTop="15px" flexBorder="2px solid firebrick">
            <Flex justify="space-between" gap="10px" left="0" right="0"><img src={apple} alt="iphonelogo" /><Font color={theme.colors.white_0}>iPhone 14 Series</Font></Flex>
        </FlexBanner>
        </Flex>
    )
}

export default Banner;








